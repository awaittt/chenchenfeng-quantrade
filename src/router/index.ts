import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/views/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior: () => {
    top: 0;
    right: 0;
  },
});


export {router}