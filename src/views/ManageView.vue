<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <button class="px-5 py-3 text-amber-50 rounded bg-amber-600 hover:bg-amber-700" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageView',
  methods: {
    logout() {
      localStorage.clear();
      location.assign('https://web-tech-tw.github.io')
    }
  }
}
</script>
