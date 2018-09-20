<template>
    <div class="thnu_PartJob container-fuild row" :style="{minHeight: minHeight + 'px'}">
         <div class="col-xs-12">
             <marquee class="tip" width=100%, height=50>{{tips}}</marquee>
             <div class="partjob" v-for="(item,index) in pageArr" :key="index">
                 <span>{{item.userName}}</span>
                 <span>{{item.date}}</span>
                 <p>{{item.content}}</p>
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
                pageSizeMenu: [21,42,100]//default: [10, 20, 50, 100]
            },
            joblist:[],
            tips:"请同学们理性寻找兼职工作,防止诈骗等违法行为",
            minHeight:0,
            pageArr:[],
        }
    },
    created(){
        
    },
    methods:{
      
        pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getJobList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.joblist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.joblist.length) end = that.joblist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.joblist[i]);
                    }   
                 }
            });
        },
    },
    mounted () {
        this.minHeight = document.documentElement.clientHeight - 150;
        var that = this;
        window.onresize = function(){
            that.minHeight = document.documentElement.clientHeight - 150;
        }
    },
}
</script>
<style lang="scss" scoped>
    .tip{
        background-color: rgb(51,51,51);
        color:#fff;
        opacity: 0.6;
        font-size: 15px;
        line-height: 50px;
    }
   .partjob{
       display: inline-block;
       padding-left: 15px;
       margin: 20px 60px;
       width: 25%;
       height: 150px;
       border:1px dashed rgb(51,51,51);
   }
    .partjob img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    } 
div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
}
    @media(max-width: 768px){
        .partjob{
            display: inline-block;
            margin: 10px 10%;
            width: 80%;
        }
    }
</style>
