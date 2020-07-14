<template>
    <div>
        <!--        头部-->
        <OtherHeader></OtherHeader>
        <!--        渲染的区域(子路由)-->
        <div>
            <router-view></router-view>
        </div>
        <!--        底部-->
        <Footer></Footer>
    </div>
</template>

<script>
    import OtherHeader from "../components/OtherHeader";
    import Footer from "../components/Footer";

    export default {
        name: "DetailLayout",
        components:{
            OtherHeader,
            Footer,
        }
    }
</script>

<style scoped>

</style>