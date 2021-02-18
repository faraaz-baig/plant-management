import Vue from "vue";
import VueRouter from "vue-router";
import ChallansRecieved from "@/pages/challans/ChallansRecieved";
import MakeChallans from "@/pages/challans/MakeChallans";
import EnterpriseDetail from "@/pages/enterprises/EnterpriseDetail";
import EnterpriseRegistration from "@/pages/enterprises/EnterpriseRegisteration";
import EnterpriseList from "@/pages/enterprises/EnterpriseList";
import NotFound from "@/pages/NotFound";
import UserAuth from "@/pages/auth/UserAuth";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/enterprises" },
  { path: "/enterprises", component: EnterpriseList },
  {
    path: "/enterprises/:id",
    component: EnterpriseDetail,
    props: true,
    children: [{ path: "make-challans", component: MakeChallans }],
  },
  {
    path: "/register",
    component: EnterpriseRegistration,
    meta: { requiresAuth: true },
  },
  {
    path: "/challans",
    component: ChallansRecieved,
    meta: { requiresAuth: true },
  },
  { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/enterprises");
  } else {
    next();
  }
});

export default router;
