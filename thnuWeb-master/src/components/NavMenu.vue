<template>
    <div class="thnu_NavMenv container-fuild">
        <nav class="navbar thnu_NavMenv">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">thnu社区</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                   
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">校园服务<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><router-link :to="{path:'/expressage'}">代取快递</router-link></li>
                        <li><router-link :to="{path:'/partjob'}">兼职服务</router-link></li>
                        <li><router-link :to="{path:'/sport'}">校园活动</router-link></li>
                        <li><router-link :to="{path:'/goods'}">闲置物品</router-link></li>
                    </ul>
                    </li>
                     <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">校园生活<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><router-link :to="{path:'/lose'}">寻物启事</router-link></li>
                        <li><router-link :to="{path:'/news'}">校园趣事</router-link></li>
                        <li><router-link :to="{path:'/live'}">校园告白</router-link></li>
                        <li><a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E9%80%9A%E5%8C%96%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2&fr=search&red_tag=i2796961685">通师贴吧</a></li>
                    </ul>
                    </li>
                    <li><a class="login" data-toggle="modal" data-target="#loginModal">登录</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title text-primary" id="exampleModalLabel">登录</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="control-label">邮箱:</label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="邮箱" v-model="formData.email">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="control-label">密码:</label>
                                <input type="password" class="form-control" id="message-text" placeholder="填写密码" v-model="formData.password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <router-link :to="{path:'/register'}" data-dismiss="modal" class="pull-left">还没账号？去注册></router-link>
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  data() {
    return {
      formData: {}
    };
  },
  mounted() {
    $("#loginModal").on("shown.bs.modal", function() {
      $("#recipient-name").focus();
    });
  },
  methods: {
    login: function() {
      if (this.formData.password && this.formData.email) {
        const body = {
          email: this.formData.email,
          password: this.crypto(this.formData.password)
        };
        this.$loading("登录中...");
        this.axios.post("user/login", body).then(res => {
          if (res.data.status == "success") {
            this.$loading.close();
            this.$toast.center(res.data.message);
            window.location = "/";
          } else {
            this.$loading.close();
            this.$toast.center(res.data.message);
          }
        });
      } else {
        this.$toast.center("请填写邮箱或密码");
      }
    }
  }
};
</script>
<style lang="less" scoped>
h4 {
  text-align: center;
}
.modal-footer a {
  padding-top: 5px;
}
.login {
  cursor: pointer;
}
.thnu_NavMenv {
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  position: fixed;
  z-index: 999999;
  background: #fff;
  width: 100%;
  border-radius: 0;
  top: 0;
}

.thnu_NavMenv .navbar-brand {
  color: #777;
  //   height: 80px;
  line-height: 35px;
}
.thnu_NavMenv .navbar-brand:hover,
.thnu_NavMenv .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.thnu_NavMenv .navbar-text {
  color: #777;
}
.thnu_NavMenv .navbar-nav > li > a {
  color: #777;
  height: 60px;
  line-height: 35px;
}
.thnu_NavMenv .navbar-nav > li > a:hover,
.thnu_NavMenv .navbar-nav > li > a:focus {
  color: #777;
  background-color: transparent;
}
.thnu_NavMenv .navbar-nav > .active > a,
.thnu_NavMenv .navbar-nav > .active > a:hover,
.thnu_NavMenv .navbar-nav > .active > a:focus {
  color: #555;
}
.thnu_NavMenv .navbar-nav > .disabled > a,
.thnu_NavMenv .navbar-nav > .disabled > a:hover,
.thnu_NavMenv .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.thnu_NavMenv .navbar-toggle {
  border-color: #ddd;
  margin-top: 23px;
}
.thnu_NavMenv .navbar-toggle:hover,
.thnu_NavMenv .navbar-toggle:focus {
  background-color: #ddd;
}
.thnu_NavMenv .navbar-toggle .icon-bar {
  background-color: #888;
}
.thnu_NavMenv .navbar-collapse,
.thnu_NavMenv .navbar-form {
  border-color: #e7e7e7;
}
.thnu_NavMenv .navbar-nav > .open > a,
.thnu_NavMenv .navbar-nav > .open > a:hover,
.thnu_NavMenv .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (min-width: 992px) {
  .thnu_NavMenv .navbar-nav > .active > a,
  .thnu_NavMenv .navbar-nav > .active > a:hover,
  .thnu_NavMenv .navbar-nav > .active > a:focus {
    color: #555;
    border-bottom: 3px solid #e92322;
  }
  .thnu_NavMenv .navbar-nav > li > a:hover,
  .thnu_NavMenv .navbar-nav > li > a:focus {
    color: #777;
    background-color: transparent;
    border-bottom: 3px solid #e92322;
  }
}
@media (max-width: 767px) {
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > li > a:hover,
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .active > a,
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .active > a:hover,
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .disabled > a,
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .thnu_NavMenv .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.thnu_NavMenv .navbar-link {
  color: #777;
}
.thnu_NavMenv .navbar-link:hover {
  color: #333;
}
.thnu_NavMenv .btn-link {
  color: #777;
}
.thnu_NavMenv .btn-link:hover,
.thnu_NavMenv .btn-link:focus {
  color: #333;
}
.thnu_NavMenv .btn-link[disabled]:hover,
fieldset[disabled] .thnu_NavMenv .btn-link:hover,
.thnu_NavMenv .btn-link[disabled]:focus,
fieldset[disabled] .thnu_NavMenv .btn-link:focus {
  color: #ccc;
}
</style>

