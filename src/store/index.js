import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfo} from "../api/isLogin-api";
import {goodsList} from "../api/shoppingCart-api";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        userInfo: {},
        shopList:[],
    },
    mutations: {
        changeLoginModelVisible(state, {isShow}) {
            state.loginModelVisible = isShow;
        },
        changeLogin(state, {isLogin}) {
            state.isLogin = isLogin;
        },
        changeUserInfo(state, {userInfo}) {
            state.userInfo = userInfo
        },
        changeShopList(state,payload){
            state.shopList=payload.shopList
        }
    },
    getters: {
        calculationShopList:state => {
            return state.shopList.length
        }
    },
    actions: {
        checkLoginStatus(context,) {
            return getUserInfo().then(res => {
                // eslint-disable-next-line
                // debugger
                if (res.code === 0) {
                    //  已经登录了
                    context.commit("changeLogin", {isLogin: true})
                    context.commit("changeUserInfo", {userInfo: res.userInfo})
                } else {
                    //    没有登录
                    context.commit("changeLogin", {isLogin: false})
                    context.commit("changeUserInfo", {userInfo: {}})
                }
            })
        },
        modifyShopList(context){
            return goodsList().then(res => {
                context.commit("changeShopList",{shopList:res.shoppingCartList})
            })
        }
    },
})
export default store