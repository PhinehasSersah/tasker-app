import { createRouter, createWebHistory } from "vue-router";


import AboutPage from '../views/AboutPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },

    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;