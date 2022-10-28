<template>
  <div
    class="shadow-xl w-4/6 bg-slate-200 rounded-lg dark:bg-slate-300"
    :class="TODO.msg.task_list_msg ? '' : 'hidden'"
  >
    <div class="mx-9 my-4">
      <div class="flex justify-between mb-4">
        <div class="flex items-center">
          <p class="text-2xl font-medium">New Task</p>
        </div>
        <div class="flex justify-end relative">
          <button
            @click="TODO.toggleTaskListMsg()"
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
            v-model="TODO.todo.task_list.message"
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
            v-model="TODO.todo.task_list.description"
          ></textarea>
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="status"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Status</label
          >
          <div
            class="col-span-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            @click="toggleDropdown()"
          >
            <div class="flex justify-between">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="text-gray-900 text-sm text-center inline-flex items-center px-4 py-2.5 dark:text-slate-400"
                type="button"
              >
                {{
                  TODO.todo.task_list.status
                    ? TODO.todo.task_list.status
                    : "Select Status"
                }}
              </button>
              <svg
                class="mr-3 w-4 h-4 flex justify-end my-auto"
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
          </div>
          <!-- Dropdown menu -->
          <div class="col-span-1"></div>
          <div
            id="dropdown"
            :class="{ hidden: !showDropdown }"
            class="z-10 col-span-6 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li
                @click="
                  {
                    (TODO.todo.task_list.status = 'todo'),
                      (showDropdown = false);
                  }
                "
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                To Do
              </li>
              <li
                @click="
                  {
                    (TODO.todo.task_list.status = 'doing'),
                      (showDropdown = false);
                  }
                "
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Doing
              </li>
              <li
                @click="
                  {
                    (TODO.todo.task_list.status = 'done'),
                      (showDropdown = false);
                  }
                "
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Done
              </li>
              <li
                @click="
                  {
                    (TODO.todo.task_list.status = 'other'),
                      (showDropdown = false);
                  }
                "
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Other
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="category"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Description</label
          >
          <div class="col-span-6 flex flex-wrap flex-row my-1">
            <div
              v-for="(item, index) in TODO.category"
              :key="index"
              class="mt-1"
            >
              <div class="flex">
                <div class="flex items-center mr-4">
                  <input
                    :id="item.name"
                    v-model="TODO.todo.task_list.category"
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
        <div class="mt-2 flex justify-end">
          <button
            @click="TODO.addTaskList()"
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
