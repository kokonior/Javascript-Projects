<template>
  <div
    class="shadow-xl w-4/6 bg-slate-200 rounded-lg dark:bg-slate-300"
    :class="TODO.msg.weekly_list_msg ? '' : 'hidden'"
  >
    <div class="mx-9 my-4">
      <div class="flex justify-between mb-4">
        <div class="flex items-center">
          <p class="text-2xl font-medium">New Task</p>
        </div>
        <div class="flex justify-end relative">
          <button
            @click="TODO.toggleWeeklyListMsg()"
            class="hover:bg-slate-300 hover:shadow-lg hover:rounded-md dark:hover:bg-slate-400"
          >
            <svg
              class="w-6 h-6"
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
          </button>
        </div>
      </div>
      <div class="flex flex-col flex-wrap justify-items-center">
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="message"
            class="col-span-1 text-sm font-medium text-gray-900 my-auto dark:text-black"
            >Message</label
          >
          <input
            type="text"
            name="message"
            aria-describedby="helper-text-explanation"
            class="col-span-6 my-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add New Task"
            v-model="TODO.todo.weekly.message"
          />
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="description"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Description</label
          >
          <textarea
            id="message"
            name="description"
            rows="3"
            class="col-span-6 my-auto block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Description"
            v-model="TODO.todo.weekly.description"
          ></textarea>
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="day"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Day</label
          >
          <div class="flex flex-wrap flex-row my-1 col-span-6">
            <div v-for="(day, index) in TODO.weekly" :key="index" class="mt-1">
              <div class="flex items-center mr-4">
                <input
                  :id="day.name"
                  type="checkbox"
                  :name="day.name"
                  :value="day.name"
                  v-model="TODO.todo.weekly.day"
                  class="flex items-center w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
                <label
                  :for="day.name"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >{{ day.name }}</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="category"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Category</label
          >
          <div class="flex flex-wrap flex-row my-1 col-span-6">
            <div
              v-for="(item, index) in TODO.category"
              :key="index"
              class="mt-1"
            >
              <div class="flex">
                <div class="flex items-center mr-4">
                  <input
                    :id="item.name"
                    :name="item.name"
                    v-model="TODO.todo.weekly.category"
                    type="checkbox"
                    :value="item.name"
                    class="flex items-center w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                  <label
                    :for="item.name"
                    class="flex items-center justify-center ml-2 text-sm text-gray-900 dark:text-gray-300 italic"
                    >{{ item.name }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 flex justify-end">
          <button
            @click="TODO.addWeeklyList()"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save
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
  data() {
    return {
      showDropdown: false,
    };
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
