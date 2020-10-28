import { createWebHistory, createRouter } from 'vue-router'


import Navbar from '../components/Navbar.vue'
import Lista from '../components/Lista.vue'
import Login from '../components/Login.vue'
import Formulario from '../components/Formulario.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [

    { path: '/', name: 'Navbar', component: HelloWorld },
    { path: '/Navbar', name: 'navbar', component: Navbar },
    { path: '/formulario', name: 'FormularioIngreso', component: Formulario },
    { path: '/lista', name: 'ListaTareass', component: Lista },
    { path: '/login', name: 'login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;