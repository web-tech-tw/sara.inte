<template>
  <div>
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
    <div class="flex justify-center mt-5">
      <button
        @click="cancel"
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
      >
        取消
      </button>
    </div>
  </div>
</template>

<script>
import { exitApplication } from "@/utils";
import InputModal from "@/components/InputModal";

export default {
  name: "HomeView",
  components: { InputModal },
  props: {
    email: {
      type: String,
      required: false,
      default: () => null,
    },
  },
  data: () => ({
    mode: 0,
    isLoading: false,
    sessionId: "",
    answer: "",
    statusMessage: "",
  }),
  computed: {
    title() {
      if (!this.sessionId) {
        return "請輸入您的暱稱：";
      } else {
        return "請輸入您的註冊代碼：";
      }
    },
    placeholder() {
      if (!this.sessionId) {
        return "例如：星川 サラ";
      } else {
        return "例如：1234567";
      }
    },
    description() {
      if (!this.sessionId) {
        return "";
      } else {
        return "請於您的電子郵件信箱收取註冊代碼。";
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
      form.set("email", this.email);
      form.set("nickname", this.answer);
      this.isLoading = true;
      try {
        const xhr = await this.$axios.post("/users", form);
        if (xhr?.data?.session_id) {
          this.mode = 3;
          this.sessionId = xhr.data.session_id;
        } else {
          this.statusMessage = "發生錯誤 (無錯誤代碼)";
        }
      } catch (e) {
        if (e?.response?.status === 410) {
          this.mode = 1;
        } else {
          this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
        }
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
        await this.$axios.patch("/users", form);
        this.statusMessage = "註冊成功，正在寫入憑證...";
        exitApplication();
      } catch (e) {
        this.statusMessage = `發生錯誤 (${e?.response?.status || "無錯誤代碼"})`;
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    if (this.email === null) {
      this.$router.replace("/");
    }
  },
};
</script>
