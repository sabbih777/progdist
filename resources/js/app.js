/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import Notifications from 'vue-notification'

// ************ Font-Awesome for VueJS *********************
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock, faCalendar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// *********************************************************

Vue.component('new-booking', require('./components/NewBooking.vue').default);
Vue.component('bookings-calendar', require('./components/BookingsCalendar.vue').default);
Vue.use(Notifications)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

// Required to enable jquery datatables interaction with vue component
window.app = app;
