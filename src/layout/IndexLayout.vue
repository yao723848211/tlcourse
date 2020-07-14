<template>
    <div>

        <Header></Header>
        <Navbar></Navbar>
        <!--        界面渲染的区域(子路由)-->
        <div>
            <router-view></router-view>
        </div>
        <!--   底部 -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";

    export default {
        name: "IndexLayout",
        components: {
            Header,
            Navbar,
            Footer
        }
    }
</script>

<style scoped lang="less">


</style>