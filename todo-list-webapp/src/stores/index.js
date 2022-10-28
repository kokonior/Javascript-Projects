import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBXzBWzXKxfR9K_aWAK_MEhlgKXh86-Q",
  authDomain: "try-vue-92d54.firebaseapp.com",
  projectId: "try-vue-92d54",
  storageBucket: "try-vue-92d54.appspot.com",
  messagingSenderId: "462401837028",
  appId: "1:462401837028:web:06e4fd0293f666de2f99f1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useToDo = defineStore({
  id: "todo",
  state: () => ({
    name: "",
    settings: {
      show_menu: false,
      isActive: {
        home: false,
        category: false,
        check_list: false,
        task_list: false,
        weekly_list: false,
      },
    },
    msg: {
      task_list_msg: false,
      weekly_list_msg: false,
      delete_msg: false,
    },
    todo: {
      checklist: {
        counter: 0,
        counter_items: 0,
        list: [],
        list_items: [],
        delete_id: 0,
      },
      task_list: {
        message: "",
        description: "",
        status: "",
        category: [],
        counter: 0,
        list: [],
        delete_id: 0,
        todo: [],
        doing: [],
        done: [],
        other: [],
      },
      weekly: {
        message: "",
        description: "",
        day: [],
        category: [],
        counter: 0,
        list: [],
        list_day: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        },
      },
    },
    detail_category_item: {
      check_list: [],
      task_list: {
        todo: [],
        doing: [],
        done: [],
        other: [],
      },
      weekly_list: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
    },
    temp: {
      detail_weekly_day: "",
      status: "",
    },
    category: [
      {
        id: 0,
        name: "Education",
      },
      {
        id: 1,
        name: "Entertainment",
      },
      {
        id: 2,
        name: "Finance",
      },
      {
        id: 3,
        name: "Food",
      },
      {
        id: 4,
        name: "Health",
      },
      {
        id: 5,
        name: "Learn",
      },
      {
        id: 6,
        name: "Meeting",
      },
      {
        id: 7,
        name: "Schedule",
      },
      {
        id: 8,
        name: "School",
      },
      {
        id: 9,
        name: "Shopping",
      },
      {
        id: 10,
        name: "Work",
      },
      {
        id: 11,
        name: "Other",
      },
    ],
    weekly: [
      {
        id: 0,
        name: "Sunday",
      },
      {
        id: 1,
        name: "Monday",
      },
      {
        id: 2,
        name: "Tuesday",
      },
      {
        id: 3,
        name: "Wednesday",
      },
      {
        id: 4,
        name: "Thursday",
      },
      {
        id: 5,
        name: "Friday",
      },
      {
        id: 6,
        name: "Saturday",
      },
    ],
  }),
  getters: {},
  actions: {
    // *
    // * ALL TOGGLE
    // *
    toggleMenu() {
      this.settings.show_menu = !this.settings.show_menu;
    },
    toggleTaskListMsg() {
      this.msg.task_list_msg = !this.msg.task_list_msg;
    },
    toggleWeeklyListMsg() {
      this.msg.weekly_list_msg = !this.msg.weekly_list_msg;
    },
    toggleDeleteMsg(id_item) {
      this.msg.delete_msg = !this.msg.delete_msg;
      this.todo.checklist.delete_id = this.todo.checklist.list[id_item].id;
    },
    toggleActiveMenu() {
      let name;
      switch (route) {
        case "/":
          name = "home";
          break;
        case "/category":
          name = "category";
          break;
        case "/check-list":
          name = "check_list";
          break;
        case "/task-list":
          name = "task_list";
          break;
        case "/weekly-list":
          name = "weekly_list";
          break;
        default:
          name = "home";
          break;
      }
      let obj = this.settings.isActive;
      for (let key in obj) {
        if (key === name) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
      }
    },

    // *
    // * ALL ADD TASK
    // *
    async addName() {
      let id = 1;
      await setDoc(doc(db, "name", id.toString()), {
        name: this.name,
      });
    },
    async addCheckList() {
      let checklist = this.todo.checklist;
      if (checklist.list.length == 0) {
        checklist.counter = checklist.list.length;
      } else {
        for (let i = 0; i < checklist.list.length; i++) {
          checklist.counter = checklist.list[i].id + 1;
        }
      }
      let id = checklist.counter;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      await setDoc(doc(db, "check_list", id.toString()), {
        id: id,
        title: "New Task " + (id + 1).toString(),
        show_title: false,
        counter_items: 0,
        items: [],
        category: [],
        date: time_now + " " + date_now,
      });
      this.emptyCheckList();
      this.getCheckList();
    },
    async addSubCheckList(id_item) {
      let checklist_item = this.todo.checklist.list[id_item];
      if (checklist_item.items.length == 0) {
        checklist_item.counter_items = checklist_item.items.length;
      } else {
        for (let i = 0; i < checklist_item.items.length; i++) {
          checklist_item.counter_items = checklist_item.items[i].id + 1;
        }
      }
      const docRef = await getDoc(doc(db, "check_list", id_item.toString()));
      const docSnap = docRef.data();
      let arr = docSnap.items;
      let id = checklist_item.counter_items;
      arr.push({
        id: id,
        title_item: "New Task Item " + (id + 1).toString(),
        show_title_item: false,
        checked: false,
      });
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
      this.emptyCheckList();
      this.getCheckList();
    },
    async addTaskList() {
      let task_list = this.todo.task_list;
      if (task_list.list.length == 0) {
        task_list.counter = task_list.list.length;
      } else {
        for (let i = 0; i < task_list.list.length; i++) {
          task_list.counter = task_list.list[i].id + 1;
        }
      }
      let id = task_list.counter;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      this.toggleTaskListMsg();
      await setDoc(doc(db, "task_list", id.toString()), {
        id: id,
        message: task_list.message,
        description: task_list.description,
        status: task_list.status,
        category: task_list.category,
        date: time_now + " " + date_now,
      });
      this.emptyTaskList();
      this.getTaskList();
      this.todo.task_list.message = "";
      this.todo.task_list.description = "";
      this.todo.task_list.status = "";
      this.todo.task_list.category = [];
    },
    async addWeeklyList() {
      let weekly_list = this.todo.weekly;
      if (this.todo.weekly.list.length == 0) {
        weekly_list.counter = this.todo.weekly.list.length;
      } else {
        for (let i = 0; i < this.todo.weekly.list.length; i++) {
          weekly_list.counter = this.todo.weekly.list[i].id + 1;
        }
      }
      let id = weekly_list.counter;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      this.toggleWeeklyListMsg();
      await setDoc(doc(db, "weekly_list", id.toString()), {
        id: id,
        message: weekly_list.message,
        description: weekly_list.description,
        category: weekly_list.category,
        day: weekly_list.day,
        date: time_now + " " + date_now,
      });
      this.emptyWeeklyList();
      this.getWeeklyList();
      weekly_list.message = "";
      weekly_list.description = "";
      weekly_list.status = "";
      weekly_list.category = [];
      weekly_list.day = [];
    },

    // *
    // * ALL GET
    // *
    async getName() {
      let id = 1;
      const docRef = await getDoc(doc(db, "name", id.toString()));
      const docSnap = docRef.data();
      this.name = docSnap.name;
    },
    async getCheckList() {
      const querySnapshot = await getDocs(collection(db, "check_list"));
      querySnapshot.forEach((doc) => {
        this.todo.checklist.list.push(doc.data());
      });
    },
    async getTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        this.todo.task_list.list.push(doc.data());
        if (doc.data().status === "todo") {
          this.todo.task_list.todo.push(doc.data());
        }
        if (doc.data().status === "doing") {
          this.todo.task_list.doing.push(doc.data());
        }
        if (doc.data().status === "done") {
          this.todo.task_list.done.push(doc.data());
        }
        if (doc.data().status === "other") {
          this.todo.task_list.other.push(doc.data());
        }
      });
    },
    async getCategoryCheckList(category) {
      category = category[0].toUpperCase() + category.substring(1);
      const querySnapshot = await getDocs(collection(db, "check_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().category.includes(category)) {
          this.detail_category_item.check_list.push(doc.data());
        }
      });
    },
    async getCategoryTaskList(category) {
      category = category[0].toUpperCase() + category.substring(1);
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().category.includes(category)) {
          if (doc.data().status === "todo") {
            this.detail_category_item.task_list.todo.push(doc.data());
          } else if (doc.data().status === "doing") {
            this.detail_category_item.task_list.doing.push(doc.data());
          } else if (doc.data().status === "done") {
            this.detail_category_item.task_list.done.push(doc.data());
          } else if (doc.data().status === "other") {
            this.detail_category_item.task_list.other.push(doc.data());
          }
        }
      });
    },
    async getWeeklyList() {
      const querySnapshot = await getDocs(collection(db, "weekly_list"));
      querySnapshot.forEach((doc) => {
        this.todo.weekly.list.push(doc.data());
        if (doc.data().day.includes("Monday")) {
          this.todo.weekly.list_day.monday.push(doc.data());
        }
        if (doc.data().day.includes("Tuesday")) {
          this.todo.weekly.list_day.tuesday.push(doc.data());
        }
        if (doc.data().day.includes("Wednesday")) {
          this.todo.weekly.list_day.wednesday.push(doc.data());
        }
        if (doc.data().day.includes("Thursday")) {
          this.todo.weekly.list_day.thursday.push(doc.data());
        }
        if (doc.data().day.includes("Friday")) {
          this.todo.weekly.list_day.friday.push(doc.data());
        }
        if (doc.data().day.includes("Saturday")) {
          this.todo.weekly.list_day.saturday.push(doc.data());
        }
        if (doc.data().day.includes("Sunday")) {
          this.todo.weekly.list_day.sunday.push(doc.data());
        }
      });
    },
    async getCategoryWeeklyList(category) {
      category = category[0].toUpperCase() + category.substring(1);
      const querySnapshot = await getDocs(collection(db, "weekly_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().category.includes(category)) {
          if (doc.data().day.includes("Monday")) {
            this.detail_category_item.weekly_list.monday.push(doc.data());
          }
          if (doc.data().day.includes("Tuesday")) {
            this.detail_category_item.weekly_list.tuesday.push(doc.data());
          }
          if (doc.data().day.includes("Wednesday")) {
            this.detail_category_item.weekly_list.wednesday.push(doc.data());
          }
          if (doc.data().day.includes("Thursday")) {
            this.detail_category_item.weekly_list.thursday.push(doc.data());
          }
          if (doc.data().day.includes("Friday")) {
            this.detail_category_item.weekly_list.friday.push(doc.data());
          }
          if (doc.data().day.includes("Saturday")) {
            this.detail_category_item.weekly_list.saturday.push(doc.data());
          }
          if (doc.data().day.includes("Sunday")) {
            this.detail_category_item.weekly_list.sunday.push(doc.data());
          }
        }
      });
    },

    // *
    // * ALL EDIT
    // *
    async updateName() {
      let id = 1;
      const docRef = doc(db, "name", id.toString());
      await updateDoc(docRef, {
        name: this.name,
      });
    },
    async updateTitleCL(id_item) {
      let title = this.todo.checklist.list[id_item].title;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        title: title,
      });
    },
    async updateCategoryCL(id_item) {
      let category = this.todo.checklist.list[id_item].category;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        category: category,
      });
    },
    async updateTitleSubCL(id_item, id_item_item) {
      let title =
        this.todo.checklist.list[id_item].items[id_item_item].title_item;
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].title_item = title;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
    },
    async updateCheckedSubCL(id_item, id_item_item) {
      let checked =
        this.todo.checklist.list[id_item].items[id_item_item].checked;
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].checked = checked;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
    },
    async updateTaskList(id_item, status) {
      let task_list;
      let id;
      if (status == "todo") {
        task_list = this.todo.task_list.todo[id_item];
        id = task_list.id;
      } else if (status == "doing") {
        task_list = this.todo.task_list.doing[id_item];
        id = task_list.id;
      } else if (status == "done") {
        task_list = this.todo.task_list.done[id_item];
        id = task_list.id;
      } else if (status == "other") {
        task_list = this.todo.task_list.other[id_item];
        id = task_list.id;
      }
      await updateDoc(doc(db, "task_list", id.toString()), {
        message: task_list.message,
        description: task_list.description,
        status: task_list.status,
        category: task_list.category,
      });
      this.emptyTaskList();
      this.getTaskList();
    },
    async updateWeeklyList(id_item, day) {
      if (day == "Monday") {
        let weekly_list = this.todo.weekly.list_day.monday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Tuesday") {
        let weekly_list = this.todo.weekly.list_day.tuesday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Wednesday") {
        let weekly_list = this.todo.weekly.list_day.wednesday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Thursday") {
        let weekly_list = this.todo.weekly.list_day.thursday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Friday") {
        let weekly_list = this.todo.weekly.list_day.friday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Saturday") {
        let weekly_list = this.todo.weekly.list_day.saturday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      } else if (day == "Sunday") {
        let weekly_list = this.todo.weekly.list_day.sunday[id_item];
        let id = weekly_list.id;
        await updateDoc(doc(db, "weekly_list", id.toString()), {
          message: weekly_list.message,
          description: weekly_list.description,
          day: weekly_list.day,
          category: weekly_list.category,
        });
      }
      this.emptyWeeklyList();
      this.getWeeklyList();
    },
    showTitleCL(id_item) {
      this.todo.checklist.list[id_item].show_title = true;
    },
    CheckedSubCL(id_item, id_item_item) {
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].checked = !arr[id_item_item].checked;
    },

    // *
    // * ALL DELETE LIST
    // *
    async deleteCheckList(id_item) {
      await deleteDoc(doc(db, "check_list", id_item.toString()));
      this.todo.checklist.list.splice(id_item, 1);
      this.emptyCheckList();
      this.getCheckList();
    },
    async deleteSubCheckList(id_item, id_sub_item) {
      let arr = this.todo.checklist.list[id_item].items;
      arr.splice(id_sub_item, 1);
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
      this.emptyCheckList();
      this.getCheckList();
    },
    msgDeleteCheckList(value) {
      let checklist = this.todo.checklist;
      if (value == "yes") {
        checklist.list.splice(checklist.delete_id, 1);
        checklist.counter--;
        this.deleteCheckList(checklist.delete_id);
      }
      this.msg.delete_msg = !this.msg.delete_msg;
    },
    async deleteTaskList(id_item) {
      await deleteDoc(doc(db, "task_list", id_item.toString()));
      for (let i = 0; i < this.todo.task_list.todo.length; i++) {
        if (this.todo.task_list.todo[i].id == id_item) {
          this.todo.task_list.todo.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.doing.length; i++) {
        if (this.todo.task_list.doing[i].id == id_item) {
          this.todo.task_list.doing.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.done.length; i++) {
        if (this.todo.task_list.done[i].id == id_item) {
          this.todo.task_list.done.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.other.length; i++) {
        if (this.todo.task_list.other[i].id == id_item) {
          this.todo.task_list.other.splice(i, 1);
        }
      }
      this.todo.task_list.list.splice(id_item, 1);
    },
    async deleteWeeklyList(id_item, day) {
      let list_day = this.todo.weekly.list_day;
      if (day == "Monday") {
        if (list_day.monday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.monday[id_item].id.toString())
          );
          list_day.monday.splice(id_item, 1);
        } else {
          let arr = list_day.monday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.monday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Tuesday") {
        if (list_day.tuesday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.tuesday[id_item].id.toString())
          );
          list_day.tuesday.splice(id_item, 1);
        } else {
          let arr = list_day.tuesday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.tuesday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Wednesday") {
        if (list_day.wednesday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.wednesday[id_item].id.toString())
          );
          list_day.wednesday.splice(id_item, 1);
        } else {
          let arr = list_day.wednesday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.wednesday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Thursday") {
        if (list_day.thursday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.thursday[id_item].id.toString())
          );
          list_day.thursday.splice(id_item, 1);
        } else {
          let arr = list_day.thursday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.thursday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Friday") {
        if (list_day.friday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.friday[id_item].id.toString())
          );
          list_day.friday.splice(id_item, 1);
        } else {
          let arr = list_day.friday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.friday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Saturday") {
        if (list_day.saturday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.saturday[id_item].id.toString())
          );
          list_day.saturday.splice(id_item, 1);
        } else {
          let arr = list_day.saturday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.saturday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Sunday") {
        if (list_day.sunday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.sunday[id_item].id.toString())
          );
          list_day.sunday.splice(id_item, 1);
        } else {
          let arr = list_day.sunday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.sunday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      }
      this.emptyWeeklyList();
      this.getWeeklyList();
    },

    // *
    // * ALL ROUTER
    // *
    gotoTaskList() {
      this.router.push("/task-list");
    },
    goToDetailTaskList(id_item, status) {
      this.router.push("/task-list/" + id_item);
      localStorage.setItem("status", status);
      this.temp.status = localStorage.getItem("status");
    },
    gotoCategory(category) {
      this.router.push("/category/" + category);
    },
    gotoDetailWeek(id_item, day) {
      this.router.push("/weekly-list/" + id_item);
      localStorage.setItem("detail_weekly_day", day);
      this.temp.detail_weekly_day = localStorage.getItem("detail_weekly_day");
    },
    gotoWeeklyList() {
      this.router.push("/weekly-list");
    },

    // *
    // * ALL EMPTY ARR
    // *
    emptyWeeklyList() {
      this.todo.weekly.list_day.monday = [];
      this.todo.weekly.list_day.tuesday = [];
      this.todo.weekly.list_day.wednesday = [];
      this.todo.weekly.list_day.thursday = [];
      this.todo.weekly.list_day.friday = [];
      this.todo.weekly.list_day.saturday = [];
      this.todo.weekly.list_day.sunday = [];
    },
    emptyTaskList() {
      this.todo.task_list.todo = [];
      this.todo.task_list.doing = [];
      this.todo.task_list.done = [];
      this.todo.task_list.other = [];
    },
    emptyCheckList() {
      this.todo.checklist.list = [];
    },
    emptyCategory() {
      let category = this.detail_category_item;
      category.check_list = [];
      category.task_list.todo = [];
      category.task_list.doing = [];
      category.task_list.done = [];
      category.task_list.other = [];
      category.weekly_list.monday = [];
      category.weekly_list.tuesday = [];
      category.weekly_list.wednesday = [];
      category.weekly_list.thursday = [];
      category.weekly_list.friday = [];
      category.weekly_list.saturday = [];
      category.weekly_list.sunday = [];
    },
  },
});
