<template>
    <div class="thnu_bottom row container-fluid">
        <!-- 兼职入口 -->
        <div class="thnu_job col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h3>找兼职？点这里
                <span class="glyphicon glyphicon-hand-down"></span>
            </h3>
            <div>
                <section class="thnu_job_link">
                    <router-link :to="{path:'/partjob'}" class=""><img :src="this.images[0].url" alt="" class="img-rounded">
                    </router-link>
                </section>
            </div>
        </div>
        <!-- 二手入口 -->
        <div class="thnu_goods col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h3>闲置？点这里
                <span class="glyphicon glyphicon-hand-down"></span>
            </h3>
            <section class="thnu_goods_link ">
                <router-link :to="{path:'/goods'}" class=""><img :src="this.images[1].url" alt="" class="img-thumbnail">
                   
                </router-link>
            </section>
        </div>
        <!-- 活动入口 -->
        <div class="thnu_club col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h3>校园活动
                <span class="glyphicon glyphicon-glass"></span>
            </h3>
            <section class="thnu_club_link">
                <router-link :to="{path:'/sport'}" class=""><img :src="this.images[2].url" alt="" class="img-thumbnail">
                </router-link>
            </section>
        </div>
        <!-- 风景入口 -->
        <div class="thnu_scenery col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h3>校园快递
                <span class="glyphicon glyphicon-camera"></span>
            </h3>
            <section class="thnu_scenery_link">
                <router-link :to="{path:'/expressage'}">
                    <img :src="this.images[3].url" alt="" class="img-rounded" />
                    
                </router-link>
            </section>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        images:[
            {url: "/static/images/jianzhi.jpg"},
            {url: "/static/images/ershou.jpg"},
            {url: "/static/images/huodong.jpg"},
            {url: "/static/images/fj.jpg"}
        ]
    };
  }
};
</script>
<style  lang="less" scoped>
//div公共样式

//h4公共样式
.thnu_scenery h3,
.thnu_job h3,
.thnu_goods h3,
.thnu_club h3 {
  border-bottom: 1px solid #ccc;
  padding-left: 25px;
}
//a公共样式
.thnu_scenery .thnu_scenery_link a,
.thnu_job .thnu_job_link a,
.thnu_goods .thnu_goods_link a,
.thnu_club .thnu_club_link a {
  text-decoration: none;
}

//图片公共样式
.thnu_scenery .thnu_scenery_link a > img,
.thnu_job .thnu_job_link a > img,
.thnu_goods .thnu_goods_link a > img,
.thnu_club .thnu_club_link a > img {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 200px;
}

//鼠标经过公共样式
.thnu_scenery a:hover > img,
.thnu_job a:hover > img,
.thnu_goods a:hover > img,
.thnu_club a:hover > img {
  box-shadow: 3px 3px 1px;
  text-decoration: none;
}


</style>

