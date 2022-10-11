<template>
<div class="flex justify-center items-center">
  <div class="w-[21rem] p-3 mt-3 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 duration-500 rounded-lg">
    <div class="grid grid-cols-12 gap-1">
      <div class="mt-3 col-span-12">
        <input id="alarmTime" class="h-9 rounded-lg w-full dark:bg-slate-800 duration-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 cursor-pointer" type="time">
      </div>
      <div class="mt-2 col-span-6">
        <input id="alarmLabel" class="h-9 rounded-lg w-full dark:bg-slate-800 duration-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" type="text" placeholder="Label">
      </div>
      <div class="mt-2 col-span-6">
        <select id="alarmRingtone" class="h-9 rounded-lg w-full dark:bg-slate-800 duration-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 px-3 cursor-pointer">
          <option value="digital_clock_alarm" selected>Digital Clock Alarm (Default) </option>
          <option value="mixkit">Vintage Alarm Sound</option>
          <option value="bukubukuchagama_voice">Bukubukuchagama Voice</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 mt-3 gap-1">
      <button @click="Alarm.toggleCustom('setDate')" v-if="Alarm.alarm_mode == 'repeatDay'" class="h-9 rounded-lg w-full bg-slate-50 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 font-bold text-xs border-[1px] border-slate-500">Repeat</button>
      <button @click="Alarm.toggleCustom('repeatDay')" v-else class="h-9 rounded-lg w-full bg-slate-50 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 font-bold text-xs border-[1px] border-slate-500">Set Date</button>
    </div>
    <div class="mt-3" v-if="Alarm.alarm_mode == 'repeatDay'">
      <div class="w-full grid grid-cols-7 text-center">
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="daySunday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">S</label>
          <input class="hidden repeatAlarmAtDay" id="daySunday" type="checkbox" value="Sun">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="dayMonday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">M</label>
          <input class="hidden repeatAlarmAtDay" id="dayMonday" type="checkbox" value="Mon">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="dayTuesday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">T</label>
          <input class="hidden repeatAlarmAtDay" id="dayTuesday" type="checkbox" value="Tue">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="dayWednesday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">W</label>
          <input class="hidden repeatAlarmAtDay" id="dayWednesday" type="checkbox" value="Wed">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="dayThursday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">T</label>
          <input class="hidden repeatAlarmAtDay" id="dayThursday" type="checkbox" value="Thu">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="dayFriday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">F</label>
          <input class="hidden repeatAlarmAtDay" id="dayFriday" type="checkbox" value="Fri">
        </div>
        <div class="mx-auto w-6 rounded-full duration-300 select-none">
          <label for="daySaturday" class="cursor-pointer" @click="Alarm.toggleRepeat($event)">S</label>
          <input class="hidden repeatAlarmAtDay" id="daySaturday" type="checkbox" value="Sat">
        </div>
      </div>
    </div>
    <div class="mt-3" v-else>
        <input id="alarmDate" class="h-9 rounded-lg w-full dark:bg-slate-800 duration-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 cursor-pointer" type="date">
      </div>
    <div class="my-3">
      <button @click="Alarm.newAlarm()" class="h-9 rounded-lg w-full bg-slate-50 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 px-3 font-bold text-base border-2 border-slate-600">Set Alarm</button>
    </div>
  </div>
</div>
</template>

<script>
import { useAlarm } from '@/store/index.js';

export default {
  data() {
    return {
      alarmList: []
    }
  },
  setup() {
    const Alarm = useAlarm();
    
    return {
      Alarm,
    }
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style>
input[type="time"]::-webkit-calendar-picker-indicator{
  filter: invert(50%);
}
</style>