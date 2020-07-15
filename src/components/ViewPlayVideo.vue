<template>
    <div>
        <div class="view-play-video-container">
            <!--首页、播放-->
            <PageVideo></PageVideo>
            <!--播放-->
            <div class="playview clearfix">
                <div class="view-play">
                    <video :src="file.fileUrl"
                           controls></video>
                </div>
                <div class="view-directory">
                    <div class="section-detail-directory" v-for="(item,i) in sections" :key="item.sectionId">
                        <h3>{{item.sectionName}}</h3>
                        <dt>
                            <dl class="dlBox" v-for="(item,index) in item.subSections" :key="index">
                                <div class="pull-left leftBox"  @click="playView(item.sectionId)">
                                    <div class="recorded clearfix" :class="playId==item.sectionId?'active1':''">录播</div>
                                    <div class="pageword"
                                         :class="playId==item.sectionId?'active':''">{{i+1}}-{{index+1}}
                                        {{item.sectionName}}
                                    </div>
                                    <!--<div>32分钟</div>-->
                                </div>
                            </dl>
                        </dt>
                    </div>
                </div>
            </div>
            <!--目录、课程描述、评论-->
            <SectionDetail></SectionDetail>
        </div>
    </div>
</template>

<script>

    import PageVideo from "./PageVideo";
    import SectionDetail from "./SectionDetail";
    import {getCourseDetail, switchChapters} from "../api/apitlcourse";

    export default {
        name: "ViewPlayVideo",
        data() {
            return {
                obj: {},
                sections: [],
                file: {},
                playId: 1,
            }
        },
        components: {
            PageVideo,
            SectionDetail,
        },
        methods: {
            playView(sectionId) {
                switchChapters(sectionId).then(res => {
                    // console.log(res.section.file);
                    this.file = res.section.file
                });
                // console.log(sectionId)
                this.playId = sectionId;
            }
        },
        created() {
            //缓冲页目录
            getCourseDetail(this.$route.params.courseId).then(res => {
                // console.log(res.data.sections)
                this.obj = res.data
                this.sections = res.data.sections
            })
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
    .active{
        color: #23db9b;
    }
    .active1{
        background-color: #23db9b!important;
    }

    .view-play-video-container {
        width: 1200px;
        margin: 0 auto;

        .playview {
            .view-play {
                float: left;

                video {
                    width: 800px;
                    height: 450px;
                }
            }

            .view-directory {
                /*background-color: black;*/
                float: left;
                width: 300px;
                height: 450px;
                overflow: scroll;

                .section-detail-directory {
                    margin-left: 20px;

                    .dlBox {
                        margin-top: 5px;

                        .leftBox {
                            .pageword {
                                font-size: 16px;
                                margin-left: 60px;
                            }

                            .recorded {
                                width: 50px;
                                height: 20px;
                                float: left;
                                background-color: #cccccc;
                                display: flex;
                                justify-content: center;
                                color: white;
                            }
                            /*.active {*/
                            /*    background-color: #1da57a;*/
                            /*    color: #1da57a;*/
                            /*}*/
                        }


                        .leftBox:hover .recorded{
                            background-color: #1da57a;
                        }
                        .leftBox:hover .pageword{
                            color: #1da57a;
                        }

                    }
                    .dlBox:hover {
                        color: #1da57a;
                        cursor: pointer;
                    }
                }
            }
        }

    }
</style>