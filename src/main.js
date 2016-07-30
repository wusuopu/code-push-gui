import Vue from 'vue'
import Home from './Home'
import AppList from './AppList'
import App from './App'
import VueRouter from 'vue-router'

/* eslint-disable no-new */

Vue.use(VueRouter)

let router = new VueRouter({
  linkActiveClass: 'active'
})
router.map({
  '/': {
    component: Home,
    subRoutes: {
      '/apps': {
        component: AppList
      },
      '/apps/:id': {
        component: App
      }
    }
  }
})
router.redirect({
  '/': '/apps'
})

router.start(Vue.extend({}), '#app')
