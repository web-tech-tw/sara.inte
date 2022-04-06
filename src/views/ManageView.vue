<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md">
          <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold">
            您好，{{ profile.nickname }}，這裡是您的個人資料：
          </div>
          <div class="p-6 bg-white border-b border-gray-200">
            暱稱：{{ profile.nickname }}<br/>
            電子郵件地址：{{ profile.email }}<br/>
            Sara系統使用者識別碼：{{ profile._id }}
          </div>
          <div class="p-6 bg-white border-gray-200 text-right">
            <button
                class="bg-sky-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-sky-600 rounded mr-3"
                @click="logout">修改個人資料
            </button>
            <button
                class="bg-amber-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-amber-600 rounded"
                @click="logout">登出
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
  computed: {
    profile() {
      const token = localStorage.getItem('unified_token');
      if (!token) {
        return false;
      }
      const profile = jwtDecode(token);
      return profile?.user || null;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      location.assign('https://web-tech-tw.github.io')
    }
  }
}
</script>
