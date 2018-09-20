<template>
    <div class="thnu_expressage container-fuild row" :style="{minHeight: minHeight + 'px'}">
        <div class="exprwssage" v-for="(item,index) in pageArr" :key="index">
            <div class="expre col-xs-12 col-sm-6 col-md-4 col-lg-4">
                 
                <b>{{item.userName}}</b>
                <p>时间:{{item.date}}</p>
                <span>价格:{{item.money}}</span>
                <span>类型:{{item.type}}</span>
                <p>取件地址:{{item.getLocation}}</p>
                <p>收件地址:{{item.putLocation}}</p>
                <span>预计送达:{{item.time}}</span>
                <button data-toggle="modal" :data-target="'#'+item._id" >我要抢单</button> 
                <div class="modal fade" :id="item._id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title" id="myModalLabel">快递接单(请完善相关信息)</h4>
                            </div>
                            <div class="modal-body">
                                <form >
                                    <div class="form-group">
                                        <label for="recipient-name" class="control-label">姓名:</label>
                                        <input type="text" class="form-control"  placeholder="姓名" >
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="control-label">电话:</label>
                                        <input type="text" class="form-control" placeholder="电话" >
                                    </div>
                                </form> 
                            </div>
                            <div class="modal-footer">
                                <router-link :to=" '/info/'+item._id" class="pull-right info" data-dismiss="modal">提交</router-link>
                            </div> 
                        </div>
                    </div>
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
                pageSizeMenu: [18,36,72,100]//default: [10, 20, 50, 100]
            },
            explist:[],
            minHeight:0,
            pageArr:[], 
        }
    },
    created(){
   
    },
    methods: {
       
        pageChange(pInfo){
            let that = this;
            console.log(pInfo);//{pageNumber: 1, pageSize: 10}
            this.axios
            .get("/user/getExpList")
            .then(function(resp){
                 if(resp.data.status=="success"){
                    that.explist = resp.data.message;
                    that.pageSet.totalRow = resp.data.message.length;
                    // console.log(that.explist);
                    that.pageArr.splice(0,that.pageArr.length);
                    let start = 0,end = 0;
                    start = pInfo.pageSize * (pInfo.pageNumber - 1);
                    end = start + pInfo.pageSize;
                    if (end > that.explist.length) end = that.explist.length;
                    for (let i = start; i < end; i++) {
                        that.pageArr.push(that.explist[i]);
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
<style>
.thnu_expressage{
    width: 80%;
    margin: 0 auto;
    /* background-color: pink; */
}
 .expre{
    float: left;
    text-align: left;
    /* border:1px solid rgb(51,51,51); */
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 20px;
    /* border-right: 1px dashed #000; */
     
 }  
 button{
     display: block;
     margin: 0 auto;
     
 } 
.thnu_expressage div.vPagination.vPaginationRight[data-v-5ffd519b] {
    text-align: center;
}
</style>
