import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/recetas',
    name: 'recetas',
    component: () => import(/* webpackChunkName: "recetas" */ '../views/Recetas.vue')
  },

  {
    path: '/recetas/:id',
    name: 'detalleReceta',
    component: () => import(/* webpackChunkName: "detalleReceta" */ '../views/DetalleReceta.vue'),
    props: true
  },
  {
    path: '/informaciones',
    name: 'informaciones',
    
    component: () => import(/* webpackChunkName: "informaciones" */ '../views/Informaciones.vue')
  },

{
  path: '/admin',
  name: 'admin',
  meta: {
    requiresAuth: true
  },
  
  component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/Admin.vue')
},
{
  path: '/loginAdmin',
  name: 'loginAdmin',
  
  component: () => import(/* webpackChunkName: "loginAdmin" */ '../components/Admin/LoginAdmin.vue')
},



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/loginAdmin');
  } else {
    next();
  }
});
export default router