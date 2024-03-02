
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/generate_token",
    component: ()=>import ("../pages/GenerarTokenPage.vue"),
  },
  {
    path: "/save_estudiante",
    component:  ()=>import ("../pages/GuardarEstudiantePage.vue"),
  },
{
  path:"/:pathMatch(.*)*",
  component: ()=>import ("../pages/NoFoundPage.vue"),
}

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});//Creamos el historial para las url
export default router;