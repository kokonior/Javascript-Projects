import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/category/:id",
      name: "detail-category",
      component: () => import("../views/todo/DetailCategoryView.vue"),
    },
    {
      path: "/check-list",
      name: "check-list",
      component: () => import("../views/todo/CheckList.vue"),
    },
    {
      path: "/task-list",
      name: "task-list",
      component: () => import("../views/todo/TaskListView.vue"),
    },
    {
      path: "/task-list/:id",
      name: "detail-task-list",
      component: () => import("../views/todo/DetailTaskListView.vue"),
    },
    {
      path: "/weekly-list",
      name: "weekly-list",
      component: () => import("../views/todo/WeeklyView.vue"),
    },
    {
      path: "/weekly-list/:id",
      name: "detail-weekly-list",
      component: () => import("../views/todo/DetailWeeklyList.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
