<template>
  <div class="mx-10">
    <div class="flex flex-row">
      <h1
        class="text-3xl mb-3 font-medium dark:text-white hover:underline hover:cursor-pointer"
        @click="goToTaskList()"
      >
        Task List
      </h1>
      <h1 class="text-3xl mb-3 font-medium dark:text-white">
        &nbsp;&nbsp;>&nbsp;&nbsp;
      </h1>
      <HeaderMenu :title="DetailTaskList" />
    </div>
    <div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Message</label
        >
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="task_list[id_item].message"
        />
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Description</label
        >
        <textarea
          id="message"
          rows="3"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="task_list[id_item].description"
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Status</label
        >
        <div
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          @click="toggleDropdown()"
        >
          <div class="flex justify-between">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              class="text-gray-900 text-sm text-center inline-flex items-center px-4 py-2.5 dark:text-slate-400"
              type="button"
            >
              {{ returnStatus(task_list[id_item].status) }}
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
                  (task_list[id_item].status = 'todo'), (showDropdown = false);
                }
              "
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              To Do
            </li>
            <li
              @click="
                {
                  (task_list[id_item].status = 'doing'), (showDropdown = false);
                }
              "
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Doing
            </li>
            <li
              @click="
                {
                  (task_list[id_item].status = 'done'), (showDropdown = false);
                }
              "
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Done
            </li>
            <li
              @click="
                {
                  (task_list[id_item].status = 'other'), (showDropdown = false);
                }
              "
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Other
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Category</label
        >
        <div class="flex flex-wrap">
          <div v-for="(item, index) in TODO.category" :key="index">
            <div class="flex items-start mx-2">
              <div class="flex items-center">
                <input
                  :id="item.name"
                  :name="item.name"
                  v-model="task_list[id_item].category"
                  type="checkbox"
                  :value="item.name"
                  :checked="task_list[id_item].category.includes(item.name)"
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
    </div>
    <div class="flex justify-end">
      <button
        @click="TODO.gotoTaskList(), TODO.updateTaskList(id_item, status)"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import { useToDo } from "../../stores/index.js";

export default {
  data() {
    return {
      DetailTaskList: "Detail Task List",
      id_item: this.$route.params.id,
      showDropdown: false,
      status: "",
      task_list: this.TODO.todo.task_list,
    };
  },
  components: {
    HeaderMenu,
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  created() {
    this.status = localStorage.getItem("status");
    this.returnTaskList(this.status);
  },
  methods: {
    goToTaskList() {
      this.$router.push("/task-list");
    },
    returnStatus(status) {
      if (status == "todo") {
        return "To Do";
      } else if (status == "doing") {
        return "Doing";
      } else if (status == "done") {
        return "Done";
      } else if (status == "other") {
        return "Other";
      }
    },
    returnTaskList(status) {
      if (status == "todo") {
        this.task_list = this.TODO.todo.task_list.todo;
      } else if (status == "doing") {
        this.task_list = this.TODO.todo.task_list.doing;
      } else if (status == "done") {
        this.task_list = this.TODO.todo.task_list.done;
      } else if (status == "other") {
        this.task_list = this.TODO.todo.task_list.other;
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
