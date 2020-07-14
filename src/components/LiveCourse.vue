<template>
    <div>
        <!--        直播课程-->
        <div class="liveBroadcast container clearfix">
            <!--            标题-->
            <div>
                <h3 class="text-center bt">直播课程</h3>
            </div>

            <!--            内容-->
            <div class="liveBroadcast_content">
                <el-tabs :tab-position="tabPosition" style="height: 400px;">
                    <el-tab-pane v-for="(item,index) in list " :key="index" :label="item.course.courseTitle">
<!--                        左边视频-->
                        <div class="box_left clearfix">
                            <img :src="item.course.coverFileUrl" alt="">
                            <div class="shade">
                                <div class="bt">{{item.course.courseTitle}}</div>
                                <div class="state">
                                    <span>&nbsp;&nbsp;直播结束</span>
                                </div>
                                <button>直播结束</button>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>

            </div>
        </div>
    </div>
</template>

<script>


    import {streaming} from "../api/apitlcourse";

    export default {
        name: "LiveCourse",
        data() {
            return {
                list: [],
                tabPosition: 'right'
            };
        },
        created() {
            streaming().then(res => {
                // console.log(res.rows)
                this.list = res.rows
            });
        }
    };
</script>

<style scoped lang="less">
    ul {
        list-style: none;
    }

    .clearfix:after {
        Content: "";
        Height: 0;
        display: block;
        clear: both;
    }

    .liveBroadcast {
        width: 1200px;
        margin: 0 auto;
        /*h3标题*/

        .text-center {
            display: flex;
            justify-content: center;
            font-size: 32px;
        }

        .liveBroadcast_content {
            margin-top: 20px;

            .box_left {
                float: left;
                width: 100%;
                height: 350px;
                padding: 0;
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;
                position: relative;
                color: #fff;
                box-sizing: border-box;

                img {
                    width: 100%;
                    height: 100%;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;

                }

                .shade {
                    width: 100%;
                    height: 100%;
                    padding: 80px 50px;
                    background-color: rgba(0, 0, 0, .6);
                    text-align: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    box-sizing: border-box;

                    .bt {
                        font-size: 24px;
                    }

                    .state {
                        margin: 35px 0;
                    }

                    button {
                        width: 180px;
                        height: 50px;
                        font-size: 18px;
                        background-color: #00cf8c;
                        border: 0;
                        outline: none;
                    }

                    button:hover {
                        background-color: #23db9b;
                    }

                }
            }

        }
    }
</style>