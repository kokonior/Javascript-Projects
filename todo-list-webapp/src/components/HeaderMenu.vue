<template>
  <h1 class="text-3xl mb-3 font-medium dark:text-white">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Task List",
    },
  },
};
</script>
