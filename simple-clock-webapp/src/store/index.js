import { defineStore } from 'pinia'
import moment from 'moment'
import 'tw-elements';
import swal from 'sweetalert';
import Localbase from 'localbase';
let db = new Localbase('db');

db.config.debug = false;

export const useApp = defineStore({
  id: 'App',
  state: () => ({
    settings: {
      isDark: localStorage.getItem('darkMode') == 'true',
      showAlarm: localStorage.getItem('menu') ? localStorage.getItem('menu') : 'clock',
    }
  }),
  actions: {
    toggleDarkMode(){
      this.settings.isDark = !this.settings.isDark;
      localStorage.setItem('darkMode', this.settings.isDark);
    },
    toggleShowAlarm(){
      this.settings.showAlarm = !this.settings.showAlarm;
      localStorage.setItem('alarm', this.settings.showAlarm);
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
      return moment().format("HH:mm:ss");
    },
    getDate() {
      return moment().format("dddd, D MMMM YYYY");
    },
  }
})

export const useAlarm = defineStore({
  id: 'Alarm',
  state: () => ({
    alarms: [],
    showPopup: false,
    audios: {
      bukubukuchagama_voice: '../assets/ringtone/bukubukuchagama_voice.mp3',
      mixkit: '../assets/ringtone/mixkit-vintage-warning-alarm-990.wav',
      digital_clock_alarm: '../assets/ringtone/digital_clock_alarm.wav',
    },
    audio: [],
    alarm_timeout: [],
    alarm_mode: 'repeatDay',
  }),
  actions: {
    getAllAlarm() {
      db.collection('alarm').get().then(alarms => {
        this.alarms = alarms;
      });
    },
    toggleCustom(mode) {
      this.alarm_mode = mode;
    },
    toggleRepeat(elem) {
      elem.currentTarget.parentElement.classList.toggle("bg-indigo-500");
    },
    toggleActive(id) {
      let alarm =  this.alarms.find(alarm => alarm.id === id);
      db.collection('alarm').doc({id: id}).update({
        alarm_active: !alarm.alarm_active
      });

      alarm.alarm_active = !alarm.alarm_active;
      
      if(alarm.alarm_active) {
        this.setAlarm(alarm.id);
      } else {
        this.clearAlarm(alarm.id);
      }
    },
    newAlarm() {
      if (this.alarm_mode == "setDate") {
        let alarmTime = document.getElementById('alarmTime').value;
        if (alarmTime == '') {
          swal("Please set the time!", {
            icon: "error",
            buttons: false,
            timer: 1000,
          });
          return;
        }
        let alarmLabel = document.getElementById('alarmLabel').value === "" ? "My Alarm":  document.getElementById('alarmLabel').value;
        let alarmRingtone = document.getElementById('alarmRingtone').value;
        let alarmDate = document.getElementById('alarmDate').value;
        if (alarmDate == '') {
          swal("Please set the date!", {
            icon: "error",
            buttons: false,
            timer: 1000,
          });
          return;
        }
        let alarmRepeat = [];
        let alarmRepeatDisplay = [moment(alarmDate, "YYYY-MM-DD").format("ddd, MMM YYYY")];

        let newAlarm = {
          id: crypto.randomUUID(),
          alarm_time: alarmTime,
          alarm_label: alarmLabel,
          alarm_ringtone: alarmRingtone,
          alarm_repeat: alarmRepeat,
          alarm_active: true,
          alarm_mode: "setDate",
          alarm_display: {
            time: moment(alarmTime, "HH:mm").format("hh:mm A"),
            repeat: alarmRepeatDisplay.join(", "),
          },
          alarm_date: alarmDate,
          alarm_snooze: '',
        };

        if(db.collection('alarm').add(newAlarm)) {
          this.showPopup = true,
          setTimeout(() => this.showPopup = false, 1000);
        }
  
        this.alarms.push(newAlarm);
        this.setAlarm(newAlarm.id);

      } else if (this.alarm_mode == "repeatDay") {
        let alarmTime = document.getElementById('alarmTime').value;
        if (alarmTime == '') {
          swal("Please set the time!", {
            icon: "error",
            buttons: false,
            timer: 1000,
          });
          return;
        }

        let alarmLabel = document.getElementById('alarmLabel').value === "" ? "My Alarm":  document.getElementById('alarmLabel').value;
        let alarmRingtone = document.getElementById('alarmRingtone').value;
        let alarmDate = '';
        let alarmRepeat = [];
        let checkboxes = document.querySelectorAll('input[type=checkbox].repeatAlarmAtDay:checked');
        
        for(let i = 0; i < checkboxes.length; i++) {
          alarmRepeat.push(checkboxes[i].value);
        }
        
        let alarmRepeatDisplay = [];
        if (alarmRepeat == 0) {
          alarmRepeatDisplay.push('Ring Once');
        } else if (alarmRepeat.length < 3 && alarmRepeat.length > 0) {
          for (let i in alarmRepeat) {
            alarmRepeatDisplay.push(moment(alarmRepeat[i],'ddd').format('dddd')); 
          }
        } else if (alarmRepeat.length == 7) {
          alarmRepeatDisplay.push('Everyday');
        } else {
          alarmRepeatDisplay = alarmRepeat;
        }

        let newAlarm = {
          id: crypto.randomUUID(),
          alarm_time: alarmTime,
          alarm_label: alarmLabel,
          alarm_ringtone: alarmRingtone,
          alarm_repeat: alarmRepeat,
          alarm_active: true,
          alarm_mode: "repeatDay",
          alarm_display: {
            time: moment(alarmTime, "HH:mm").format("hh:mm A"),
            repeat: alarmRepeatDisplay.join(", "),
          },
          alarm_date: alarmDate,
          alarm_snooze: '',
        };

        if(db.collection('alarm').add(newAlarm)) {
          swal("Alarm set!", {
            icon: "success",
            buttons: false,
            timer: 1000,
          });
          // this.showPopup = 'success',
          // setTimeout(() => this.showPopup = '', 1000);
        }
  
        this.alarms.push(newAlarm);
        this.setAlarm(newAlarm.id);
      } else {
        swal("Alarm mode not found!", {
          icon: "error",
          buttons: false,
          timer: 1000,
        });
        console.log("Alarm Mode Not Found!");
      }
      return;
    },
    setAlarm(id) {
      let alarm = this.alarms.find(alarm => alarm.id === id);

      if (alarm.alarm_mode == "setDate") {
        let alarmTimestamp = moment(`${alarm.alarm_date} ${alarm.alarm_time}`, "YYYY-MM-DD HH:mm").format("x");
        let currentTimestamp = moment().format("x");
        if(alarm.alarm_active && alarmTimestamp - currentTimestamp > 0) {
          this.alarm_timeout[alarm.id] = setTimeout(() => {
            this.playAudio(id, alarm.alarm_ringtone);
            this.showPopup = alarm;
            alarm.alarm_active = false;
            db.collection('alarm').doc({id: id}).update({
              alarm_active: false,
            });
          }, alarmTimestamp - currentTimestamp);
          console.log("Alarm with id " + alarm.id + " is set");
        } else {
          console.log("Alarm is non-active nor alarm_time is minus");
          alarm.alarm_active = false;
        }
      } else if (alarm.alarm_mode == "repeatDay") {
        if (alarm.alarm_repeat.length == 0) {
          let alarmTimestamp = moment(`${alarm.alarm_time}`, "HH:mm").format("x");
          let currentTimestamp = moment().format("x");
          if (alarmTimestamp - currentTimestamp < 0) {
            alarmTimestamp = moment(`${alarm.alarm_time}`, "HH:mm").add(1, 'd').format("x");
          }

          if(alarm.alarm_active && alarmTimestamp - currentTimestamp > 0) {
            this.alarm_timeout[alarm.id] = setTimeout(() => {
              this.playAudio(id, alarm.alarm_ringtone);
              this.showPopup = alarm;
              alarm.alarm_active = false;
              db.collection('alarm').doc({id: id}).update({
                alarm_active: false,
              });
            }, alarmTimestamp - currentTimestamp);
            console.log("Alarm with id " + alarm.id + " is set");
          } else {
            console.log("Alarm is non-active nor alarm_time is minus");
            alarm.alarm_active = false;
            db.collection('alarm').doc({id: id}).update({
              alarm_active: false,
            });
          }
        } else if (alarm.alarm_repeat.length == 7) {
          let alarmTimestamp = moment(`${alarm.alarm_time}`, "HH:mm").format("x");
          let currentTimestamp = moment().format("x");
          if (alarmTimestamp - currentTimestamp < 0) {
            alarmTimestamp = moment(`${alarm.alarm_time}`, "HH:mm").add(1, 'd').format("x");
          }

          if(alarm.alarm_active && alarmTimestamp - currentTimestamp > 0) {
            this.alarm_timeout[alarm.id] = setTimeout(() => {
              this.playAudio(id, alarm.alarm_ringtone);
              this.showPopup = alarm;
              this.setAlarm(id);
            }, alarmTimestamp - currentTimestamp);
            console.log("Alarm with id " + alarm.id + " is set");
          } else {
            console.log("Alarm is non-active nor alarm_time is minus");
            alarm.alarm_active = false;
            db.collection('alarm').doc({id: id}).update({
              alarm_active: false,
            });
          }
        } else {
          function changeDayFormat(day) {
            return parseInt(moment(day, "ddd").format("d"));
          }
          
          let repeat = (alarm.alarm_repeat).map(changeDayFormat);
          
          let alarmTime = (this.findNextInstanceInDaysArray(repeat, (alarm.alarm_time).substring(0, 2), (alarm.alarm_time).substring(3)));
          alarmTime = alarmTime.hour((alarm.alarm_time).substring(0,2)).minute((alarm.alarm_time).substring(3)).second(0);

          let alarmTimestamp = moment(alarmTime.toString(), "ddd MMM DD YYYY HH:mm:ss z").format("x");
          let currentTimestamp = moment().format("x");

          if (alarm.alarm_active && currentTimestamp < alarmTimestamp) {
            this.alarm_timeout[alarm.id] = setTimeout(() => {
              this.playAudio(id, alarm.alarm_ringtone);
              this.showPopup = alarm;
            }, alarmTimestamp - currentTimestamp);
            console.log("Alarm with id " + alarm.id + " is set");
          } else {
            console.log("Error set repeat alarm");
            alarm.alarm_active = false;
            db.collection('alarm').doc({id: id}).update({
              alarm_active: false,
            });
          }
        }
      } else {
        console.log("Alarm Mode is not found!");
      }
    },
    clearAlarm(id) {
      console.log('Clear Alarm');

      clearTimeout(this.alarm_timeout[id]);
    },
    removeAlarm(id) {
      if(db.collection('alarm').doc({id: id}).delete()) {
        swal("Delete alarm!", {
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      }

      let index = this.alarms.findIndex(alarm => alarm.id === id);
      this.alarms.splice(index, 1);
      this.clearAlarm(id);
      return;
    },
    playAudio(id, sound) {
      this.audio[id] = new Audio(this.audios[sound]);
      this.audio[id].loop = true;
      this.audio[id].play();
    },
    setAllAlarm() {
      console.log('setAllAlarm(): set all active alarm');
      
      for(let i in this.alarms) {
        if(this.alarms[i].alarm_active) {
          this.setAlarm(this.alarms[i].id);
        }

        this.setAlarmSnooze(this.alarms[i].id);
      }
    },
    snoozeAlarm(id) {
      let alarm = this.alarms.find(alarm => alarm.id === id);
      this.audio[id].pause();
      this.showPopup = false;
      alarm.alarm_snooze = moment().add(1, 'm').format("x");
      db.collection('alarm').doc({id: id}).update({
        alarm_snooze: moment().add(1, 'm').format("x"),
      });
      this.setAlarmSnooze(id);
    },
    setAlarmSnooze(id) {
      let alarm = this.alarms.find(alarm => alarm.id === id);

      if(alarm.alarm_snooze != '') {
        let alarmTimestamp = alarm.alarm_snooze;
        let currentTimestamp = moment().format("x");
        if(alarmTimestamp - currentTimestamp > 0) {
          this.alarm_timeout[id] = setTimeout(() => {
            this.playAudio(id, alarm.alarm_ringtone);
            this.showPopup = alarm;
          }, alarmTimestamp - currentTimestamp);

          console.log("Snooze with id " + alarm.id + " is set");
        } else {
          console.log("Snooze is minus");
        }
      }
    },
    stopAlarm(id) {
      let alarm = this.alarms.find(alarm => alarm.id === id);
      alarm.alarm_snooze = '';
      this.audio[id].pause();
      this.showPopup = false;
      db.collection('alarm').doc({id: id}).update({
        alarm_snooze: '',
      });
    },
    isThisInFuture(targetDayNum, hour, minute) {
      // const todayNum = moment().isoWeekday();
      const currentTimestamp = parseInt(moment().format("x"));
      const target = moment().hour(hour).minute(minute).second(0).isoWeekday(targetDayNum);
      const targetTimestamp = parseInt(moment(target.toString(), "ddd MMM DD YYYY HH:mm:ss z").format("x"));
      
      if (currentTimestamp < targetTimestamp) {
        console.log("Yes this is future");
        return moment().isoWeekday(targetDayNum);
      }
      return false;
    },
    findNextInstanceInDaysArray(daysArray, hour, minute) {
      const tests = daysArray.map((target) => this.isThisInFuture(target, hour, minute));
  
      const thisWeek = tests.find((sample) => {
        return sample instanceof moment
      });
  
      return thisWeek || moment().add(1, 'weeks').isoWeekday(daysArray[0]);;
    }
  },
})

export const usePopup = defineStore({
  id: 'UsePopup',
  state: () => ({
    time: '',
  }),
  actions: {
    getTime() {
      this.time =  moment().format("dddd, D MMMM YYYY");
    },
  }
})