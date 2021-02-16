/*===================
  CounterApp
===================*/

const CounterApp = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000)
  }
}
Vue.createApp(CounterApp).mount('#vue_area')

/*===================
  EventHandling
===================*/

const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
Vue.createApp(EventHandling).mount('#event-handling')

/*===================
  TwoWayBinding
===================*/

const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')