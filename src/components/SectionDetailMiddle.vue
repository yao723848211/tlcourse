<template>
    <div class="section-detail-middle">
        <!--                    中间的播放区域-->
        <div class="midBox1 clearfix">
            <div class="midimg">
                <img :src="obj.bannerFileUrl" alt="">
            </div>
            <div class="midText">
                <h3>{{obj.courseTitle}}</h3>
                <ul class="grade clearfix">
                    <li>累计 <span>{{obj.participationsCount}}</span> 人学习</li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                    <li class="gradeli">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing2"></use>
                        </svg>
                    </li>
                </ul>
                <p>免费</p>
<!--                                     <router-link :to="'/play'" tag="div"><button>立即观看</button></router-link>-->
                <button @click="play" class="playBtn">立即观看</button>
<!--                <el-button type="info">立即购买</el-button>-->
<!--                <button>加入购物车</button>-->
            </div>
            <div class="collect" @click="collect">
                    <span v-if="!flag">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        收藏
                    </span>
                <span class="collectColor" v-else>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        已收藏
                    </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCourseDetail} from "../api/apitlcourse";
    import loginMixin from "../mixin/loginMixin";

    export default {
        name: "SectionDetailMiddle",
        data(){
            return{
                flag: false,
                obj:{},
            }
        },
        mixins: [loginMixin],
        created() {
            //缓冲页
            getCourseDetail(this.$route.params.courseId).then(res => {
                console.log(res)
                this.obj = res.data
                this.sections = res.data.sections
            });
        },
        methods:{
            //点击收藏进行收藏
            collect() {
                if (this.loginClick()) {
                    // console.log("已经收藏")
                    this.flag = !this.flag
                }
            },
            //点击播放进行跳转
            play() {
                if (this.loginClick()) {
                    this.$router.push('/play/' + this.obj.courseId)
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .pull-left {
        float: left;
    }

    .pull-right {
        float: right;
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .clearfix:after {
        Content: "";
        Height: 0;
        display: block;
        clear: both;
    }

    ul {
        list-style: none;
    }
    .section-detail-middle{
        width: 1200px;
        margin: 0 auto;
        /*中间底部目录/评论等主体的盒子*/
        .midBox1 {
            width: 100%;
            background: #fff;
            border-radius: 4px;
            padding: 20px;
            .playBtn:hover{
                cursor:pointer;
            }
            .midimg {
                padding: 0;
                width: 33.33333333%;
                float: left;

                img {
                    width: 330px;
                    height: 220px;
                }

            }

            /*中间文本*/

            .midText {
                width: 50%;
                float: left;

                h3 {
                    font-weight: 400;
                }

                p {
                    height: 70px;
                    color: rgb(0, 207, 140);
                    font-size: 24px;
                }

                button {
                    width: 160px;
                    height: 45px;
                    font-size: 18px;
                    color: #fff;
                    background-color: #00cf8c;
                    border: 0;
                    outline: none;
                }

                .grade {
                    line-height: 30px;
                    margin: 10px 0;

                    li {
                        float: left;
                        color: #999;
                        margin-right: 8px;

                    }

                    .gradeli {
                        font-size: 24px;
                        color: gold;
                    }

                }

            }

            /*收藏*/

            .collect {
                float: left;
                margin-left: 50px;
                padding: 0px;
                text-align: center;
                color: #999;
                width: 110px;
                height: 30px;
                font-size: 16px;
                border: 1px solid #999;
                line-height: 28px;
            }

            .collectColor {
                border-color: #ffb200;
                color: #ffb200;
            }


            .collect:hover {
                cursor: pointer;
            }

        }
    }

</style>