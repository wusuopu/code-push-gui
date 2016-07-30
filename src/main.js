import Vue from 'vue'
import Home from './Home'
import AppList from './AppList'
import App from './App'
import Deployment from './Deployment'
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
      },
      '/apps/:app/:deployment': {
        component: Deployment
      }
    }
  }
})
router.redirect({
  '/': '/apps'
})

router.start(Vue.extend({}), '#app')
