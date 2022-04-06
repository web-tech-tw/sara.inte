<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">{{ title }}</label>
      <p class="input-label text-base mb-2 text-red-600">{{ status }}</p>
      <input-modal v-model="answer" :loading="loading" :placeholder="placeholder" @submit="submit"/>
    </div>
  </div>
</template>

<script>
import InputModal from "@/components/InputModal";

export default {
  name: "ManageEmailView",
  components: {InputModal},
  data: () => ({
    status: '',
    token: '',
    answer: '',
    loading: false
  }),
  computed: {
    title() {
      if (!this.token) {
        return '請輸入新的電子郵件地址：';
      } else {
        return '請輸入您的轉移代碼：';
      }
    },
    placeholder() {
      if (!this.token) {
        return '例如：sara@web-tech-tw.github.io';
      } else {
        return '例如：12345678';
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
      form.set('email', this.answer);
      this.loading = true;
      this.$axios.put('/profile/email', form)
          .then((xhr) => {
            if (xhr?.data?.update_email_token) {
              this.token = xhr.data.update_email_token;
            } else {
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch((error) => {
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          })
          .finally(() => this.loading = false);
    },
    verify() {
      const form = new URLSearchParams();
      form.set('code', this.answer);
      form.set('update_email_token', this.token);
      this.loading = true;
      this.$axios.post('/profile/email/verify', form)
          .then((xhr) => {
            if (xhr?.data?.token) {
              this.status = '修改成功，正在更新憑證...';
              localStorage.setItem('unified_token', xhr.data.token);
              setTimeout(() => this.$router.replace('/manage'), 500);
            } else {
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch((error) => {
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          })
          .finally(() => this.loading = false);
    },
  }
}
</script>
