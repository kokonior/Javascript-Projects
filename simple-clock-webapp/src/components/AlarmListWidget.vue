<template>
  <div class="flex justify-center items-center">
    <div class="ml-5 md:w-[34rem] grid xs:grid-cols-2 sm:grid-cols-4 gap-1">
      <div class="col-span-2 grid grid-cols-1 gap-2 rounded-lg p-5 duration-500 delay-75 dark:text-slate-50 drop-shadow-xl " v-for="alarm in Alarm.alarms" :key="alarm.id">
        <div class="grid grid-cols-2 gap-1 rounded-lg bg-slate-200 dark:bg-slate-900 p-3 duration-500 relative">
          <span @click="Alarm.removeAlarm(alarm.id)" class="material-symbols-outlined text-sm text-center absolute -right-2 -top-2 w-5 h-5 bg-rose-500 rounded-full cursor-pointer hover:scale-125 duration-200">close</span>
          <div class="col-span-2 text-xs italic">
            <h1>{{alarm.alarm_display.repeat}}</h1>
          </div>
          <div class="col-span-2 flex items-center">
            <div class="flex items-center mr-3">
              <h1 class="text-2xl font-bold">{{alarm.alarm_display.time}}</h1>
            </div>
            <div class="ml-auto flex">            
              <label :for="Alarm.id" class="inline-flex relative items-center cursor-pointer">
                <input type="hidden" name="alarmId" value="id">
                <input @click="Alarm.toggleActive(alarm.id)" type="checkbox" name="set" value="true" :id="Alarm.id" class="sr-only peer" :checked="alarm.alarm_active">
                <div class="w-11 h-6 bg-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500 duration-200"></div>
              </label>
            </div>
          </div>
          <div class="col-span-2 text-base">
            <h1>{{alarm.alarm_label}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAlarm } from '@/store/index.js';
import Localbase from 'localbase';
let db = new Localbase('db');

db.config.debug = false;

export default {
  setup() {
    const Alarm = useAlarm();
    
    return {
      Alarm
    }
  },
  methods: {
    updateTime(event) {
      console.log(event.target.value);
    }
  },
  created() {
    this.Alarm.getAllAlarm();
    setTimeout(() => {
      this.Alarm.setAllAlarm();
    }, 500);
  },
  watch: {
    "Alarm.alarms": {
      handler() {
      },
      deep: true
    }
  }
};
</script>