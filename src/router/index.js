import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../views/Detail";
import ViewPlayVideo from "../components/ViewPlayVideo";

import store from "../store";
import ShoppingCal from "../components/ShoppingCal";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/index",
    },
    {
        path: "/index",
        component: IndexLayout,
        children: [
            {
                path: "",
                component: Index
            },
        ],
    },
    {
        path: "/other/:courseId",
        component: DetailLayout,
        // name:"other",
        children: [
            {
                path: "",
                component: Detail,
            },
            {
                path: "/play/:courseId",
                component: ViewPlayVideo,
                meta: {
                    //需要登录才能访问
                    isAuth: true
                }
            },
            {
                path: "/shopping-cart",
                component: ShoppingCal,
            },
        ],
    }

]

//执行路由守卫之前，先检测了一下登录状态
const loginPromise = store.dispatch("checkLoginStatus");


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//增加了路由前置守卫
router.beforeEach((to, from, next) => {
    // 在跳转之前增加了逻辑判断，根据不同的状态判断是否跳转到指定页面
    if (to.meta.isAuth) {
        //需要鉴权的
        loginPromise.then(() => {
            if (store.state.isLogin) {
                next()
            } else {
                store.commit("changeLoginModelVisible",{isShow:true})
                next("/index")
            }
        })
    } else {
        next();
    }
})


export default router
