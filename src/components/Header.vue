<template>
    <div>
        <!--        顶部样式-->
        <header class="header-container">
            <!--            头部-->
            <div class="header-top">
                <!--                头部logo-->
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <!--                搜索-->
                <div class="header-search">
                    <input type="text" placeholder="搜索课程">
                    <button>
                        <span></span>
                        搜索
                    </button>
                </div>
                <!--                右侧登录-->
                <div class="logIn">

                      <span class="shopping">
                         <i class="el-icon-shopping-cart-2"></i>
                      </span>
                    <span class="loginbtn" @click="showLoginModel" v-if="!isLogin">登录/注册</span>
                    <span class="loginbtn" @click="showLoginModel" v-else>{{userInfo.nickname}}</span>
                    <span class="user" v-if="!isLogin">
                          <i class="el-icon-user"></i>
                      </span>
                    <span class="user" v-else @click="logout">
                          <img :src="userInfo.avatarUrl" alt="">
                      </span>

                </div>
            </div>
        </header>
        <Login></Login>
    </div>
</template>

<script>
    import Login from "./Login";
    import {mapState} from "vuex";
    import {logout} from "../api/isLogin-api";

    export default {
        name: "Header",
        components:{
            Login
        },
        computed: {
            ...mapState(["isLogin", "userInfo"])
        },
        methods: {
            showLoginModel() {
                // eslint-disable-next-line
                // debugger
                this.$store.commit("changeLoginModelVisible", {isShow: true})
            },
            logout() {
                logout().then(res => {
                    if (res.code === 0) {
                        //退出登录状态
                        //清除登录状态
                        this.$store.dispatch("checkLoginStatus")
                    }
                })
            }
        },
    }
</script>

<style scoped lang="less">
    /*全局的样式*/
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    a,
    a:visited,
    a:hover,
    a:active,
    a:focus {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .clearfix:after {
        Content: "";
        Height: 0;
        display: block;
        clear: both;
    }

    /* 顶部 */
    .header-container {

        margin-top:0px;

        .header-top {
            width: 1200px;
            height: 81px;
            margin: 0 auto;
            /*background-color: aqua;*/
            /*图片logo*/

            .logo {
                float: left;
            }

            /*搜索*/

            .header-search {
                float: left;
                margin-left: 200px;
                margin-top: 10px;
                height: 38px;
                text-align: center;

                input {
                    width: 317px;
                    height: 100%;
                    border: 1px solid #d9d9d9;
                    outline: none;
                    padding: 0 10px;
                    border-radius: 20px;
                    -webkit-border-radius: 20px;
                    -moz-border-radius: 20px;
                    -ms-border-radius: 20px;
                    -o-border-radius: 20px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    vertical-align: bottom;
                }

                input:hover {
                    border-color: #00cf8c;
                }

                button {
                    width: 83px;
                    height: 100%;
                    border-radius: 20px;
                    -webkit-border-radius: 20px;
                    -moz-border-radius: 20px;
                    -ms-border-radius: 20px;
                    -o-border-radius: 20px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    margin-left: -5px;
                    outline: none;
                    border: 0;
                    background-color: #00cf8c;
                    color: #fff;
                    vertical-align: bottom;
                    position: relative;
                    line-height: 32px;
                    font-size: 16px;
                    font-weight: 400;

                    a {
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        line-height: 38px;
                    }
                }
            }

            /*右侧登录图标*/
            .logIn:hover {
                cursor: pointer;
            }
            .logIn {
                float: left;
                margin-top: 10px;
                text-align: center;
                margin-left: 100px;
                .shopping{
                    font-size: 18px;
                    vertical-align: middle;
                }
                .shopping::after {
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 15px;
                    background-color: #ccc;
                    /* margin-bottom: -3px; */
                    margin: 0 5px -3px;
                }
                .loginbtn{
                    vertical-align: middle;
                    margin-right: 3px;
                }
                .user{
                    font-size: 32px;
                    vertical-align: middle;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-left: 15px;
                        padding-top: 3px;
                        box-sizing: border-box;
                    }
                }
            }
        }


    }
</style>