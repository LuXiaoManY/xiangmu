<template>
  <div class="thnu_RaceLamp">
     <div class="RaceLamp">
           <div class="row">
                <marquee behavior="scroll">{{info}}</marquee>
           </div>
     </div>
  </div>
</template>
<script>
export default {
  data(){
     return{
         info:"9月29日由于网站男作者无聊整容停止维护,造成麻烦,望同学们理解和见谅哈!",
         intervalId:null,
     }  
  },
//   created(){
//       this.getLamp();
//   },
//   methods: {
//       getLamp(){
//           console.log("11111");
//           this.intervalId = setInterval(() => {
//           var start = this.info.substring(0, 1)
//           // 获取到 后面的所有字符
//           var end = this.info.substring(1)
//           // 重新拼接得到新的字符串，并赋值给 this.info
//         //   var getWidth = $("#row").width();
//         //   console.log(getWidth);
//           this.info = end + start ;
//         }, 400)

//       }
//   }, 
}
</script>
<style scoped>
.thnu_RaceLamp{
    width: 100%;
    height: 50px;
    position: relative;
    background: #fff;
}
.RaceLamp{
  position: absolute;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color:#fff;
  z-index:999;
  line-height: 50px;
  background: #000;
  opacity: .5;
}
.row{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  /* background-color: rebeccapurple; */
}
</style>



