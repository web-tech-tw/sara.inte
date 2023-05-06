<template>
  <div class="my-8 py-16">
    <div class="flex justify-center">
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
    <div class="flex justify-center mt-5">
      <button
        class="
          bg-white-500
          shadow-md
          text-sm text-black
          font-bold
          py-3
          md:px-8
          px-4
          hover:bg-slate-100
          rounded
          mr-3
        "
        @click="cancel"
      >
        取消
      </button>
    </div>
  </div>
</template>

<script>
import InputModal from "@/components/InputModal";

export default {
  name: "ManageEmailView",
  components: { InputModal },
  data: () => ({
    isLoading: false,
    statusMessage: "",
    sessionId: "",
    answer: "",
  }),
  computed: {
    title() {
      if (!this.sessionId) {
        return "請輸入新的電子郵件地址：";
      } else {
        return "請輸入您的轉移代碼：";
      }
    },
    placeholder() {
      if (!this.sessionId) {
        return "例如：sara@web-tech-tw.github.io";
      } else {
        return "例如：12345678";
      }
    },
    description() {
      if (!this.sessionId) {
        return "";
      } else {
        return "請於您的新的電子郵件信箱收取轉移代碼。";
      }
    },
  },
  methods: {
    cancel() {
      if (this.$router.history.length) {
        this.$router.back();
      } else {
        this.$router.replace("/");
      }
    },
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
      const form = new URLSearchParams();
      form.set("email", this.answer);
      this.isLoading = true;
      try {
        const xhr = await this.$axios.put("/users/me/email", form);
        if (xhr?.data?.session_id) {
          this.sessionId = xhr.data.session_id;
        } else {
          this.statusMessage = "發生錯誤 (無錯誤代碼)";
        }
      } catch (e) {
        this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
      } finally {
        this.isLoading = false;
      }
    },
    async verify() {
      const form = new URLSearchParams();
      form.set("code", this.answer);
      form.set("session_id", this.sessionId);
      this.isLoading = true;
      try {
        await this.$axios.patch("/users/me/email", form);
        this.statusMessage = "修改成功，正在寫入憑證...";
        setTimeout(() => this.$router.replace("/manage"), 500);
      } catch (e) {
        this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
