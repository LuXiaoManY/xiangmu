<template>
<div class="thnu_sowing">
    
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- 轮播图底部标签 -->
        <ol class="carousel-indicators">
            <li v-for="(img,index) in list" :key="index" data-target="#carousel-example-generic" :data-slide-to="index" :class="[ index == 0 ? 'active' : '']"></li>
        </ol>      
    <!-- 轮播图图片及其链接 -->
        <div class="carousel-inner" role="listbox">
            <div v-for="(img,index) in list" :key="img.id" class="item" :class="[index == 0 ? 'active' : '']">
                <div v-if="isMobile">
                    <a href="#" class="PC_img hidden-xs hidden-sm" ><img :src="img.PCurl" alt=""></a>
                </div>
                <div>
                    <a href="#" class="M_img hidden-lg hidden-md "><img :src="img.Murl" alt=""></a>
                </div>
            </div>
        </div> 
    <!-- 轮播图左右控制按钮 -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
           <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
           <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </a>
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                isMobile:"",
                list:[
                    {PCurl:'http://www.thnu.edu.cn/publish/upload/2018/8/1310523987.jpg',Murl:'http://www.thnu.edu.cn/publish/upload/2018/8/1310523987.jpg',id:0},
                    {PCurl:'http://www.thnu.edu.cn/publish/upload/2018/6/591012125.jpg',Murl:'http://www.thnu.edu.cn/publish/upload/2018/6/591012125.jpg',id:1},
                    {PCurl:'http://www.thnu.edu.cn/publish/upload/2018/6/48911884.jpg',Murl:'http://www.thnu.edu.cn/publish/upload/2018/6/48911884.jpg',id:2},
                ],
            };
        },
        created(){
            this.getWidth();
        },
        methods:{
            getWidth() {
                this.isMobile=$(window).width() > 768 ? true : false;
                // console.log(this.isMobile);
                console.log(this.list.PCurl);
            },   
        },
        mounted(){
            var startX,endX;
            // 在滑动的一定范围内，才切换图片
            var offset = 50;
            // 注册滑动事件
            $("#carousel-example-generic").on('touchstart',function (e) {
                // console.log("1111");
                // 手指触摸开始时记录一下手指所在的坐标x
                startX = e.originalEvent.touches[0].clientX;
            }).on('touchmove',function (e) {
                // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
                endX = e.originalEvent.touches[0].clientX;
            }).on('touchend',function (e) {
                // console.log(endX);
                //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
                //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
                var distance = Math.abs(startX - endX);
                if (distance > offset){
                    //说明有方向的变化
                    //根据获得的方向 判断是上一张还是下一张出现
                    $(this).carousel(startX >endX ? 'next':'prev');
                }
            })
        },
}     
</script>
<style scoped>
.thnu_sowing{
    padding-top: 25px;
}
.PC_img img{
    display:block;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.M_img{
    display:block;
    width: 100%;
}
.M_img img{
    display: block;
    width: 100%;
     background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
li{
    list-style: none;
}
.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none;
}
.carousel-indicators  li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000009;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    border-radius: 10px;
}
.carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    border-radius: 10px;
    background-color: #fff;
    box-sizing: border-box;
}
</style>
