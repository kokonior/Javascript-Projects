<template>
    <div class="flex items-center justify-center mt-3">
        <div class="w-[21rem] grid grid-cols-8 gap-2">
            <div class="col-span-8 grid grid-cols-4 bg-slate-100 dark:bg-slate-900 rounded-lg justify-center p-3 duration-500 delay-75 dark:text-slate-50">
                <button @click="App.toggleMenu('alarm')" class="col-span-1 row-span-1 rounded-lg flex items-center justify-center mt-2 active:text-indigo-700 focus:text-indigo-500">
                    <span class="material-icons cursor-pointer hover:scale-125 duration-200 text-lg">alarm</span>
                </button>
                <button @click="App.toggleMenu('stopwatch')" class="col-span-1 row-span-1 rounded-lg flex items-center justify-center mt-2 active:text-indigo-700 focus:text-indigo-500">
                    <span class="material-icons cursor-pointer hover:scale-125 duration-200 text-lg">timer</span>
                </button>
                <button @click="App.toggleMenu('timer')" class="col-span-1 row-span-1 rounded-lg flex items-center justify-center mt-2 active:text-indigo-700 focus:text-indigo-500">
                    <span class="material-icons cursor-pointer hover:scale-125 duration-200 text-lg">hourglass_top</span>
                </button>
                <button @click="App.toggleMenu('profile')" class="col-span-1 row-span-1 rounded-lg flex items-center justify-center mt-2 active:text-indigo-700 focus:text-indigo-500">
                    <span class="material-icons cursor-pointer hover:scale-125 duration-200 text-lg">account_circle</span>
                </button>
            </div>
            <!-- <div class="col-span-7 bg-slate-100 dark:bg-slate-900 rounded-lg justify-center p-3 duration-500 delay-75">
                <AlarmWidget v-if="App.settings.menu == 'alarm' || App.settings.menu == NULL"/>
            </div> -->
        </div>
    </div>
</template>
<script>
import AlarmWidget from './AlarmWidget.vue';
import TimerWidget from './TimerWidget.vue';
import StopWatch from './StopwatchWidget.vue';
import ProfileWidget from './ProfileWidget.vue';
import AlarmListWidget from './AlarmListWidget.vue';

import { useApp } from '@/store/index.js';

export default {
    setup() {
        const App = useApp();
        return {
            App
        }
    },
    components: {
        AlarmWidget,
        AlarmListWidget,
    },
    methods: {
    
    },
    mounted() {
    
    },
};
</script>