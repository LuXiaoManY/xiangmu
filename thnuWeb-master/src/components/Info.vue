<template>
    <div class="thnu_Info container-fuild row">
        <h3>快递详情信息</h3>
        <div class="Info" v-for="(item,index) in explist" :key="index" v-if="item._id==Id">
            
            <p>取货号:{{item.order}}</p>
            <p>快递名:{{item.name}}</p>
            <p>电话:{{item.tel}}</p>
        </div>
        <div class="Infoss">
            亲爱的接单人，网站为保护快递完好送到客户手中，提示您切勿做出将快件拆开，损坏等违法行为
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Id:"",
            explist:[],
        }
    },
    created(){
        this.getLyId();
        this.getexprlist();
    },
    methods: {
        getLyId(){
            this.Id = this.$route.params.id;
        },
        getexprlist(){
            this.axios
                .get("/user/getExpList")
                .then(res => {
                    if(res.data.status == "success"){
                        this.explist = res.data.message;
                    }
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    },
}
</script>
<style scoped>
.thnu_Info{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    /* background-color: pink; */
   
} 
.Info{
    width: 40%;
    height: 30%;
    /* background-color: lawngreen; */
    float: left;
}   
.Infoss{
    width: 40%;
    height: 30%;
    /* background-color: palevioletred; */
    float: right;
    border:1px dashed rgb(51, 51, 51)
}
</style>

