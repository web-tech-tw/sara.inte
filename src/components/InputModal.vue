<template>
  <div>
    <div class="flex rounded bg-white w-auto shadow-md md:w-[30rem]">
      <input
        v-model="content"
        :disabled="loading"
        :placeholder="placeholder"
        class="
          w-full
          border-none
          bg-transparent
          px-4
          py-1
          text-gray-900
          outline-none
          focus:outline-none
        "
        type="text"
        @input="input"
        @keydown.enter="submit"
      />
      <button
        class="m-2 rounded px-4 py-2 font-semibold"
        @click="submit"
        :disabled="loading"
      >
        <svg
          class="mt-1 h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <p class="text-base mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputModal",
  props: {
    value: {
      type: String,
      required: false,
      default: () => "",
    },
    placeholder: {
      type: String,
      require: false,
      default: () => "",
    },
    loading: {
      type: Boolean,
      require: false,
      default: () => false,
    },
    description: {
      type: String,
      require: false,
      default: () => "",
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    input() {
      this.$emit("input", this.content);
    },
    submit() {
      this.content = "";
      this.$emit("submit");
    },
  },
};
</script>
