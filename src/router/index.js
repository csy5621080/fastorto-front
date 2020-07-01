import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue')
const HomeIndex = () => import('../views/home/Index.vue')
const List = () => import('../views/home/ListView.vue')
const Editor = () => import('../views/home/EditorView.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'HomeIndex'
        },
        children: [
            {
                path: 'home',
                name: 'HomeIndex',
                component: HomeIndex
            },
            {
                path: 'list',
                name: 'List',
                component: List
            },
            {
                path: 'editor/:id',
                name: 'Editor',
                component: Editor
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
