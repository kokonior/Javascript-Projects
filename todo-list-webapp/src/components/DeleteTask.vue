<template>
  <div
    class="shadow-xl w-1/4 bg-slate-200 rounded-lg dark:bg-slate-300"
    :class="TODO.msg.delete_msg ? '' : 'hidden'"
  >
    <div class="mx-9 my-4">
      <div class="flex justify-between mb-4">
        <div class="flex items-center">
          <p class="text-2xl font-medium">Delete Task</p>
        </div>
      </div>
      <div class="flex flex-col flex-wrap justify-items-center">
        <div class="mt-1 flex justify-end">
          <button
            @click="TODO.msgDeleteCheckList('no')"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            No
          </button>
          <button
            @click="TODO.msgDeleteCheckList('yes')"
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  name: "NewTask",
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
};
</script>
