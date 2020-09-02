// import Vue from "vue"
// import VueRouter from "vue-router"
// import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'

// Vue.use("VueRouter");

// const router = new VueRouter({
//     routes: [
//         {
//             path: '/news',
//             component: NewsView,
//         },
//         {
//             path: '/ask',
//             component: AskView,
//         },
//         {
//             path: '/jobs',
//             component: JobsView,
//         },
//     ]
// });

// export default {
//   router
// }

import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      // redirect 될 수 있도록.
      redirect: '/news' 
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/user',
      component: UserView,
    },
  ]
})