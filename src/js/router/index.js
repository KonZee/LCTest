import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from '../components/index.vue';
import About from '../components/about.vue';
import Contact from '../components/contact.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export default new VueRouter({
    routes
});
