import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入一级组件
import DashBoard from './../views/dashboard/DashBoard'

const Home = ()=> import('./../views/home/Home.vue')
const Cart = ()=> import('./../views/cart/Cart.vue')
const Category = ()=> import('./../views/category/Category.vue')
const Mine = ()=> import('./../views/mine/Mine.vue')

const routes = [
    {
        path:'/',
        redirect:'/dashboard'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
        children:[
            {path:'/dashboard',redirect: '/dashboard/home'},
            {path:'home',name:'home',component:Home},
            {path:'cart',name:'cart',component:Cart},
            {path:'category',name:'category',component:Category},
            {path:'mine',name:'mine',component:Mine},
        ]
    },
]

const router = new Router({
  routes
})

export default router
