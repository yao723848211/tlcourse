<template>
    <div>
        <div class="block">
            <span class="demonstration"></span>
            <el-carousel trigger="click" height="400px">
                <el-carousel-item v-for="(item,index) in list" :key="index"
                                  :style='{"background-image":"url("+item.imgUrlPc+")"}'
                >
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import {getSwiper} from "../api/apitlcourse";

    export default {
        name: "Swiper",
        data() {
            return {
                list: []
            }

        },
        created() {
            getSwiper(2).then(res => {
                // console.log(res.list)
                this.list = res.list
            })
        }
    }
</script>

<style scoped lang="less">
    .block {
        .el-carousel {
            /deep/ .el-carousel__item {
                width: 100%;
                height: 400px;
                background-size: cover;
                background-position: center !important;
                background-repeat: no-repeat;
            }
        }
    }


</style>