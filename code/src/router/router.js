import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import KontaktView from "@/views/KontaktView.vue";
import ImpressumView from "@/views/ImpressumView.vue";
import ProdukteView from "@/views/ProdukteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "About" },
  },
  {
    path: "/impressum",
    name: "impressum",
    component: ImpressumView,
    meta: { title: "Impressum" },
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: KontaktView,
    meta: { title: "Kontakt" },
  },
  {
    path: "/produkte",
    name: "produkte",
    component: ProdukteView,
    meta: { title: "Produkte" },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
