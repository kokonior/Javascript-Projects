<template>
    <main :class="App.settings.isDark ? 'dark' : ''" class="relative">
        <div class="bg-slate-300 dark:bg-slate-800 min-h-screen duration-1000">
            <div @click="App.toggleDarkMode()" class="flex items-center justify-center absolute top-5 right-5 bg-slate-100 dark:bg-slate-900 dark:text-slate-50 rounded-xl w-10 h-10 cursor-pointer duration-500">
                <span v-if="App.settings.isDark" class="flex items-center"><span class="material-icons hover:animate-pulse">light_mode</span></span>
                <span v-else class="flex items-center"><span class="material-icons hover:animate-pulse">dark_mode</span></span>
            </div>
            <div class="container flex items-center justify-center mx-auto w-full h-full py-8 bg-slate-300 dark:bg-slate-800 duration-1000">
                <div class="grid grid-cols-1">
                    <ClockWidget/>
                    <!-- <MenuWidget/> -->
                    <AlarmWidget v-if="App.settings.showAlarm"/>
                    <AlarmListWidget/>
                </div>
            </div>
        </div>
        <Transition>
            <PopUpSuccessWidget v-if="Alarm.showPopup == 'success'"/>
            <PopUpErrorWidget v-else-if="Alarm.showPopup == 'error'"/>
        </Transition>
        <Transition>
            <PopUpAlarmWidget v-if="typeof(Alarm.showPopup) == 'object'" :alarm="Alarm.showPopup"/>
        </Transition>
        <!-- <PopUpAlarmWidget/> -->
    </main>
</template>
<script>
import ClockWidget from './ClockWidget.vue';
import MenuWidget from './MenuWidget.vue';
import AlarmWidget from './AlarmWidget.vue';
import AlarmListWidget from './AlarmListWidget.vue';
import PopUpSuccessWidget from "./popup/PopUpSuccessWidget.vue";
import PopUpErrorWidget from './popup/PopUpErrorWidget.vue';
import PopUpAlarmWidget from './popup/PopUpAlarmWidget.vue';

import '@/assets/tailwind.css';
import '../../node_modules/tw-elements/dist/css/index.min.css';
import { useApp, useAlarm } from '@/store/index.js';

export default {
    setup() {
        const App = useApp();
        const Alarm = useAlarm();
        return {
            App,
            Alarm,
        }
    },
    components: {
        ClockWidget,
        MenuWidget,
        AlarmWidget,
        AlarmListWidget,
        PopUpSuccessWidget,
        PopUpErrorWidget,
        PopUpAlarmWidget,
    },
    methods: {
    },
    created() {
        
    }
}
</script>
<style>
    /* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>