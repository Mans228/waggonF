  import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/components/Register.vue'
import Bremsprotokoll from '@/components/Bremsprotokoll.vue'
import { useUserStore } from '@/store/user';
import {ref} from "vue";
import Login from '@/components/Login.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/fill',
      name: 'Bremsprotokoll',
      component: Bremsprotokoll
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]

})
router.beforeEach((to, from, next) => {
  let userStore = useUserStore();
  let email = ref(userStore.getEmail)

  if (email.value==null && to.name !== 'Register'&& to.name!=='Login') {  //if user is not authenticated and er geht nicht zum register
    return next({path:'login'})// Redirect to the Register page
  } else {
    console.log(email)
    return next(); // Proceed with the navigation
  }
});



export default router
