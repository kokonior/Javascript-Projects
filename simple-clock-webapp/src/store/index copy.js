import { defineStore } from 'pinia'
import moment from 'moment'
import 'tw-elements';
// import ringtone from '../assets/ringtone/bukubukuchagama_voice.mp3';
import ringtone from '../assets/ringtone/mixkit-vintage-warning-alarm-990.wav';

export const useApp = defineStore({
  id: 'App',
  state: () => ({
    settings: {
      isDark: localStorage.getItem('darkMode') == 'true',
      menu: localStorage.getItem('menu') ? localStorage.getItem('menu') : 'clock',
    }
  }),
  actions: {
    toggleDarkMode(){
      this.settings.isDark = !this.settings.isDark;
      localStorage.setItem('darkMode', this.settings.isDark);
    },
    toggleMenu(menu){
      this.settings.menu = menu;
      localStorage.setItem('menu', this.settings.menu);
    },
  }
})

export const useClock = defineStore({
  id: 'Clock',
  state: () => ({
    time: '',
    date: '',
  }),
  actions: {
    getTime() {
      return moment().format("HH:mm:ss A");
    },
    getDate() {
      return moment().format("dddd, D MMMM YYYY");
    },
  }
})

export const useAlarm = defineStore({
  id: 'Alarm',
  state: () => ({
    wakeup: '',
    sound: '',
    audio: new Audio(ringtone),
  }),
  actions: {
    toggleRepeat(elem) {
      elem.currentTarget.parentElement.classList.toggle("bg-indigo-500");
    },
    setSound() {
      this.audio.loop = true;
      this.audio.play();
    },
    setAlarm() {
      // Get hours and minutes from user input
      this.alarm = document.getElementById('alarm').value;
      
      if(this.alarm == '') {
        alert('Please input proper time!');
        return;
      }
      // Set Alarm Time
      let time = moment().format("DD MMM YYYY ") + moment(this.alarm, "hh:mm A").format('HH:mm') + ":00" + " UTC+07:00";
      let alarmUnixTime = Date.parse(time);
      const currentTime = Date.parse(moment().format("DD MMM YYYY HH:mm:ss UTC+07:00"));

      if(alarmUnixTime > currentTime) {
        setTimeout(this.setSound, alarmUnixTime - currentTime);
      } else {
        time = moment().add(1, 'days').format("DD MMM YYYY ") + moment(this.alarm, "hh:mm A").format('HH:mm') + ":00" + " UTC+07:00";
        alarmUnixTime = Date.parse(time);
        setTimeout(this.setSound, alarmUnixTime - currentTime);
      }
      alert(`Alarm is set to ${time}`);
    },
    resetAlarm(){
      this.audio.pause();
      alert('Succes Reset Alarm!');
    },
  }
})