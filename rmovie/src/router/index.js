import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Main-Page.vue')
    },
    {
        path: '/random',
        name: 'random movie',
        component: () => import('../views/Random-Page.vue')
    },
    {
        path: '/about',
        name: 'about us',
        component: () => import('../views/About-Page.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router