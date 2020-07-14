import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfo} from "../api/isLogin-api";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loginModelVisible: false,
        isLogin: false,
        userInfo: {},
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
        }
    },
    getters: {},
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
        }
    },
})
export default store