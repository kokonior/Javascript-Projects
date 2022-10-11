<template>
  <div class="col-span-4 row-span-3 rounded-lg">
    <h1>Timer</h1>
  </div>
</template>

<script>
import { useClock } from '@/store/index.js';

export default {
  setup() {
    const Clock = useClock();
    return {
      Clock
    }
  },
  methods: {
    
  },
  mounted() {
    this.Clock.date = this.Clock.getDate();
    setInterval(() => {
      this.Clock.time = this.Clock.getTime();
      this.Clock.date = this.Clock.getDate();
    }, 1000);
  },
};
</script>