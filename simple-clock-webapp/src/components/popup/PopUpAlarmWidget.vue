<template>
    <div id="main" class="bg-slate-700 bg-opacity-50 h-full w-full absolute bottom-0 top-0 left-0 right-0">
        <div class="sticky top-1/3">
            <div class="m-auto w-[16rem] h-[10rem] p-5 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 rounded-lg animate-pulse duration-75">
                <div class="text-center">
                    <h1 class="text-4xl font-bold">{{(Clock.time).substring(0, 5)}}</h1>
                    <h1>{{Clock.date}}</h1>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-5">
                    <button @click="Alarm.snoozeAlarm(alarm.id)" class="h-9 rounded-lg w-full bg-slate-50 hover:scale-110 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 px-3 font-bold text-base border-2 border-slate-600">Snooze</button>
                    <button @click="Alarm.stopAlarm(alarm.id)" class="h-9 rounded-lg w-full bg-slate-50 hover:scale-110 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 px-3 font-bold text-base border-2 border-slate-600">Stop</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useAlarm, useClock } from '@/store/index.js';
export default {
    setup() {
        const Alarm = useAlarm();
        const Clock = useClock();

        return {
            Alarm,
            Clock,
        }
    },
    components: {
    },
    props: {
        alarm: Object
    },
}
</script>