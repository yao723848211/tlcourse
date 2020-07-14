<template>
    <div>
        <footer>
            <div class="container">
                <h2>友情链接</h2>
                <div class="link">
                    <a href="#" target="blank" v-for="(item,index) in list" :key="index">{{item.dictLabel}}</a>
                </div>
                <hr />
                <p class="text-center">Copyright © 2017-2025 石家庄天亮教育科技有限公司 备案号:冀ICP备17020003号</p>
            </div>
        </footer>
    </div>
</template>

<script>
    import {getFooterList} from "../api/apitlcourse";

    export default {
        name: "Footer",
        data(){
            return {
                list:[]
            }
        },
        created() {
            getFooterList("blogroll",1,10,"dictSort","asc").then(res=>{
                // console.log(res.list)
                this.list=res.list
            })
        }
    }
</script>

<style scoped lang="less">
  footer{
      background-color: #444546;
      color: #999;
      font-size: 14px;
      padding: 20px 0;
      .container{
          width: 1200px;
          margin: 0 auto;
          h2 {
              font-size: 22px;
              font-weight: 400;
              margin: 16px 0;
          }
          a {
              color: #999;
              margin-right: 30px;
              text-decoration: none;
          }
          a:hover {
              color: #1da57a;
          }
          .link {
              min-height: 40px;
          }
          hr {
              width: 1000px;
              margin: 25px auto;
              border: 1px solid rgb(84, 84, 84);
          }
      }
  }


</style>