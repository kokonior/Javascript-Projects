<template>
  <div class="mx-10">
    <HeaderMenu :title="Category" />
    <div>
      <CardCategory />
    </div>
  </div>
</template>

<script>
import CardCategory from "../components/CardCategory.vue";
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  data() {
    return {
      Category: "Category",
    };
  },
  components: {
    CardCategory,
    HeaderMenu,
  },
};
</script>
