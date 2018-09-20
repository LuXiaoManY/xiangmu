import Vue from "vue";
import Router from "vue-router";
import Navigation from "@/components/Navigation.vue";
import Love from "@/components/Love.vue";
import News from "@/components/News.vue";
import Lose from "@/components/Lose.vue";
import PartJob from "@/components/PartJob.vue";
import Sport from "@/components/Sport.vue";
import Goods from "@/components/Goods.vue"
import Expressage from "@/components/Expressage.vue"
import Info from "@/components/Info.vue"
import Register from "@/components/Register.vue"

Vue.use(Router);
export default new Router({
  routes: [{
      path: "/",
      name: "Navigation",
      component: Navigation
    },
    {
      //注册页
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      //告白页
      path: "/love",
      name: "Love",
      component: Love
    },
    { //趣事页
      path: '/news',
      name: 'News',
      component: News
    },
    { //寻物页
      path: '/lose',
      name: 'Lose',
      component: Lose
    },
    { //兼职页
      path: '/partjob',
      name: 'PartJob',
      component: PartJob
    },
    { //活动页
      path: '/sport',
      name: 'Sport',
      component: Sport
    },
    { //闲置页
      path: '/goods',
      name: 'Sport',
      component: Sport
    },
    { //快递页
      path: '/expressage',
      name: 'Expressage',
      component: Expressage
    },
    { //快递信息页
      path: '/info/:id',
      name: 'Info',
      component: Info
    },
  ]
});
