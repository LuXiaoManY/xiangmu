<template>
    <div class="thnu_Sport container-fuild row" :style="{minHeight: minHeight + 'px'}">
        <div class="sport_page" >
            <div class="sport col-xs-12 col-sm-12 col-md-4 col-lg-4" v-for="item in pageArr" :key="item.title"   >
                <p>{{item.userName}} {{item.date}}</p>
                <h3>{{item.title}}</h3>
                <span>{{item.content}}</span>
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
                pageSizeMenu: [6,12,18,50,100]//default: [10, 20, 50, 100]
            },
           sportlist:[],
            pageArr:[],
       }
   },
   created(){
        this.getminHeight();
   },
   methods:{
        pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getSportList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.sportlist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    // console.log(that.sportlist);
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.sportlist.length) end = that.sportlist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.sportlist[i]);
                    }   
                 }
            });
        },
        getminHeight(){
            this.minHeight = document.documentElement.clientHeight - 150;
                var that = this;
                window.onresize = function(){
                    that.minHeight = document.documentElement.clientHeight - 150;
                }
        }
   },
    mounted () {
        
    },
}
</script>
<style lang="less" scoped>
.thnu_Sport{
    width: 100%;
    // float: left;
}
.sport{
    border: 1px solid rgb(51,51,51);
    height: 300px;
    text-align: center;
}

.sport_page{
    height: 700px;
    width: 100%;
    float: bottom;
    
    // background-color: rebeccapurple;
}
.thnu_Sport div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
}

</style>
