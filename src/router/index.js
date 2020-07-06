import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue')
const HomeAdmin = () => import('../views/home/Admin.vue')
const HomeDashboard = () => import('../views/home/Dashboard.vue')
const HomeAdminList = () => import('../views/home/admin/List.vue')
const HomeAdminEditor = () => import('../views/home/admin/Editor.vue')
const HomeAdminTags = () => import('../views/home/admin/Tags.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'HomeDashboard'
        },
        children: [
            {
                path: 'dashboard',
                name: 'HomeDashboard',
                component: HomeDashboard
            },
            {
                path: 'admin',
                name: 'HomeAdmin',
                component: HomeAdmin,
                children: [
                    {
                        path: 'editor/:id',
                        name: 'HomeAdminEditor',
                        component: HomeAdminEditor
                    },
                    {
                        path: 'list',
                        name: 'HomeAdminList',
                        component: HomeAdminList
                    },
                    {
                        path: 'tag',
                        name: 'HomeAdminTags',
                        component: HomeAdminTags
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
