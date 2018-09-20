<template>
    <div class="thnu_Loves container-fuild row">
         <!-- 表白广告位 -->
        <div class="Loves_Broadcast col-lg-12">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- 轮播图底部标签 -->
                <ol class="carousel-indicators">
                    <li v-for="(item,index) in  loveslist" :key="index" data-target="#carousel-example-generic" :data-slide-to="index" :class="[ index == 0 ? 'active' : '']"></li>
                </ol>      
            <!-- 轮播图图片及其链接 -->
                <div class="carousel-inner" role="listbox">
                    <div v-for="(item,index) in  loveslist" :key="index" class="item" :class="[index == 0 ? 'active' : '']">
                        <a href="#" class="PC_img" ><img :src="item.url" alt=""></a>
                        <span class="Loves_date">{{item.date}}</span>
                        <div class="Loves_content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 遍历告白内容 -->
        <div class="Loves_subs container-fuild row">
            <div class="lovesfree col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 <li v-for="(item,index) in pageArr" :key="index">
                    <p class="freeshead">
                        <img :src="item.headurl" alt="">
                        <span>{{item.userName}}</span>
                        <span>{{item.date}}</span>
                    </p>
                    <v-gallery :images="item.photo" class="image-box">
                        <a href="#" :data-image="img" :title="item.content" v-for="(img,index) in item.photo" :key="index">
                            <div class="bgbox">
                                <img :src="img">
                            </div>
                        </a>
                         <div class="img-title" v-html="item.content"></div>
                    </v-gallery>
                </li>
            </div>
            <v-page :setting="pageSet" @page-change="pageChange"></v-page>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: "",
      pageSet: {
        info: true,
        totalRow: 0, //需要选项
        language: "cn", //default: 'cn'
        pageSizeMenu: [5, 10, 15, 50, 100] //default: [10, 20, 50, 100]
      },
      loveslist: [
        {
          content:
            "The most special feeling of human is the one-sided love. That's the unique. You would never see a cat loving another cat in secret. 人类的感情最特别的就是单恋，那是绝无仅有的。你绝不会看到一只猫，会偷偷地喜欢上另一只猫。",
          url: require("../assets/img/loves01.jpg"),
          date: "11-11"
        },
        {
          content:
            "你知道心痛是什么感觉吗？曾经想要告诉你，但懦弱的我选择了退缩。因为我怕告诉你以后，我们连朋友也做不成。所以，这份感情，我只能放在心里。朋友们都说我傻，但是为了你，我可以一直傻下去…即使我们不可能在一起…我能够用一秒的时间爱上你，但我未必能够用一生的时间来忘记你…",
          url: require("../assets/img/loves02.jpg"),
          date: "11-12"
        },
        {
          content:
            "Relationships don’t need promises, terms &conditions. It just needs TWO people: who can trust& who can understand.感情不需要诺言，协议与条件。它只需要两个人：一个能够信任的人，与一个愿意理解的人",
          url: require("../assets/img/loves03.jpg"),
          date: "11-13"
        }
      ],
      list: [],
      pageArr: []
    };
  },
  created() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      this.isMobile = $(window).width() > 768 ? true : false;
    },
    pageChange(pInfo) {
      let that = this;
      console.log(pInfo); //{pageNumber: 1, pageSize: 10}
      this.axios.get("/user/getLoveList").then(function(resp) {
        if (resp.data.status == "success") {
          that.list = resp.data.message;
          that.pageSet.totalRow = resp.data.message.length;
          // console.log(that.list);
          that.pageArr.splice(0, that.pageArr.length);
          let start = 0,
            end = 0;
          start = pInfo.pageSize * (pInfo.pageNumber - 1);
          end = start + pInfo.pageSize;
          if (end > that.list.length) end = that.list.length;
          for (let i = start; i < end; i++) {
            that.pageArr.push(that.list[i]);
          }
        }
      });
    }
  },
  mounted() {
    var startX, endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 50;
    // 注册滑动事件
    $("#carousel-example-generic")
      .on("touchstart", function(e) {
        // console.log("1111");
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;
      })
      .on("touchmove", function(e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
      })
      .on("touchend", function(e) {
        // console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
          //说明有方向的变化
          //根据获得的方向 判断是上一张还是下一张出现
          $(this).carousel(startX > endX ? "next" : "prev");
        }
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/content.css";
.thnu_Loves {
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  /* background-color: pink; */
}
.Loves_Broadcast {
  padding-bottom: 25px;
}
.PC_img {
  display: block;
  width: 100%;
  /* background-color: pink; */
}
.PC_img img {
  display: block;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
li {
  list-style: none;
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 10%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
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
.Loves_content {
  width: 70%;
  height: 20%;
  position: absolute;
  left: 20%;
  bottom: 0%;
  background-color: #fff;
  border-radius: 10px;
  opacity: 0.6;
  z-index: 99999;
}
.Loves_date {
  position: absolute;
  right: 5%;
  bottom: 0%;
}
@media (max-width: 768px) {
  .PC_img {
    display: block;
    width: 100%;
    height: 200px;
    background-color: #ccc;
    opacity: 0.8;
  }
  .Loves_content {
    width: 70%;
    height: 50%;
    background-color: #fff;
    opacity: 0.5;
  }
}
.Loves_subs {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.freeshead {
  display: inline-block;
  border-bottom: 1px solid rgb(51, 51, 51);
  margin: 0px 0px 10px;
}
.freeshead img {
  padding-left: 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.freeshead span {
  color: rgb(51, 51, 51);
}
.image-box {
  .img-title {
    height: 60px;
    overflow: hidden;
    bottom: 5px;
    display: block;
    text-align: center;
    color: rgb(51, 51, 51);
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
      display: table-cell;
      vertical-align: middle;
      padding: 4px;
      border-radius: 2px;
      img {
        width: 200px;
        height: 200px;
        display: block;
      }
    }

    &:hover {
      .img-title {
        color: #232323;
      }
    }
  }
}
.Loves_subs div.vPagination.vPaginationRight[data-v-5ffd519b] {
  text-align: center;
}
@media (max-width: 768px) {
  .lovesfree li {
    padding-top: 20px;
  }
  .image-box {
    a {
      clear: both;
      display: inline-block;
      margin: 0 20px 20px 0;
      position: relative;
      text-align: center;

      .bgbox {
        background-color: #fff;
        height: 80px;
        display: table-cell;
        vertical-align: middle;
        padding: 4px;
        border-radius: 2px;
        img {
          width: 70px;
          height: 70px;
          display: block;
        }
      }
    }
  }
}
</style>
