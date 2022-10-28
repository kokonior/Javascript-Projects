<template>
  <div class="dark:bg-gray-700">
    <div class="mx-10">
      <div class="flex flex-row">
        <h1
          class="text-3xl mb-3 font-medium dark:text-white hover:underline hover:cursor-pointer"
          @click="TODO.gotoCategory('')"
        >
          Task List
        </h1>
        <h1 class="text-3xl mb-3 font-medium dark:text-white">
          &nbsp;&nbsp;>&nbsp;&nbsp;
        </h1>
        <HeaderMenu
          :title="DetailCategory[0].toUpperCase() + DetailCategory.substring(1)"
        />
      </div>
      <div class="-mt-3">
        <div class="my-3">
          <h1 class="font-medium text-xl border-b-4 dark:text-white">
            Check List
          </h1>
          <div v-if="TODO.detail_category_item.check_list.length == 0">
            <label class="ml-2 my-2 mt-2 font-medium text-slate-500">
              None
            </label>
          </div>
          <div
            v-for="(item, index) in TODO.detail_category_item.check_list"
            :key="index"
            class="flex flex-row items-center"
          >
            <div
              class="my-3 mx-1 px-4 py-3 drop-shadow-ls w-80 rounded-lg flex flex-col justify-start shadow-md dark:bg-slate-200 dark:hover:bg-slate-300"
            >
              <div class="flex justify-between cursor-default">
                <p
                  class="text-xl w-full font-medium border-b-4 flex items-center dark:border-b-4 dark:border-slate-500"
                >
                  {{ item.title }}
                </p>
              </div>
              <div class="mt-1 grid grid-flow-row grid-cols-4 cursor-default">
                <i class="text-xs col-span-1 font-medium">Category</i>
                <i class="text-xs col-span-3 font-medium">{{
                  item.category.join(", ")
                }}</i>
              </div>
              <div
                class="my-1"
                v-for="(list, index) in item.items"
                :key="index"
              >
                <div class="flex items-center justify-between my-1">
                  <div class="flex items-center">
                    <label
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900 checked:text-gray-400"
                      >{{ list.title_item }}</label
                    >
                  </div>
                </div>
              </div>
              <div>
                <label
                  v-if="item.items.length == 0"
                  class="ml-2 my-2 text-sm font-medium text-gray-900 dark:text-gray-900 checked:text-gray-400"
                  >None</label
                >
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-500">
                Created at {{ item.date }}
              </p>
            </div>
          </div>
        </div>
        <div class="my-3">
          <h1 class="font-medium text-xl border-b-4 dark:text-white">
            Task List
          </h1>
          <div
            class="grid grid-cols-4 gap-4 grid-flow-row my-3 mx-1 px-4 py-3 drop-shadow-ls rounded-lg shadow-md dark:bg-slate-200 dark:hover:bg-slate-300"
          >
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>To Do</h1>
              <p
                v-if="TODO.detail_category_item.task_list.todo.length == 0"
                class="ml-3 font-medium text-slate-500"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.task_list
                    .todo"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Doing</h1>
              <p
                v-if="TODO.detail_category_item.task_list.doing.length == 0"
                class="ml-3 font-medium text-slate-500"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.task_list
                    .doing"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Done</h1>
              <p
                v-if="TODO.detail_category_item.task_list.done.length == 0"
                class="ml-3 font-medium text-slate-500"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.task_list
                    .done"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div>
              <h1>Other</h1>
              <p
                v-if="TODO.detail_category_item.task_list.other.length == 0"
                class="ml-3 font-medium text-slate-500"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.task_list
                    .other"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="-mt-3 flex justify-end col-span-4">
              <svg
                @click="TODO.gotoTaskList()"
                class="w-6 h-6 hover:bg-slate-100 hover:rounded-lg cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="my-3">
          <h1 class="font-medium text-xl border-b-4 dark:text-white">
            Weekly List
          </h1>
          <div
            class="grid grid-cols-7 gap-4 grid-flow-row my-3 mx-1 px-4 py-3 drop-shadow-ls rounded-lg shadow-md dark:bg-slate-200 dark:hover:bg-slate-300"
          >
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Monday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="TODO.detail_category_item.weekly_list.monday.length == 0"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .monday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Tuesday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="TODO.detail_category_item.weekly_list.tuesday.length == 0"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .tuesday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Wednesday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="TODO.detail_category_item.weekly_list.wednesday == 0"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .wednesday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Thursday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="
                  TODO.detail_category_item.weekly_list.thursday.length == 0
                "
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .thursday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Friday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="TODO.detail_category_item.weekly_list.friday.length == 0"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .friday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="border-r-4 dark:border-r-slate-600">
              <h1>Saturday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="
                  TODO.detail_category_item.weekly_list.saturday.length == 0
                "
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .saturday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div>
              <h1>Sunday</h1>
              <p
                class="ml-3 font-medium text-slate-500"
                v-if="TODO.detail_category_item.weekly_list.sunday.length == 0"
              >
                None
              </p>
              <ul class="space-y-1 max-w-md list-disc list-inside">
                <li
                  v-for="(item, index) in TODO.detail_category_item.weekly_list
                    .sunday"
                  :key="index"
                >
                  {{ item.message }}
                </li>
              </ul>
            </div>
            <div class="-mt-3 flex justify-end col-span-7">
              <svg
                @click="this.$router.push({ name: 'weekly-list' })"
                class="w-6 h-6 hover:bg-slate-100 hover:rounded-lg cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import { useToDo } from "../../stores/index.js";
export default {
  data() {
    return {
      DetailCategory: this.$route.params.id,
      todo: this.TODO,
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
    this.TODO.emptyCategory();
    this.TODO.getCategoryCheckList(this.DetailCategory);
    this.TODO.getCategoryTaskList(this.DetailCategory);
    this.TODO.getCategoryWeeklyList(this.DetailCategory);
  },
};
</script>
