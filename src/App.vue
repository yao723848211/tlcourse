<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


    // import {getUserInfo} from "./api/isLogin-api";

    // import {createKey, getItem} from "./utils/localstore-util";

    export default {
        name: 'app',
        components:{

        },
        created() {

            //根据localStore
            // //同步localStore中的值
            // // let isLogin = localStorage.getItem(createKey("isLogin"))||false;
            // let isLogin =getItem(createKey("isLogin"))
            // this.$store.commit("changeLogin",{isLogin})
            // let userInfo = JSON.parse(localStorage.getItem(createKey("userInfo"))||"{}")
            // this.$store.commit("changeUserInfo",{userInfo})


            //请求接口保留跟新状态
            // getUserInfo().then(res => {
            //     // eslint-disable-next-line
            //     // debugger
            //     if (res.code === 0) {
            //         //  已经登录了
            //         this.$store.commit("changeLogin",{isLogin:true})
            //         this.$store.commit("changeUserInfo",{userInfo:res.userInfo})
            //     }else {
            //     //    没有登录
            //     }
            // })

            //把上面的接口封装到Vuex中的actions里
            this.$store.dispatch("checkLoginStatus")
        }

    }
</script>
<style lang="less" scoped>

</style>
