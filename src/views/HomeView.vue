<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ statusMessage }}</p>
      <input-modal
        v-model="answer"
        :loading="isLoading"
        :placeholder="placeholder"
        :description="description"
        @submit="submit"
      />
    </div>
  </div>
</template>

<script>
import { exitApplication } from "@/utils";
import InputModal from "@/components/InputModal";

export default {
  name: "HomeView",
  components: { InputModal },
  data: () => ({
    isLoading: false,
    statusMessage: "",
    answer: "",
    sessionId: "",
  }),
  computed: {
    title() {
      if (!this.sessionId) {
        return "請輸入您的電子郵件地址：";
      } else {
        return "請輸入您的登入代碼：";
      }
    },
    placeholder() {
      if (!this.sessionId) {
        return "例如：sara@web-tech-tw.github.io";
      } else {
        return "例如：123456";
      }
    },
    description() {
      if (!this.sessionId) {
        return "";
      } else {
        return "請於您的電子郵件信箱收取登入代碼。";
      }
    },
  },
  methods: {
    submit() {
      this.statusMessage = "";
      if (!this.answer) {
        this.statusMessage = "請輸入資料";
        return;
      }
      if (!this.sessionId) {
        this.do();
      } else {
        this.verify();
      }
    },
    async do() {
      this.isLoading = true;
      try {
        const xhr = await this.$axios.post("/tokens", {
          email: this.answer,
        });
        if (xhr?.data?.session_id) {
          this.sessionId = xhr.data.session_id;
        } else {
          this.statusMessage = "發生錯誤 (無錯誤代碼)";
        }
      } catch (e) {
        if (e?.response?.status === 404) {
          this.$router.push({
            name: "register",
            params: {
              email: this.answer,
            },
          });
        } else {
          this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
        }
      } finally {
        this.isLoading = false;
      }
    },
    async verify() {
      this.isLoading = true;
      try {
        await this.$axios.patch("/tokens", {
          code: this.answer,
          session_id: this.sessionId,
        });
        this.statusMessage = "登入成功，正在寫入憑證...";
        exitApplication();
      } catch (e) {
        this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
