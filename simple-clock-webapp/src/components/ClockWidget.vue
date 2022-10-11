<template>
  <div class="flex justify-center items-center">
    <div class="w-[21rem] grid grid-cols-8 gap-2">
      <div @click="App.toggleShowAlarm()" class="col-span-8 grid grid-rows-1 gap-2 rounded-lg p-5 bg-slate-100 dark:bg-slate-900 duration-500 delay-75 dark:text-slate-50 drop-shadow-xl cursor-pointer">
        <div class="row-span-1 rounded-lg">
          <div class="rounded-lg flex items-center justify-center">
            <h1 class="text-4xl font-mono select-none">{{ Clock.time }}</h1>
          </div>
          <div class="row-span-1 rounded-lg flex items-center justify-center mt-1">
            <h1 class="text-sm select-none">{{ Clock.date }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useApp, useClock } from '@/store/index.js';

export default {
  setup() {
    const App = useApp();
    const Clock = useClock();
    return {
      App,
      Clock,
    }
  },
  methods: {
    
  },
  mounted() {
    this.Clock.time = this.Clock.getTime();
    this.Clock.date = this.Clock.getDate();
    setInterval(() => {
      this.Clock.time = this.Clock.getTime();
      this.Clock.date = this.Clock.getDate();
    }, 1000);
  },
};
</script>