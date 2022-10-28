<template>
  <div class="mx-10">
    <HeaderMenu :title="WeeklyView" />
    <div>
      <button
        @click="TODO.toggleWeeklyListMsg()"
        class="text-xl font-medium hover:bg-slate-200 hover:rounded-lg p-2 mb-1 dark:bg-slate-200 dark:rounded-lg dark:hover:bg-slate-500 dark:border-gray-200"
      >
        + New Task
      </button>
      <div class="mt-2 mb-10 grid grid-cols-4 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.monday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.monday.length == 0,
            }"
          >
            Monday
          </p>
          <div v-if="TODO.todo.weekly.list_day.monday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.monday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="monday"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.tuesday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.tuesday.length == 0,
            }"
          >
            Tuesday
          </p>
          <div v-if="TODO.todo.weekly.list_day.tuesday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.tuesday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="tuesday"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.wednesday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.wednesday.length == 0,
            }"
          >
            Wednesday
          </p>
          <div v-if="TODO.todo.weekly.list_day.wednesday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.wednesday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="wednesday"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-rose-600 bg-rose-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.thursday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.thursday.length == 0,
            }"
          >
            Thursday
          </p>
          <div v-if="TODO.todo.weekly.list_day.thursday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.thursday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="thursday"
            />
          </div>
        </div>
      </div>
      <div class="mt-2 mx-32 grid grid-cols-3 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.friday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.friday.length == 0,
            }"
          >
            Friday
          </p>
          <div v-if="TODO.todo.weekly.list_day.friday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.friday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="friday"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.saturday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.saturday.length == 0,
            }"
          >
            Saturday
          </p>
          <div v-if="TODO.todo.weekly.list_day.saturday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.saturday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="saturday"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium"
            :class="{
              'mb-4': TODO.todo.weekly.list_day.sunday.length != 0,
              'mb-2': TODO.todo.weekly.list_day.sunday.length == 0,
            }"
          >
            Sunday
          </p>
          <div v-if="TODO.todo.weekly.list_day.sunday.length == 0">
            <p class="ml-3 italic text-slate-600 font-medium">None</p>
          </div>
          <div
            v-for="(item, index) in TODO.todo.weekly.list_day.sunday"
            :key="index"
          >
            <AddNewWeeklyList
              :id_item="index"
              :message="item.message"
              :day="sunday"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import { useToDo } from "../../stores/index.js";
import AddNewWeeklyList from "../../components/AddNewWeeklyList.vue";

export default {
  data() {
    return {
      WeeklyView: "Weekly List",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    };
  },
  components: {
    HeaderMenu,
    AddNewWeeklyList,
  },
  setup() {
    const TODO = useToDo();
    return { TODO };
  },
};
</script>
