<template>
  <div
    class="my-3 mx-1 px-4 py-3 drop-shadow-ls w-80 rounded-lg flex flex-col justify-start shadow-md dark:bg-slate-200 dark:hover:bg-slate-300"
  >
    <div class="flex justify-between">
      <input
        type="text"
        autofocus
        :id="TODO.todo.checklist.list[id_item - 1].id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="TODO.todo.checklist.list[id_item - 1].title"
        required
        v-if="TODO.todo.checklist.list[id_item - 1].show_title == true"
        @keydown.enter="
          (TODO.todo.checklist.list[id_item - 1].show_title = false),
            TODO.updateTitleCL(id_item - 1)
        "
        @focusout="TODO.todo.checklist.list[id_item - 1].show_title = false"
      />
      <p
        @dblclick="TODO.showTitleCL(id_item - 1)"
        v-if="TODO.todo.checklist.list[id_item - 1].show_title == false"
        class="text-xl w-full font-medium border-b-4 flex items-center dark:border-b-4 dark:border-slate-500 cursor-pointer"
      >
        {{ TODO.todo.checklist.list[id_item - 1].title }}
      </p>
      <div
        class="flex items-center justify-end hover:bg-slate-100 w-fit hover:rounded-xl cursor-pointer"
        @click="TODO.toggleDeleteMsg(id_item - 1)"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="gray"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </div>
    </div>
    <div class="mb-1 mt-1 grid grid-flow-row grid-cols-4">
      <i class="mb-1 text-xs col-span-1 font-medium">Category</i>
      <i
        class="mb-1 text-xs col-span-3 font-medium cursor-pointer"
        @dblclick="showCategory = true"
        v-if="showCategory == false"
        >{{
          TODO.todo.checklist.list[id_item - 1].category.length != 0
            ? TODO.todo.checklist.list[id_item - 1].category.join(", ")
            : "None"
        }}</i
      >
      <div
        class="col-span-3"
        v-if="showCategory == true"
        @click="showListCategory = !showListCategory"
        @dblclick="
          (showCategory = false && showListCategory == false),
            TODO.updateCategoryCL(id_item - 1)
        "
      >
        <button
          data-dropdown-toggle="dropdown"
          class="w-full flex justify-between hover:bg-slate-100 focus:outline-none font-medium rounded-lg text-sm pl-3 text-center items-center dark:hover:bg-slate-100 dark:focus:ring-blue-300"
          type="button"
        >
          <i class="text-sm" @click="closeCategory()">Choose Category</i>
          <div>
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div
        class="col-span-4 flex flex-row justify-around flex-wrap"
        v-if="showCategory == true && showListCategory == true"
      >
        <div v-for="(item, index) in TODO.category" :key="index">
          <div class="flex items-start">
            <div class="flex items-center">
              <input
                :id="item.name"
                v-model="TODO.todo.checklist.list[id_item - 1].category"
                type="checkbox"
                :value="item.name"
                class="flex items-center w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
              <label
                :for="item.name"
                class="flex items-center justify-center ml-2 text-sm text-gray-900 dark:text-gray-300"
                ><i>{{ item.name }}</i></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="index in TODO.todo.checklist.list[id_item - 1].items.length"
      :key="index"
    >
      <AddNewCheckList :id_item="id_item - 1" :id_new_task="index - 1" />
    </div>
    <div class="my-1" @click="TODO.addSubCheckList(id_item - 1)">
      <p
        class="text-sm hover:bg-slate-100 hover:rounded-lg text-slate-500 cursor-pointer p-1"
      >
        + New
      </p>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-500">
      Created at {{ TODO.todo.checklist.list[id_item - 1].date }}
    </p>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";
import AddNewCheckList from "../components/AddNewCheckList.vue";

export default {
  data() {
    return {
      CheckList: "Check List",
      showCategory: false,
      showListCategory: false,
    };
  },
  components: {
    AddNewCheckList,
  },
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
  },
  methods: {
    closeCategory() {
      if (this.showCategory == true && this.showListCategory == true) {
        this.showCategory = false;
        this.showListCategory = false;
      }
    },
  },
};
</script>
