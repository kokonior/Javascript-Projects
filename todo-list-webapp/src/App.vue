<template>
  <div
    class="flex justify-center items-center left-0 bottom-0 top-0 right-0 fixed"
    v-if="TODO.msg.task_list_msg || TODO.msg.delete_msg || TODO.msg.weekly_list_msg"
  >
    <PopupNewTask class="z-40 my-auto" />
    <DeleteTask class="z-40 my-auto" />
    <PopupNewWeekly class="z-40 my-auto" />
    <div
      class="bg-slate-600 w-screen h-screen fixed opacity-50"
      @click="
        TODO.msg.task_list_msg == false;
        TODO.msg.delete_msg == false;
        TODO.msg.weekly_list_msg == false;
      "
    ></div>
  </div>
  <div class="left-0 bottom-0 top-0 right-0 dark:bg-gray-700 h-screen">
    <nav
      class="w-full top-0 bg-gray-50 dark:bg-gray-700 shadow-lg shadow-slate-300 dark:shadow-gray-800"
    >
      <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6 flex justify-between">
        <div class="flex items-center">
          <button
            data-collapse-toggle="navbar-sticky"
            @click="TODO.toggleMenu()"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-4"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div>
            <label
              for="name"
              class="text-lg font-medium"
              @dblclick="show_name = true"
              v-if="show_name == false"
              >Hi, {{ TODO.name }}</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="TODO.name"
              @keydown.enter="TODO.updateName(), (show_name = false)"
              v-if="show_name"
            />
          </div>
        </div>
        <!-- <div class="flex justify-end relative">
          <button
            @click="toggleDarkMode()"
            v-if="!isDarkMode"
            :class="isDarkMode ? 'dark' : ''"
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition delay-300"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
          <button
            @click="toggleDarkMode()"
            v-if="isDarkMode"
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition delay-300"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>
        </div> -->
      </div>
    </nav>
    <div v-if="TODO.settings.show_menu">
      <Menu />
    </div>
    <div class="mt-5">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { useToDo } from "./stores/index.js";
import Menu from "./components/Menu.vue";
import PopupNewTask from "./components/PopupNewTask.vue";
import DeleteTask from "./components/DeleteTask.vue";
import PopupNewWeekly from "./components/PopupNewWeekly.vue";

export default {
  data() {
    return {
      isDarkMode: false,
      show_name: false,
    };
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  components: {
    Menu,
    PopupNewTask,
    DeleteTask,
    PopupNewWeekly,
  },
  mounted() {
    this.TODO.getCheckList();
    this.TODO.getTaskList();
    this.TODO.getWeeklyList();
    this.TODO.getName();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.isDarkMode = localStorage.getItem("darkMode");
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", this.isDarkMode);
    },
  },
  watch: {},
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
