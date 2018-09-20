<template>
    <div class="thnu_Lose container-fuild row">
        <div class="Loses">
            <div v-for="(num,index) in pageArr"  class="brick col-xs-12 col-sm-12 col-md-5 col-lg-5" :key="index">
                <div v-if="num">
                    <p class="Losehead">
                        <b>{{num.userName}}</b>
                        <span>{{num.date}}</span>
                    </p>
                     <v-gallery :images="num.photo" class="image-box">
                        <div class="img-content" v-html="num.content"></div> 
                        <!-- <h3 class="img-title" v-html="num.content"></h3> -->
                        <a href="#" :data-image="img" :title="num.content" v-for="(img,index) in num.photo" :key="index">
                            <div class="bgbox">
                                <img :src="img">
                            </div>
                        </a>  
                    </v-gallery> 
                </div> 
           </div>
        </div>
        <v-page :setting="pageSet" @page-change="pageChange"></v-page>
    </div>
</template>
<script>
export default {
    data(){
        return{
             pageSet: {
                info:true,
                totalRow:0,//需要选项
                language: 'cn',//default: 'cn'
                pageSizeMenu: [5,10,15,50,100]//default: [10, 20, 50, 100]
            },
            loselist:[],
            pageArr:[],
        }
    },
    methods: {
        pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getLoseList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.loselist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    // console.log(that.loselist);
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.loselist.length) end = that.loselist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.loselist[i]);
                    
                    }
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/font.css";
li{
    list-style: none;
}
.thnu_Lose{
    width: 80%;
    // background-color: palegreen;
    margin: 0 auto;
}
.brick{
    float: left;
    width: 100%;
    // background-color: pink;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 30px;
    // background-color: pink;
} 
.image-box{
     .img-content {
            color:rgb(51, 51, 51);
            padding-top: 10px;
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
div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
}
</style>