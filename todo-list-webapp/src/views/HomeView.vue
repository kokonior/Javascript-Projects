<template>
  <div class="mx-10">
    <HeaderMenu :title="HomePage" />
    <div>
      <p class="text-xl font-medium border-b-4">{{ day }}</p>
      <div class="mt-3 ml-5 text-base font-medium" v-if="list_day.length == 0">
        No Task
      </div>
      <div class="mt-3 items-center justify-start">
        <div v-for="(item, index) in list_day" :key="index" class="mx-1">
          <div class="px-3 py-2 rounded-lg shadow-md bg-slate-100 my-2">
            <p>{{ item.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";
import { useToDo } from "../stores/index.js";

export default {
  data() {
    return {
      HomePage: "Home Page",
      day: "",
      list_day: this.TODO.todo,
    };
  },
  components: {
    HeaderMenu,
  },
  created() {
    this.getToday();
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  methods: {
    getToday() {
      let date = new Date();
      let day = date.getDay();
      switch (day) {
        case 0:
          day = "Sunday";
          this.list_day = this.TODO.todo.weekly.list_day.sunday;
          break;
        case 1:
          day = "Monday";
          this.list_day = this.TODO.todo.weekly.list_day.monday;
          break;
        case 2:
          day = "Tuesday";
          this.list_day = this.TODO.todo.weekly.list_day.tuesday;
          break;
        case 3:
          day = "Wednesday";
          this.list_day = this.TODO.todo.weekly.list_day.wednesday;
          break;
        case 4:
          day = "Thursday";
          this.list_day = this.TODO.todo.weekly.list_day.thursday;
          break;
        case 5:
          day = "Friday";
          this.list_day = this.TODO.todo.weekly.list_day.friday;
          break;
        case 6:
          day = "Saturday";
          this.list_day = this.TODO.todo.weekly.list_day.saturday;
          break;
      }
      this.day = day;
    },
  },
};
</script>
