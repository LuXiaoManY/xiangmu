<template>
    <div class="thnu_News" container-fuild row>
        <div class="Newsing col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div v-for="(num,index) in pageArr"  class="brick" :key="index">
                <p class="Newshead">
                    <!-- <img :src="num.headurl" alt=""> -->
                    <span>{{num.userName}}</span>
                    <span>{{num.date}}</span>
                </p>
                    <v-gallery :images="num.photo" class="image-box">
                    <h3 class="img-title" v-html="num.title"></h3>
                    <a href="#" :data-image="img" :title="num.content" v-for="(img,index) in num.photo" :key="index">
                        <div class="bgbox">
                            <img :src="img">
                        </div>
                    </a>
                    <div class="img-content" v-html="num.content"></div> 
                </v-gallery> 
            </div>
        </div> 
        <v-page :setting="pageSet" @page-change="pageChange"></v-page>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isMobile:"",
            pageSet: {
                info:true,
                totalRow:0,//需要选项
                language: 'cn',//default: 'cn'
                pageSizeMenu: [5,10,15,50,100]//default: [10, 20, 50, 100]
            },
            newslist:[],
            pageArr:[],        
      
        }
        
    },
    created(){
        this.getWidth();  
    },
    methods:{
        getWidth() {
               this.isMobile=$(window).width() < 768 ? true : false;
               if(this.isMobile){
                   this.pageSet.info=false;
                   this.pageSet.pageSizeMenu=false;
               } 
            },
        //接收页面信息更改回调
        pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getFunList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.newslist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    // console.log(that.newslist);
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.newslist.length) end = that.newslist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.newslist[i]);
                    }   
                 }
            });
        }, 

    }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/font.css";
li{
    list-style: none;
}
.Newsing{
    width: 100%;
    margin: 0 auto;
    // background-color: darkcyan;
}
.Newshead{
    display: inline-block;
    border-bottom: 1px solid rgb(51, 51, 51);
    margin: 0px 0px 10px;
}
.Newshead img{
    padding-left: 0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.Newshead span{
    color:rgb(51, 51, 51);
}
.image-box{
     .img-content {
            width: 80%;
            height:70px;
            overflow: hidden;
            bottom: 5px;
            display: block;
            // text-align: left;
            color:rgb(51, 51, 51);
            padding-top: 5px;
       }
    a {
        clear: both;
        display: inline-block;
        margin: 0 20px 20px 0;
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
        
        &:hover {
            .img-content { color: #232323; }
        }
    }
}
.brick{
    width: 100%;
    // height: 500px;
    padding-top: 10px;
    padding-bottom: 30px;

}

div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
}

@media(max-width: 768px){
    .brick{
        width: 100%;
        height: 350px;
        padding-top: 10px;
        padding-bottom: 30px;

    }
  
    .lovesfree li{
        padding-top: 20px;
    }
     .image-box{
      a {
        clear: both;
        display: inline-block;
        margin: 0 20px 20px 0;
        position: relative;
        // text-align: center;
        
        .bgbox {
            background-color: #fff;
            height: 80px;
            display:table-cell;
            vertical-align:middle;
            padding: 4px;
            border-radius: 2px;
            img{ width: 70px; height: 70px;display: block;}
        }
      }
     }
   
}    
</style>
