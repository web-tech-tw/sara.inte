<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col mx-5 md:mx-auto">
      <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div v-if="!edit" class="overflow-hidden shadow-md">
          <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold">
            您好，{{ profile.nickname }}，這裡是您的個人資料：
          </div>
          <div class="p-6 bg-white border-b border-gray-200">
            <span class="text-gray-600">暱稱：</span>{{ profile.nickname }}<br/>
            <span class="text-gray-600">電子郵件地址：</span>{{ profile.email }}<br/>
            <span class="text-gray-600">Sara系統使用者識別碼：</span>{{ profile._id }}
          </div>
          <div class="p-6 bg-white border-gray-200 text-right">
            <button
                class="bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded mr-3"
                @click="edit = true">修改個人資料
            </button>
            <button
                class="bg-amber-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-amber-600 rounded"
                @click="logout">登出
            </button>
          </div>
        </div>
        <div v-else class="overflow-hidden shadow-md">
          <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold">
            修改個人資料：
          </div>
          <div class="p-6 bg-white border-b border-gray-200">
            <div class="flex rounded bg-white">
              <label class="px-4 py-1 text-gray-600" for="nickname">暱稱：</label>
              <input
                  id="nickname"
                  v-model="field.nickname"
                  class="border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                  placeholder="例如：星川 サラ"
                  type="text"
              >
            </div>
          </div>
          <div class="p-6 bg-white border-b border-gray-200">
            若要修改電子郵件地址，請點
            <router-link class="text-amber-900" to="/manage/email">此處</router-link>
            。
          </div>
          <div class="p-6 bg-white border-gray-200 text-right">
            <button
                @click="edit = false"
                class="bg-white-500 shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-slate-100 rounded mr-3"
            >
              取消
            </button>
            <button
                class="bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded"
                @click="update"
            >
              確定修改
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode';

export default {
  name: 'ManageView',
  data: () => ({
    edit: false,
    field: {
      nickname: ''
    }
  }),
  computed: {
    profile() {
      const token = localStorage.getItem('unified_token');
      if (!token) {
        return false;
      }
      const profile = jwtDecode(token);
      return profile?.user || null;
    },
    authOptions() {
      return {headers: {Authorization: localStorage.getItem('unified_token')}}
    }
  },
  methods: {
    update() {
      const form = new URLSearchParams();
      form.set('nickname', this.field.nickname);
      this.$axios.put('/profile', form, this.authOptions)
          .then((xhr) => {
            if (xhr?.data?.token) {
              this.status = '修改成功，正在更新憑證...';
              localStorage.setItem('unified_token', xhr.data.token);
              setTimeout(() => location.reload(), 500);
            } else {
              this.status = '發生錯誤 (無錯誤代碼)';
            }
          })
          .catch((error) => {
            this.status = `發生錯誤 (${error?.response?.status || '無錯誤代碼'})`;
          });
    },
    logout() {
      localStorage.clear();
      location.assign('https://web-tech-tw.github.io')
    }
  },
  mounted() {
    this.field.nickname = this.profile.nickname;
  }
}
</script>
