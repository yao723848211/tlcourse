<template>
    <div class="section-detail-container">
        <div class="section-detail">
            <!--        中间底部的目录-->
            <div class="section-detail-bottom">
                <el-tabs v-model="activeName">
                    <!--              课程描述  -->
                    <el-tab-pane label="课程描述" name="first">
                        <div v-html="obj.courseDetail"></div>
                    </el-tab-pane>
                    <!--                目录-->
                    <el-tab-pane label="目录" name="second">
                        <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                            <h3>{{item.sectionName}}
                                <button>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-ziyuan"></use>
                                    </svg>
                                    下载
                                </button>
                            </h3>
                            <dt>
                                <dl class="dlBox" v-for="(item,index) in item.subSections" :key="index"
                                    @mouseover="shiftIn(index)" @mouseout="shiftOut"  @click="playView(item.sectionId)">
                                    <div class="pull-left leftBox">
                                        {{i+1}}-{{index+1}}
                                        <span class="empty"></span>
                                        {{item.sectionName}}
                                    </div>
                                    <div class="pull-right rightBox">
                                        <span class="play" v-if="index!=index1"><svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-bofang"></use>
                                            </svg></span>
                                        <span class="view" v-if="index==index1">观看</span>
                                    </div>
                                </dl>
                            </dt>
                        </div>
                    </el-tab-pane>
                    <!--                课程评论-->
                    <el-tab-pane label="课程评论" name="third">
                        <div class="section-detail-pl">
                            <p>评论</p>
                            <ul class="clearfix">
                                <li>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xingxing2"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xingxing2"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xingxing2"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xingxing2"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-xingxing2"></use>
                                    </svg>
                                </li>
                                <li><span>非常好</span></li>
                            </ul>
                        </div>
                        <div class="textk clearfix"><textarea placeholder="请发表您对课程的评价"></textarea>
                            <button
                                    class="btn1">发布评论
                            </button>
                        </div>
                        <hr>
                        <div v-for="(item,index) in list" :key="index">
                            <div class="name">{{item.user.nickname}}</div>
                            <p class="CommentsContent">{{item.commentContent}}</p>
                            <p class="CommentsTime">{{item.createdTime}}</p>
                            <hr>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>

</template>

<script>
    import {getCourseComment, getCourseDetail, switchChapters} from "../api/apitlcourse";
    import loginMixin from "../mixin/loginMixin";


    export default {
        name: "SectionDetail",
        data() {
            return {
                activeName: 'first',
                obj: {},
                sections: [],
                index1: -1,
                list: [],
                // flag: false,
            };
        },
        mixins: [loginMixin],
        methods: {
            //观看与观看图标的移入移出的切换
            shiftIn(index) {
                this.index1 = index;
            },
            shiftOut() {
                this.index1 = -1
            },
            playView(sectionId) {
                switchChapters(sectionId).then(res => {
                    // console.log(res.section.file);
                    this.file = res.section.file
                });
                console.log(sectionId)
            }
        },
        created() {
            // console.log(this.$route.params.courseId)
            //缓冲页
            getCourseDetail(this.$route.params.courseId).then(res => {
                // console.log(res.data.sections)
                this.obj = res.data
                this.sections = res.data.sections
            })
            //获取课程评论
            getCourseComment(this.$route.params.courseId).then(res => {
                // console.log(res.rows)
                this.list = res.rows
            })

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

    .section-detail-container {
        background-color: #f4f4f4;
        width: 100%;
        height: 100%;
    }


    .section-detail {
        width: 1200px;
        margin: 0 auto;
        /*background-color: white;*/
        border-top: 1px solid #f2f2f2;
        /*中间底部目录/评论等主体的盒子*/
        /*目录*/
        .section-detail-bottom {
            margin-top: 25px;
        }

        .section-detail-directory {
            h3 {
                font-size: 22px;
                font-weight: 400;
                height: 40px;
                line-height: 40px;
            }

            button {
                height: 30px;
                width: 80px;
                float: right;
                font-size: 14px;
                color: #fff;
                border: 0;
                outline: none;
                margin-top: 5px;
                line-height: 30px;
                background-color: rgb(45, 183, 245);
            }

            dl {
                height: 50px;
                line-height: 30px;
                padding: 10px 20px;
                background: white;
                margin: 10px 0;
                color: rgba(0, 0, 0, .65);
                font-weight: 500;
            }

            dl:hover {
                color: #00cf8c;
                cursor: pointer;
            }

            .empty {
                display: inline-block;
                width: 8px;
            }

            .play {
                font-size: 20px;
            }

        }

        /*    评论pl*/

        .section-detail-pl {
            ul {
                margin: 20px 0 10px;

                li {
                    float: left;
                    margin-right: 8px;
                    font-size: 22px;
                    color: gold;
                    line-height: 17px;

                    span {
                        margin-left: 10px;
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.65);;
                    }
                }
            }
        }

        .textk {
            textarea {
                height: 136px;
                width: 100%;
                font-variant: tabular-nums;
                padding: 4px 11px;
                font-size: 14px;
                border: 1px solid #d9d9d9;
                border-radius: 2px;
                resize: none;
            }

            .btn1 {
                width: 88px;
                height: 32px;
                margin: 20px 0px 0px;
                color: #fff;
                background-color: #00cf8c;
                border: 0;
                outline: none;
                padding: 0 15px;
                float: right;
                font-size: 14px;
                border-radius: 2px;
            }
        }

        .name {
            height: 32px;
        }

        .CommentsContent {
            padding: 10px 0px 10px 40px;

        }

        .CommentsTime {
            padding: 0 10px 0 0;
            color: #999;
            text-align: right;
        }


    }

</style>