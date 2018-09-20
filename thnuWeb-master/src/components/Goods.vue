
<template>
<!-- 闲置页面 -->
      <div class="thnu_Goods">
        <div class="Goods col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div v-for="(num,index) in pageArr"  class="brick" :key="index">
                <p class="Newshead">
                    <!-- <img :src="num.headurl" alt=""> -->
                    <span>{{num.userName}}</span>
                    <span>{{num.date}}</span>
                </p>
                    <v-gallery :images="num.photo" class="image-box">
                    <h3 class="img-title" v-html="num.title"></h3>
                    <a  :data-image="img" :title="num.content"  v-for="(img,index) in num.photo" :key="index">
                        <div class="bgbox">
                            <img :src="img">
                        </div>
                    </a>
                    <div class="img-content" v-html="num.content"></div> 
                    <div class="img-content" v-html="num.tel"></div> 
                </v-gallery> 
            </div>
        </div> 
        <v-page :setting="pageSet" @page-change="pageChange"></v-page>
    </div>
</template>
<script >
    export default {
        data(){
            return {
                pageSet: {
                    info:true,
                    totalRow:0,//需要选项
                    language: 'cn',//default: 'cn'
                    pageSizeMenu: [5,10,15,20,50,100]//default: [10, 20, 50, 100]
                },
                goodslist: [],
                pageArr:[],
            }
        },
        methods:{
            pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getGoodsList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.goodslist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    // console.log(that.goodslist);
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.goodslist.length) end = that.goodslist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.goodslist[i]);
                    }   
                 }
            });
        },
        },
    };
</script>
<style lang="scss" scoped>
.thnu_Goods{
    border-bottom: 1px solid #000;
    background-color: lawngreen;
}
.image-box{
    a {
        clear: both;
        display: inline-block;
        margin: 0 10px 10px 0;
        position: relative;
        text-align: center;
        .bgbox {
            background-color: #fff;
            height: 150px;
            display:table-cell;
            vertical-align:middle;
            padding: 4px;
            border-radius: 2px;
            img{ width: 200px; height: 200px;display: block;}
        }
        .img-title {
            background-color: yellow;
            width: 209px;
            height: 30px;
            overflow: hidden;
            bottom: 5px;
            display: block;
            text-align: center;
            color: #999999;
            padding-top: 5px;
        }
        &:hover {
            .img-title { color: #232323; }
        }
    }
}
.thnu_Goods div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
} 
@media(max-width: 768px){
     .thnu_Goods{
         padding-left:80px;
     }
}
</style>
