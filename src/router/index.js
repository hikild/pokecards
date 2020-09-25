import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Usuario from "../views/Usuario.vue";
import Usuarios from "../views/Usuarios.vue";
import Pokedex from "../views/Pokedex.vue";
import Adicionar from "../components/Adicionar.vue";
import Inventario from "../components/Inventario.vue";
import EditarUsuario from "../components/EditarUsuario.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/usuario/:id",
    name: "usuario",
    component: Usuario,
    props: true,
    children: [
      {
        path: "adicionar",
        name: "adicionar",
        component: Adicionar,
      },
      {
        path: "inventario",
        name: "inventario",
        component: Inventario,
      },
      {
        path: "editar",
        name: "editar",
        component: EditarUsuario,
      },
    ],
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios,
  },
  {
    path: "/pokedex",
    name: "pokedex",
    component: Pokedex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 });
  },
});

export default router;
