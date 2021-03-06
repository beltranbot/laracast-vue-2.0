
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import axios from 'axios'
import Form from './utilities/Form'

window.Vue = require('vue');
window.axios = axios
window.Form = Form

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueRouter from 'vue-router'
import router from './routes'
Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router
});
