<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
      <input-modal />
    </div>
  </div>
</template>

<script>
import InputModal from "@/components/InputModal";

export default {
  name: 'HomeView',
  components: {InputModal},
  data: () => ({
    mode: 0,
    loading: false,
    token: '',
    answer: '',
    nickname: '',
    status: ''
  }),
  computed: {
    title() {
      switch (this.mode) {
        case 0: {
          return '請輸入您的電子郵件：';
        }
        case 1: {
          return '請輸入您的登入代碼：';
        }
        case 3: {
          return '該電子郵件尚未註冊，已發送註冊代碼，請輸入您的註冊代碼：';
        }
        default: {
          return '未支援的登入模式';
        }
      }
    },
    placeholder() {
      switch (this.mode) {
        case 0: {
          return '例如：sara@web-tech-tw.github.io';
        }
        case 1: {
          return '例如：123456';
        }
        case 3: {
          return '例如：1234567';
        }
        default: {
          return '發生錯誤';
        }
      }
    }
  },
  methods: {
    submit() {
      if (!this.answer) return;
      switch (this.mode) {
        case 0: {
          this.login()
          break;
        }
        case 1: {
          this.loginVerify()
          break;
        }
        case 3: {
          this.registerVerify()
          break;
        }
      }
    },
    login() {
      const form = new URLSearchParams();
      form.set('email', this.answer);
      this.loading = true;
      this.$axios.post('/login', form)
          .then(xhr => {
            if (xhr?.data?.next_token) {
              this.mode = 1;
              this.answer = '';
              this.loading = false;
              this.token = xhr.data.next_token;
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch(error => {
            if (error?.response?.status === 404) {
              this.mode = 2;
              this.loading = false;
            } else {
              this.loading = false;
              this.status = `發生錯誤 (${error?.response?.status})`;
            }
          })
    },
    loginVerify() {
      const form = new URLSearchParams();
      form.set('code', this.answer);
      form.set('next_token', this.token);
      this.loading = true;
      this.$axios.post('/login/verify', form)
          .then(xhr => {
            if (xhr?.data?.token) {
              this.status = '成功登入，憑證登錄中...';
              localStorage.setItem('unified_token', xhr.data.token);
              setTimeout(() => location.replace('https://web-tech-tw.github.io'), 500);
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch(error => {
            this.loading = false;
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          })
    },
    register() {
      const form = new URLSearchParams();
      form.set('nickname', this.nickname);
      form.set('email', this.answer);
      this.loading = true;
      this.$axios.post('/register', form)
          .then(xhr => {
            if (xhr?.data?.register_token) {
              this.mode = 3;
              this.answer = '';
              this.loading = false;
              this.token = xhr.data.register_token;
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch(error => {
            if (error?.response?.status === 410) {
              this.mode = 1;
              this.loading = false;
            } else {
              this.loading = false;
              this.status = `發生錯誤 (${error?.response?.status})`;
            }
          })
    },
    registerVerify() {
      const form = new URLSearchParams();
      form.set('code', this.answer);
      form.set('register_token', this.token);
      this.loading = true;
      this.$axios.post('/register/verify', form)
          .then(xhr => {
            if (xhr?.data?.token) {
              this.status = '成功註冊，憑證登錄中...';
              localStorage.setItem('unified_token', xhr.data.token);
              setTimeout(() => location.replace('https://web-tech-tw.github.io'), 500);
            } else {
              this.loading = false;
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch(error => {
            this.loading = false;
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          })
    },
  }
}
</script>
