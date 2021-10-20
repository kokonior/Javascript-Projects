const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://google.com'
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jane',
//       lastName: 'Doe'
//     }
//   }
// }).mount('#app2')