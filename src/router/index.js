import { createRouter, createWebHashHistory } from 'vue-router'
import Base64Tool from '../components/Base64Tool.vue'
import Home from '../components/Home.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/base64', name:'base64tool', component: Base64Tool }
    ]
})

export default router