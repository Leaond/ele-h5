import { createWebHistory, createRouter } from 'vue-router';

import TabsView from '../views/tabs/TabsView.vue';
import HomeView from '../views/tabs/components/HomeView.vue';
import MineView from '../views/tabs/components/MineView.vue';
import OrderView from '../views/tabs/components/OrderView.vue';

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/tabs',
    name: 'tabs',
    component: TabsView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/order',
        name: 'order',
        component: OrderView
      },
      {
        path: '/mine',
        name: 'mine',
        component: MineView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
