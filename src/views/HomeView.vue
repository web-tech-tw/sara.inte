<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
      <input-modal
        v-model="answer"
        :loading="loading"
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
    status: "",
    token: "",
    answer: "",
    loading: false,
  }),
  computed: {
    title() {
      if (!this.token) {
        return "請輸入您的電子郵件地址：";
      } else {
        return "請輸入您的登入代碼：";
      }
    },
    placeholder() {
      if (!this.token) {
        return "例如：sara@web-tech-tw.github.io";
      } else {
        return "例如：123456";
      }
    },
    description() {
      if (!this.token) {
        return "";
      } else {
        return "請於您的電子郵件信箱收取登入代碼。";
      }
    },
  },
  methods: {
    submit() {
      this.status = "";
      if (!this.answer) {
        this.status = "請輸入資料";
        return;
      }
      if (!this.token) {
        this.do();
      } else {
        this.verify();
      }
    },
    async do() {
      const form = new URLSearchParams();
      form.set("email", this.answer);
      this.loading = true;
      try {
        const xhr = await this.$axios.post("/login", form);
        if (xhr?.data?.next_token) {
          this.token = xhr.data.next_token;
        } else {
          this.status = "發生錯誤 (無錯誤代碼)";
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
          this.status = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
        }
      } finally {
        this.loading = false;
      }
    },
    async verify() {
      const form = new URLSearchParams();
      form.set("code", this.answer);
      form.set("next_token", this.token);
      this.loading = true;
      try {
        await this.$axios.post("/login/verify", form);
        this.status = "登入成功，正在寫入憑證...";
        exitApplication();
      } catch (e) {
        this.status = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
