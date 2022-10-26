<template>
  <div class="fixed z-50 grid h-screen w-screen grid-cols-12 grid-rows-6">
    <div
      class="col-span-2 row-span-full h-screen place-content-start dark:bg-gray-700 bg-white pt-2"
    >
      <div class="mb-2 flex pl-3 text-xl dark:text-white">ToDo List WebApp</div>
      <div class="flex flex-col">
        <RouterLink
          :class="
            TODO.settings.isActive.home == true ? 'bg-blue-200 font-medium' : ''
          "
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/"
          aria-current="page"
          >Home</RouterLink
        >
        <RouterLink
          :class="
            TODO.settings.isActive.category == true
              ? 'bg-blue-200 font-medium'
              : ''
          "
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/category"
          aria-current="page"
          >Category</RouterLink
        >
        <RouterLink
          :class="
            TODO.settings.isActive.check_list == true
              ? 'bg-blue-200 font-medium'
              : ''
          "
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/check-list"
          aria-current="page"
          >Check List</RouterLink
        >
        <RouterLink
          :class="
            TODO.settings.isActive.task_list == true
              ? 'bg-blue-200 font-medium'
              : ''
          "
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/task-list"
          aria-current="page"
          >Task List</RouterLink
        >
        <RouterLink
          :class="
            TODO.settings.isActive.weekly_list == true
              ? 'bg-blue-200 font-medium'
              : ''
          "
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/weekly-list"
          aria-current="page"
          >Weekly List</RouterLink
        >
      </div>
    </div>
    <div
      class="col-span-10 row-span-full bg-black opacity-30"
      @click="TODO.toggleMenu()"
    ></div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  created() {},
  data() {
    return {
      route: this.$router,
    };
  },
  props: {},
  methods: {},
  setup() {
    const TODO = useToDo();
    return { TODO };
  },
  created() {
    this.route = this.$router.currentRoute._value.path;
    this.isActive(this.route);
  },
  methods: {
    isActive(route) {
      let name;
      if (route == "/") {
        name = "home";
      } else if (route == "/category" || route.slice(0, 10) == "/category/") {
        name = "category";
      } else if (
        route == "/check-list" ||
        route.slice(0, 12) == "/check-list/"
      ) {
        name = "check_list";
      } else if (route == "/task-list" || route.slice(0, 11) == "/task-list/") {
        name = "task_list";
      } else if (
        route == "/weekly-list" ||
        route.slice(0, 13) == "/weekly-list/"
      ) {
        name = "weekly_list";
      }
      let obj = this.TODO.settings.isActive;
      for (let key in obj) {
        if (key === name) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
      }
    },
  },
  watch: {
    $route() {
      let route = this.$router.currentRoute._value.path;
      this.isActive(route);
    },
  },
};
</script>
