<template>
  <div>
    <div class="flex justify-center my-8 py-16">
      <div class="flex flex-col">
        <label class="input-label text-base mb-2">{{ title }}</label>
        <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
        <input-modal v-model="answer" :loading="loading" :placeholder="placeholder" @submit="submit"/>
        <p class="text-base mt-2">
          請於您的電子郵件信箱收取註冊代碼，往後操作各項涉及安全性的事務，皆亦需要於信箱收取驗證代號。
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button
          @click="cancel"
          class="bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3"
      >
        取消
      </button>
    </div>
  </div>
</template>

<script>
import {redirect} from "@/utils";
import InputModal from "@/components/InputModal";

export default {
  name: 'HomeView',
  components: {InputModal},
  props: {
    email: {
      type: String,
      required: false,
      default: () => null
    }
  },
  data: () => ({
    mode: 0,
    loading: false,
    token: '',
    answer: '',
    status: ''
  }),
  computed: {
    title() {
      if (!this.token) {
        return '請輸入您的暱稱：';
      } else {
        return '請輸入您的註冊代碼：';
      }
    },
    placeholder() {
      if (!this.token) {
        return '例如：星川 サラ';
      } else {
        return '例如：1234567';
      }
    }
  },
  methods: {
    cancel() {
      if (this.$router.history.length) {
        this.$router.back();
      } else {
        this.$router.replace('/')
      }
    },
    submit() {
      this.status = '';
      if (!this.answer) {
        this.status = '請輸入資料';
        return;
      }
      if (!this.token) {
        this.do()
      } else {
        this.verify()
      }
    },
    async do() {
      const form = new URLSearchParams();
      form.set('email', this.email);
      form.set('nickname', this.answer);
      this.loading = true;
      try {
        const xhr = await this.$axios.post('/register', form);
        if (xhr?.data?.register_token) {
          this.mode = 3;
          this.token = xhr.data.register_token;
        } else {
          this.status = '發生錯誤 (無錯誤代碼)';
        }
      } catch (e) {
        if (e?.response?.status === 410) {
          this.mode = 1;
        } else {
          this.status = `發生錯誤 (${e?.response?.status || '無錯誤代碼'})`;
        }
      } finally {
        this.loading = false;
      }
    },
    async verify() {
      const form = new URLSearchParams();
      form.set('code', this.answer);
      form.set('register_token', this.token);
      this.loading = true;
      try {
        await this.$axios.post('/register/verify', form)
        this.status = '註冊成功，正在寫入憑證...';
        redirect();
      } catch (e) {
        this.status = `發生錯誤 (${e?.response?.status || '無錯誤代碼'})`;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    if (this.email === null) {
      this.$router.replace('/');
    }
  }
}
</script>
