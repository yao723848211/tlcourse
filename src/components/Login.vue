<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="loginModelVisible "
                width="30%"
                @close="cancel"
        >
            <span>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                  </el-form-item>
            </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {loginApi} from "../api/isLogin-api";
    // import {createKey, setItem} from "../utils/localstore-util";

    export default {
        name: "Login",
        data() {
            var userName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                } else if (value.length < 5) {
                    return callback(new Error("账户名大于5"))
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    password: '',
                    userName: '',
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    userName: [
                        {validator: userName, trigger: 'blur'}
                    ],
                }
            };
        },
        computed: {
            ...mapState(["loginModelVisible"])
        },
        methods: {
            cancel() {
                this.$store.commit("changeLoginModelVisible", {isShow: false})
            },
            submit() {
                this.$refs["ruleForm"].validate((valid) => {
                    if (valid) {
                        //登录成功之后
                        // console.log(this.ruleForm)
                        loginApi(this.ruleForm.userName, this.ruleForm.password).then(res => {
                            console.log(res)
                            if (res.code == 0) {
                                //    code==0登录成功
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                            }
                            // this.$store.commit("changeLogin",{isLogin:true})
                            // // localStorage.setItem(createKey("isLogin"),"true");
                            // setItem(createKey("isLogin"),true,Date.now()+30000)
                            // this.$store.commit("changeUserInfo",{userInfo:res.userInfo})
                            // // localStorage.setItem(createKey("userInfo"),JSON.stringify(res.userInfo))
                            this.$store.commit("changeLoginModelVisible", {isShow: false})

                            this.$store.dispatch("checkLoginStatus")
                        })
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>