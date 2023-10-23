<template>
  <div class="mx-10 grid grid-rows-2 justify-items-center">
    <p class="dark:text-white text-7xl font-extrabold row-span-1 mb-2">404</p>
    <p class="dark:text-white text-3xl font-medium row-span-1">
      Page not found
    </p>
    <DeleteTask />
  </div>
</template>

<script>
import DeleteTask from "../components/DeleteTask.vue";

export default {
  name: "NotFound",
  components: {
    DeleteTask,
  },
};
</script>
