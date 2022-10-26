<template>
  <div class="flex items-center flex-row flex-wrap justify-around">
    <div
      @click="TODO.gotoCategory('education')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Education</div>
    </div>
    <div
      @click="TODO.gotoCategory('entertainment')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Entertainment</div>
    </div>
    <div
      @click="TODO.gotoCategory('finance')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Finance</div>
    </div>
    <div
      @click="TODO.gotoCategory('food')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Food</div>
    </div>
    <div
      @click="TODO.gotoCategory('health')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Health</div>
    </div>
    <div
      @click="TODO.gotoCategory('learn')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Learn</div>
    </div>
    <div
      @click="TODO.gotoCategory('meeting')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Meeting</div>
    </div>
    <div
      @click="TODO.gotoCategory('schedule')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Schedule</div>
    </div>
    <div
      @click="TODO.gotoCategory('school')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">School</div>
    </div>
    <div
      @click="TODO.gotoCategory('shopping')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Shopping</div>
    </div>
    <div
      @click="TODO.gotoCategory('work')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Work</div>
    </div>
    <div
      @click="TODO.gotoCategory('other')"
      class="my-3 mx-1 shadow-lg w-52 h-24 rounded-lg flex flex-row justify-center items-center cursor-pointer hover:bg-slate-100 dark:bg-slate-200 dark:hover:bg-slate-300"
    >
      <div>
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="text-2xl font-medium ml-3">Other</div>
    </div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";
export default {
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
};
</script>
