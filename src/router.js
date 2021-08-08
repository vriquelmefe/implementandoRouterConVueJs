import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import SobreMi from './components/SobreMi'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/contacto',
      component: Contacto,
      name: 'contacto',      
    },
    {
      path: '/sobre-mi',
      component: SobreMi,
      name: 'sobre-mi',      
    },
    {
      path: '/post/:entrada',
      component: Post,
      name: 'post', 
      children: [
        {
          path: '/articulo',
          component: Articulo,
          name: 'articulo',      
        },
      ]     
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})