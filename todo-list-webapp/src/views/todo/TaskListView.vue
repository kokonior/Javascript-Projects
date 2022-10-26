<template>
  <div class="mx-10">
    <HeaderMenu :title="TaskList" />
    <div>
      <button
        class="text-xl font-medium hover:bg-slate-200 hover:rounded-lg p-2 mb-1 dark:bg-slate-200 dark:rounded-lg dark:hover:bg-slate-500 dark:border-gray-200"
        @click="TODO.toggleTaskListMsg()"
      >
        + New Task
      </button>
      <div class="mt-2 grid grid-cols-4 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium mb-4 dark:bg-orange-600 dark:text-orange-200"
          >
            To Do
          </p>
          <div
            v-if="todo.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600"
          >
            No Task
          </div>
          <div v-for="(item, index) in TODO.todo.task_list.todo" :key="index">
            <AddNewTaskList
              :id_item="item.id"
              :message="item.message"
              :status="item.status"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium mb-4 dark:bg-teal-200 dark:text-teal-600"
          >
            Doing
          </p>
          <div
            v-if="doing.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in TODO.todo.task_list.doing" :key="index">
            <AddNewTaskList
              :id_item="item.id"
              :message="item.message"
              :status="item.status"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Done
          </p>
          <div
            v-if="done.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in TODO.todo.task_list.done" :key="index">
            <AddNewTaskList
              :id_item="item.id"
              :message="item.message"
              :status="item.status"
            />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-rose-600 bg-rose-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Other
          </p>
          <div
            v-if="other.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in TODO.todo.task_list.other" :key="index">
            <AddNewTaskList
              :id_item="item.id"
              :message="item.message"
              :status="item.status"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import AddNewTaskList from "../../components/AddNewTaskList.vue";
import { useToDo } from "../../stores/index.js";

export default {
  data() {
    return {
      TaskList: "Task List",
      count_todo: 0,
      count_doing: 0,
      count_done: 0,
      count_other: 0,
      todo: this.TODO.todo.task_list.todo,
      doing: this.TODO.todo.task_list.doing,
      done: this.TODO.todo.task_list.done,
      other: this.TODO.todo.task_list.other,
    };
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  components: {
    HeaderMenu,
    AddNewTaskList,
  },
  created() {},
};
</script>
