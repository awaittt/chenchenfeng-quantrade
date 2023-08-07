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
      children: [
        {
          path: "register",
          component: () => import("@/views/hospital/register/index.vue"),
        },
        {
          path: "detail",
          component: () => import("@/views/hospital/detail/index.vue"),
        },
        {
          path: "reserve",
          component: () => import("@/views/hospital/reserve/index.vue"),
        },
        {
          path: "close",
          component: () => import("@/views/hospital/close/index.vue"),
        },
        {
          path: "search",
          component: () => import("@/views/hospital/search/index.vue"),
        },
      ],
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

export { router };
