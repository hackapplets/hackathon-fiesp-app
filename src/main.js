// Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Hooking
Vue.use(VueRouter)

// Store
import store from './store'

//
import App from './App'

// Pages
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

// Routes
const routes = [
  {path: '/', component: HomePage, meta: {authRequired: true}},
  {path: '/login', component: LoginPage}
]

// Router
const router = new VueRouter({
  routes
})

// Before each route
router.beforeEach((to, from, next) => {
  // Check if loggin is required
  if (to.matched.some(record => record.meta.authRequired) && !store.state.user.logged) {
    // Redirect to login
    return next({
      path: '/login'
    })
  }

  // Next Route!
  next()
})

//
store.dispatch('getGeolocation')

// Initialize Google Maps
store.dispatch('createGoogleMapsClient')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
