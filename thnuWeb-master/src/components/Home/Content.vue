<template>
 <!-- 内含寻物，通师看点，公告，兼职，闲置 -->
  <div class="thnu_Content row container-fluid">
       <!-- 告白 -->
        <div class="thnu_Love col-xs-12 col-sm-12 col-md-4 col-lg-4">
           <h3 class="thnu_Love title">告白墙</h3>
           <h3></h3>
           <div class="Love_content row">
                <router-link :to="{path:'/love'}" class="col-xs-6 col-md-12 col-lg-12">
                    <img :src="loveimg" alt="">
                    <span> 大蠢猪,我太喜欢你了</span>
                </router-link>
                <div class="Love_love col-xs-6 col-md-12 col-lg-12">
                    <li v-for="(item,index) in loveword" :key="index">
                         <p><span id="loves" class="glyphicon glyphicon-heart"></span>{{item.content}}</p>
                    </li>
                </div>
                
           </div>
        </div> 
       <!-- 趣事 链接      -->
        <div class="thnu_More col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <h3 class="thnu_More title">通师趣事</h3>
            <div class="More_content row">
                <li v-for="(item,index) in news" :key="index">
                    <router-link :to="{path:'/news'}" class="col-xs-4 col-md-4 col-lg-4" href="#">
                        <img :src="item.newsimg" alt="">
                    </router-link>
                    <router-link :to="{path:'/news'}" class="col-xs-8 col-md-8 col-lg-8" href="">
                        <h3 class="More_newstitle">{{item.newstitle}}</h3>
                    </router-link>
                    <span class="More_newscontent">{{item.newscontent}}</span>
                </li>
            </div>
            <h3 class="thnu_More title">友情链接</h3>
            <div class="thnu_friends row">
                <a data-toggle="modal" data-target="#transitModal" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >校园公交车</a>
                <a data-toggle="modal" data-target="#clinic" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >校园医务室</a>
                <a data-toggle="modal" data-target="#townsmen" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >校园同乡聚</a>
                <a data-toggle="modal" data-target="#townsmen" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >校园水滴筹</a>
                <a href="http://www.thnu.edu.cn/publish/upload/2014/3/18153019219.jpg" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >校园地图网</a>
                <a data-toggle="modal" data-target="#exam" class="col-xs-6 col-sm-6 col-md-6 col-lg-4" >考试报名</a>
                <!-- 公交车 -->
                <div class="modal fade" id="transitModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">29路公交车</h4>
                          </div>
                          <div class="modal-body" v-for="item in transitlist" :key="item.imgs">
                            <img class="transimg" :src="item.img1" alt="">
                            <img class="transimg" :src="item.img2" alt="">
                          </div> 
                      </div>
                    </div>
                </div>
                <!-- 医务室 -->
                <div class="modal fade" id="clinic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">校园医务室</h4>
                          </div>
                          <div class="modal-body" >
                              <p>工作时间:周一至周五</p>
                              <p>如有特殊情况请拨打120</p>
                              <span>地址:通化师范学院第九教学楼右侧</span>
                          </div> 
                      </div>
                    </div>
                </div>
                <!-- 同乡聚 -->
                <div class="modal fade" id="clinic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">校园同乡聚</h4>
                          </div>
                          <div class="modal-body" >
                              等待完善
                          </div> 
                      </div>
                    </div>
                </div>
                <!-- 水滴筹 -->
                <div class="modal fade" id="townsmen" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">校园水滴筹</h4>
                          </div>
                          <div class="modal-body" >
                              等待完善
                          </div> 
                      </div>
                    </div>
                </div>
                <!-- 考试报名 -->
                <div class="modal fade" id="exam" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 class="modal-title" id="myModalLabel">校园水滴筹</h4>
                          </div>
                          <div class="modal-body" v-for="item in examlist" :key="item.name">
                              <a :href="item.herf">{{item.name}}</a>
                          </div> 
                      </div>
                    </div>
                </div>

            </div>
        </div> 
       <!-- 公告 寻物      -->
        <div class="thnu_Many col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <h3 class="thnu_Many title">系统公告
              <span id="notice" class="glyphicon glyphicon-volume-up"></span> 
              <!-- <span class="glyphicon glyphicon-volume-down"></span>              -->
            </h3>
            
            <li v-for="(item,index) in notices" :key="index" v-if="index<2">
              <p class="Many_Notice">{{item.date}}{{item.content}}</p>
            </li>
            
            <h3 class="thnu_Many title">寻物启事</h3>
            <div class="Many_Look row">
              <div class="col-lg-12">
                  <li v-for="(item,index) in searchList" :key="index" v-if="index<9">
                    <span>{{item.date}}</span>
                    <router-link :to="{path:'/lose'}">{{item.content}}</router-link>
                  </li>
              </div>

            </div>
        </div>      
  </div>   
</template>
<script>

export default {
  
  data() {
    return {
      searchList: [],
      loveword: [
        { content: "你的烦恼我来承担，我的快乐你来分享" },
        { content: "在你的心里,看到我自己，最开心的时候和你在一起" },
        { content: "有你相伴的日子，即使平凡也浪漫！" }
      ],
      news: [
        {
          newsimg:
            "https://img10.ccnxs.cn/uploadfile/hbase/201808/0803/HBC5B640F8768FBB.jpeg",
          newstitle: "中国最大的镇，面积超越台湾省，相当于25个深圳",
          newscontent:
            "我们从小就学习各种知识，去了解这个世界，了解我们的国家，几乎人人都知道我们是世界上面积位列第三的国家。中华民族上下五千年，历史悠久，领土广阔。有56个民族分布在23个省、5个自治区、4个直辖市、2个特别行政区，共计661个城市。每一个省每一个市每一个镇人口数量不一、面积各异。其实我们大部分人基本对全国省、市多少都会有些了解，但对于一些小镇就不太了解了。比如说我国最大的镇是哪个地方的？这是属于很精细的知识点了，今天我们一起来学习一下！"
        }
      ],
      notices:[],
      info:
        "9月29日由于网站男作者无聊整容停止维护,造成麻烦,望同学们理解和见谅哈!",
      loveimg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536758431389&di=2d3188e702f19e9d64277641b2ab57da&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201506%2F13%2F20150613230428_Y4MxS.thumb.700_0.jpeg",
      
      transitlist:[
         {img1:"../../../static/images/29路1.png"},
         {img2:"../../../static/images/29路2.png"},
      ],
      examlist:[
         {name:"四六级",herf:"http://cet.neea.edu.cn/",},
         {name:"计算机等级考试",herf:"http://www.ncre.cn/",},
         {name:"教师资格证",herf:"http://ntce.neea.edu.cn/",},
      ],
    };
  },
  created() {
    this.getdyd();
    this.getMultiple();
  },
  methods: {
    getdyd(){
       setInterval(function(){
          $("#notice").toggleClass("glyphicon-volume-up")
          $("#notice").toggleClass("glyphicon-volume-down")
  
       },1000)
    },
    getMultiple(){
      this.axios
          .get("/index/getNotice")
          .then(res =>{
            if(res.data.status == "success"){
              this.notices = res.data.message;
            }
          })
          .catch(err =>{
            console.log(err);
          })

    this.axios
        .get("/user/getLoseList")
        .then(res =>{
          if(res.data.status == "success"){
            this.searchList = res.data.message;
          }
        })
        .catch(err =>{
          console.log(err);
        })
    },
      
    
  }
};
</script>


<style scoped>
@import "../../assets/css/cont.css";
@import "../../assets/css/font.css";
</style>
