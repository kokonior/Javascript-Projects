<template>
  <div
    class="my-2 rounded-lg border-2 px-3 py-1 text-base cursor-pointer hover:bg-sky-100"
    @dblclick="TODO.goToDetailTaskList(id_item, status)"
  >
    <div class="flex justify-between">
      <div>{{ message }}</div>
      <div
        class="flex items-center hover:bg-slate-200 hover:rounded-lg"
        @click="TODO.deleteTaskList(id_item)"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  props: {
    id_item: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
};
</script>
