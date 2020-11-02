import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
  el: '#counter',
  data: {
    counter: 0
  },
  methods: {
    add: function()   {
      this.counter++;
    }
  }
})
