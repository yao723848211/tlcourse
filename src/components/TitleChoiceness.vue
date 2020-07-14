<template>
    <div>
        <div class="coursetypelist_container">
            <!--            免费课程-->
            <div class="clearfix row Boutique">
                <div class="clearfix zgts">
                    <h3 class="text-center pull-left">{{title}}</h3>
                    <span class="more pull-right text-right">
                        <a href="">更多</a>
                    </span>
                </div>
                <ul class="clearfix commodityUl">
                    <li class="commodityLi" v-for="(item,index) in list" :key="index">
                        <a href="#">
                            <div class="imgBox">
                                <img :src="item.bannerImgUrl">
                            </div>
                            <p class="bt">{{item.title}}</p>
<!--                            <p class="course">共<span class="festival">{{item.subSectionNum}}</span>节课 | <span-->
<!--                                    class="person">{{item.learningNum}}</span>人报名</p>-->
<!--                            <p class="free" ref="isFree">免费</p>-->
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import {getTitleCourseList} from "../api/apitlcourse";

    export default {
        name: "CourseTypeList",
        props: {
            pageNum: {
                type: [String, Number],
                // default:1
            },
            pageSize:{
                type:[String,Number],
                // default:10
            },
            title:{
                type:String
            }
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            getTitleCourseList(this.pageNum, this.pageSize).then(res => {
                // console.log(res)
                this.list = res.rows
            });

        },
        // mounted() {
        //     if(this.$refs.isFree){
        //
        //     }
        // },
    }
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

    .coursetypelist_container {
        padding-top: 5px;
        box-sizing: border-box;
        width: 1200px;
        margin: 0 auto;

        .zgts {
            position: relative;

            h3 {
                font-weight: 400;
                padding-bottom: 15px;
                border-bottom: 2px solid #e8e8e8;
                margin-bottom: 0;
                width: 100%;
                text-align: center;
                font-size: 30px;
            }

            .more {
                position: absolute;
                top: 0;
                right: 0;
                display: inline-block;
                margin-top: 24px;
                font-size: 16px;
                padding-bottom: 15px;
                /* border-bottom: 2px solid #e8e8e8; */
                /* width: 20%; */
                padding-right: 10px;

                a {
                    color: #999;
                    text-decoration: none;
                }

            }
        }

        li {
            width: 20%;
            float: left;
            margin-top: 14px;
            padding: 0 8px;
            box-sizing: border-box;
            .imgBox {
                width: 100%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.5s;
                    -webkit-transition: all 0.5s;
                    -moz-transition: all 0.5s;
                    -ms-transition: all 0.5s;
                    -o-transition: all 0.5s;
                }

                img:hover {
                    transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                    -moz-transform: scale(1.2);
                    -ms-transform: scale(1.2);
                    -o-transform: scale(1.2);
                }
            }

            a {
                font-weight: 500;
                display: inline-block;
                margin-bottom: 10px;
                width: 100%;
                text-decoration: none;
            }

            .bt {
                width: 100%;
                font-size: 14px;
                color: #000;
                margin-bottom: 0;
                white-space: nowrap;

                text-overflow: ellipsis;
                overflow: hidden;
            }

            .course {
                color: #888;
                margin-bottom: 0;
                margin-top: 3px;
            }

            .free {
                color: #00cf8c;
                font-size: 16px;
                margin-bottom: 0;
                margin-top: 3px;
                display: inline-block;

            }
        }
    }
</style>