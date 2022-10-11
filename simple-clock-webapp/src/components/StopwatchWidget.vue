<template>
  <div class="col-span-4 row-span-3 rounded-lg">
    <div
      class="col-span-4 row-span-3 rounded-lg flex items-center justify-center"
    >
      <h1 class="text-4xl font-mono">Stopwatch</h1>
    </div>
    <div
      class="col-span-4 row-span-3 rounded-lg flex items-center justify-center"
    >
      <!-- <h1 class="text-sm">Today is {{ Clock.date }}</h1> -->
    </div>
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