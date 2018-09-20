<template>
    <div class="thnu_footer container-fluid">
        <div class="about-me">
            <a href="#">关于我们</a>
            <a href="#" class="border">联系我们</a>
            <a href="#">意见反馈</a>
        </div>
        <p>Thanks to all the developers who have contributed to the front end</p>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
           
        };
    }
};
</script>
<style lang="less" scoped>
.thnu_footer{
    margin-top: 30px;
    border-top: 1px solid #eee;
    background-color: #e7e7e7;
    text-align: center;
}
.about-me{
    padding: 10px 0;
}
.border{
    padding: 0 5px;
    border-left: 1px solid #919191;
    border-right: 1px solid  #919191;
}
</style>


