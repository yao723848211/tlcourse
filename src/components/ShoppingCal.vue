<template>
    <div  class="shoppingCart">
        <h3>我的购物车  <span>  共2门课程</span></h3>
        <div  class="shoppingCartNav">
            <ul>
                <li  class="FutureGenerations">
                    <!--                                        <input  type="checkbox">-->
                    <!--                                        <span>全选</span>-->
                    <el-checkbox  :indeterminate="isIndeterminate"  :value="checkAll"  @change="handleCheckAllChange">
                        全选
                    </el-checkbox>
                </li>
                <li>课程名称</li>
                <li>原价</li>
                <li>优惠</li>
                <li>操作</li>
            </ul>
        </div>
        <div  class="goods"  v-for="(item,index)  in  list"  :key="index">
            <ul>
                <li  class="choose">
                    <!--  <span></span>-->
                    <el-checkbox  v-model="item.checked"></el-checkbox>
                    <img  :src="item.course.coverFileUrl">
                </li>
                <li>{{item.course.courseTitle}}</li>
                <li>
                    <del>￥{{item.course.coursePrice}}</del>
                    <span  class="discount">￥{{item.course.discountPrice}}</span>
                </li>
                <li>
                    <el-tag>{{item.course.discountDesc}}</el-tag>
                </li>
                <li>

                    <i  class="el-icon-delete"  @click="delShop(item.shoppingCartId)"></i>
                </li>
            </ul>
        </div>
        <div  class="settlement">

            <div  class="chooseAll">
                <el-checkbox  :indeterminate="isIndeterminate"  :value="checkAll"  @change="handleCheckAllChange">
                    全选
                </el-checkbox>
            </div>
            <div  class="combined">
                <div  class="price">
                    合计<span>￥{{a1}}</span>
                </div>
                <div  :class="a1>0?'active':'submit'">提交</div>
            </div>
        </div>
    </div>
</template>

<script>


    import {delShop, goodsList} from "../api/shoppingCart-api";

    export  default  {
        name:  "ShoppingCal",
        created()  {
            goodsList().then(res  =>  {
                this.list  =  res.shoppingCartList
            })
        },
        data()  {
            return  {
                list:  [],
            }
        },
        computed:  {
            isIndeterminate()  {
                let  i  =  0;
                this.list.forEach(item  =>  {
                    if  (item.checked)  {
                        i++
                    }
                })
                return  i  !==  0  &&  i  !==  this.list.length
            },

            a1()  {
                let  a1  =  0;
                this.list.forEach(item  =>  {
                    if  (item.checked)
                        a1  +=  item.course.coursePrice
                })
                return  a1;
            },
            checkAll()  {
                let  i  =  0;
                this.list.forEach(item  =>  {
                    if (item.checked) {
                        i++
                    }
                })
                return i === this.list.length
            },
        },
        methods: {
            delShop: function (shoppingCartId) {
                // 删除商品的接口
                delShop(shoppingCartId).then(res => {
                    if (res) {
                        // 刷新购物车列表
                        goodsList().then(res => {
                            this.list = res.shoppingCartList
                        })
                    }

                })
            },
            handleCheckAllChange(val) {

                if (val) {
                    // 全选操作
                    this.list = this.list.map(item => ({...item, checked: true}))
                } else {
                    // 取消全选的操作
                    this.list = this.list.map(item => ({...item, checked: false}))
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .shoppingCart {
        padding: 20px;
        width: 1200px;
        margin: 0 auto;

        h3 {
            font-size: 16px;
            line-height: 18px;
            font-weight: 400;
            padding: 20px 0px;

            span {
                color: rgb(153, 153, 153);
                font-size: 12px;
            }
        }

        .shoppingCartNav {
            border: 1px solid #e8e8e8;
            height: 50px;
            line-height: 50px;
            background: #fafafa;

            ul {
                height: 100%;
                overflow: hidden;
                list-style: none;
                padding: 0;
                .FutureGenerations {
                    vertical-align: middle;
                    padding-left: 10px;
                    cursor: pointer;
                    width: 20%;
                    span {
                        padding: 0 8px;
                        vertical-align: middle;
                    }
                }

                li {
                    width: 20%;
                    float: left;
                    vertical-align: middle;

                    input {
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                    }
                }
            }
        }

        .goods {
            border: 1px solid #e8e8e8;
            margin: 20px 0;
            padding: 10px 0;

            ul {
                overflow: hidden;
                list-style: none;
                padding: 0;
                .choose {
                    padding-left: 10px;
                    width: 20%;
                    img {
                        width: 156px;
                        height: 100%;
                        vertical-align: middle;
                        margin-left: 10px;
                    }

                    span {
                        vertical-align: middle;
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background-color: #fff;
                        border: 1px solid #d9d9d9;
                        border-radius: 2px;
                    }

                }

                li {
                    float: left;
                    width: 20%;
                    vertical-align: middle;
                    line-height: 90px;

                    del {
                        color: rgb(153, 153, 153);
                    }

                    .discount {
                        color: #ff4f23;
                    }

                    .TimeiLmit {
                        cursor: pointer;
                        display: inline-block;
                        height: 20px;
                        padding: 0 7px;
                        background-color: rgb(255, 85, 0);
                        color: #fff;
                        font-size: 12px;

                    }

                    i {
                        color: red;

                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .el-tag {
                        height: 20px;
                        line-height: 19px;
                        background-color: rgb(255, 85, 0);
                        border: 0;
                        color: #fff;
                    }
                }
            }
        }

        .settlement {
            background-color: #eee;
            border: 1px solid #e4e4e4;
            border-right: 0;
            height: 60px;
            margin: 20px 0;

            .chooseAll {
                float: left;
                height: 60px;
                line-height: 60px;
                padding-left: 10px;
            }

            .combined {
                float: right;
                height: 60px;
                overflow: hidden;
                vertical-align: text-bottom;

                .price {
                    float: left;
                    padding: 0 10px;
                    line-height: 60px;
                    height: 60px;
                    vertical-align: text-bottom;

                    span {
                        color: red;
                    }
                }

                .active {
                    background-color: #ff8000;
                    float: right;
                    height: 60px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 60px;
                    width: 120px;
                    color: #fff;
                    margin-top: -1px;
                    vertical-align: text-bottom;

                }

                .submit {
                    background: #999;
                    float: right;
                    height: 60px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 60px;
                    width: 120px;
                    color: #fff;
                    margin-top: -1px;
                    vertical-align: middle;

                }
            }

        }
    }
</style>