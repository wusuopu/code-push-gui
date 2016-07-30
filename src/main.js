import Vue from 'vue'
import App from './App'
window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
