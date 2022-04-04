<template>
  <div class="flex justify-center my-8 py-16">
    <div class="flex flex-col">
      <label class="input-label text-base mb-2">請輸入您的電子郵件：</label>
      <div class="flex rounded bg-white w-auto shadow-md md:w-[30rem]">
        <input class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
               placeholder="例如：sara@web-tech-tw.github.io" type="text">
        <button class="m-2 rounded px-4 px-4 py-2 font-semibold">
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
