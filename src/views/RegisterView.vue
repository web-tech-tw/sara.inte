<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
      <input-modal v-model="answer" :placeholder="placeholder" :loading="loading" @submit="submit" />
    </div>
  </div>
</template>

<script>
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
    do() {
      const form = new URLSearchParams();
      form.set('email', this.email);
      form.set('nickname', this.answer);
      this.loading = true;
      this.$axios.post('/register', form)
          .then((xhr) => {
            if (xhr?.data?.register_token) {
              this.mode = 3;
              this.loading = false;
              this.token = xhr.data.register_token;
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch((error) => {
            if (error?.response?.status === 410) {
              this.mode = 1;
              this.loading = false;
            } else {
              this.loading = false;
              this.status = `發生錯誤 (${error?.response?.status})`;
            }
          })
          .finally(() => this.loading = false);
    },
    verify() {
      const form = new URLSearchParams();
      form.set('code', this.answer);
      form.set('register_token', this.token);
      this.loading = true;
      this.$axios.post('/register/verify', form)
          .then((xhr) => {
            if (xhr?.data?.token) {
              this.status = '成功註冊，憑證登錄中...';
              localStorage.setItem('unified_token', xhr.data.token);
              setTimeout(() => location.replace('https://web-tech-tw.github.io'), 500);
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch((error) => {
            this.loading = false;
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          })
          .finally(() => this.loading = false);
    },
  },
  created() {
    if (this.email === null) {
      this.$router.replace('/');
    }
  }
}
</script>
