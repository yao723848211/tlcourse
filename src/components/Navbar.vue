<template>
    <div class="navbar-container">
        <div class="nav">
            <ul>
                <li><a href="">首页</a></li>
                <li><a href="">课程分类 </a><i class="el-icon-arrow-down"></i></li>
                <li><a href="">专属课程</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",

    }
</script>

<style scoped lang="less">
.navbar-container{
    .nav{
        width: 1200px;
        margin: 0 auto;
        ul{
            overflow: hidden;
            list-style: none;
            margin-left: -50px;
            li{
                float: left;
                padding: 0px 20px;
                box-sizing: border-box;
                a{
                    color: black;
                    text-decoration: none;
                }
                a:hover{
                    color: #1da57a;
                }
            }
            li:hover{
                background-color: #e6fff3;
            }
        }
    }
}
</style>