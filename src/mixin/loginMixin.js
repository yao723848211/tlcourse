export default {
    computed: {
        isLogin() {
            return this.$store.state.isLogin
        }
    },
    methods: {
        //    登录之后才可以点击
        loginClick() {
            if (this.isLogin) {
                return true
            } else {
                this.$store.commit("changeLoginModelVisible",{isShow:true})
                return false
            }
        }


    }
}