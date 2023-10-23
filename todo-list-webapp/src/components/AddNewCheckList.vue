<template>
  <div class="flex items-center justify-between my-1">
    <div class="flex items-center">
      <input
        :id="id_new_task"
        :name="id_new_task"
        type="checkbox"
        :checked="
          TODO.todo.checklist.list[this.id_item].items[id_new_task].checked
        "
        value=""
        class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="text"
        autofocus
        :id="TODO.todo.checklist.list[this.id_item].items[id_new_task].id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 mx-4 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="
          TODO.todo.checklist.list[this.id_item].items[id_new_task].title_item
        "
        required
        v-if="
          TODO.todo.checklist.list[this.id_item].items[id_new_task]
            .show_title_item == true
        "
        @keydown.enter="
          (TODO.todo.checklist.list[this.id_item].items[
            id_new_task
          ].show_title_item = false),
            TODO.updateTitleSubCL(id_item, id_new_task)
        "
      />
      <label
        @click="
          TODO.CheckedSubCL(id_item, id_new_task),
            TODO.updateCheckedSubCL(id_item, id_new_task)
        "
        @dblclick="
          TODO.todo.checklist.list[this.id_item].items[
            id_new_task
          ].show_title_item = true
        "
        v-if="
          TODO.todo.checklist.list[this.id_item].items[id_new_task]
            .show_title_item == false
        "
        :for="id_new_task"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900 cursor-pointer checked:text-gray-400"
        :class="{
          'line-through':
            TODO.todo.checklist.list[this.id_item].items[id_new_task].checked,
          'text-gray-400':
            TODO.todo.checklist.list[this.id_item].items[id_new_task].checked,
        }"
        >{{
          TODO.todo.checklist.list[this.id_item].items[id_new_task].title_item
        }}</label
      >
    </div>
    <div
      class="flex items-end justify-end cursor-pointer hover:bg-slate-200 rounded-sm"
      @click="TODO.deleteSubCheckList(id_item, id_new_task)"
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
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  name: "AddNewCheckList",
  props: {
    id_item: {
      type: Number,
      default: 0,
    },
    id_new_task: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
};
</script>
