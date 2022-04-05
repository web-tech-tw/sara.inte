<template>
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
</template>

<script>
export default {
  name: 'InputModal'
}
</script>
