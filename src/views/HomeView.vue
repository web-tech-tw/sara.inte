<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
      <div class="flex rounded bg-white w-auto shadow-md md:w-[30rem]">
        <input v-model="answer"
               :disabled="loading"
               :placeholder="placeholder"
               class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
               type="text" @keydown.enter="submit">
        <button class="m-2 rounded px-4 px-4 py-2 font-semibold" @click="submit" :disabled="loading">
          <svg class="mt-1 h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    mode: 0,
    loading: false,
    token: '',
    answer: '',
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
              this.status = '成功登入，登錄憑證中...';
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
