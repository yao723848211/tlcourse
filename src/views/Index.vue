<template>
    <div>
        <!--        轮播图-->
        <div>
            <Swiper></Swiper>
        </div>
        <!--        直播课程-->
        <div>
            <LiveCourse></LiveCourse>
        </div>
        <!--课程分类列表-->
        <CourseTypeList :type="'free'" :page-num="1" :page-size="10" :title="'免费课程'"></CourseTypeList>
        <CourseTypeList :type="'boutique'" :page-num="2" :page-size="10" :title="'精品课程'"></CourseTypeList>
        <CourseTypeList :type="'discount'" :page-num="1" :page-size="5" :title="'限时折扣课程'"></CourseTypeList>
        <TitleChoiceness :page-num="1" :page-size="5" :title="'头条精选'"></TitleChoiceness>
        <!--        固定定位的QQ-->
        <!-- 固定定位 -->
        <div class="qq text-center">
            <ul>
                <li>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=577405209&site=qq&me" target="_blank" class="a1">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>客服1</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>客服2</p>
                    </a>
                </li>
                <li>
                    <a href="#" class="a3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-QQ"></use>
                        </svg>
                        <p>技术支持</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Swiper from "../components/Swiper";
    import LiveCourse from "../components/LiveCourse";
    import CourseTypeList from "../components/CourseTypeList";
    import TitleChoiceness from "../components/TitleChoiceness";

    export default {
        name: "Index",
        components: {
            Swiper, LiveCourse, CourseTypeList, TitleChoiceness,
        }
    }
</script>
<style scoped lang="less">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }


    .qq {
        position: fixed;
        right: 10px;
        bottom: 200px;
        z-index: 200;

        ul {
            list-style: none;
            li{
                .a1 {
                    border-radius: 5px 5px 0 0;
                }
                .a3 {
                    border-radius: 0px 0px 5px 5px;
                    -webkit-border-radius: 0px 0px 5px 5px;
                    -moz-border-radius: 0px 0px 5px 5px;
                    -ms-border-radius: 0px 0px 5px 5px;
                    -o-border-radius: 0px 0px 5px 5px;
                }
                a {
                    font-size: 40px;
                    display: block;
                    width: 70px;
                    color: #009688;
                    background-color: #e6f7ff;
                    border-top: 1px solid #e8e8e8;
                    text-decoration: none;
                    text-align: center;
                    p {
                        margin-bottom: 0;
                        font-size: 14px;
                    }
                }
                a:hover {
                    color: #fff;
                    background-color: #009688;
                }


            }
        }
    }
</style>