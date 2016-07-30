import Vue from 'vue'
import AppList from './AppList'
import App from './App'
import VueRouter from 'vue-router'
window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */

Vue.use(VueRouter)

let router = new VueRouter()
router.map({
  '/apps': {
    component: AppList
  },
  '/apps/:id': {
    component: App
  }
})
router.redirect({
  '/': '/apps'
})

router.start(Vue.extend({}), '#app')
