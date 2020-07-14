import  request from "../utils/http";


//账号密码登录接口
export function loginApi(userName,password) {
    const formData = new FormData();
    formData.append("username",userName);
    formData.append("password",password);
    formData.append("rememberMe",true);
    return request.post("/api/pcUser/login",formData)
}

//获取当前登录的用户的信息
export  function getUserInfo() {
        return request.get("/api/pcUser/login-user/info")
}

//退出登录
export  function logout() {
        return request.get("/api/pcUser/logout")
}