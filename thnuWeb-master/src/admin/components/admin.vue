<template>
    <div class="admin">
        <!-- 顶部 -->
        <nav class="navbar navbar-inverse ">
            <div class="container-fluid">
                <!-- 主页 -->
                <span class="navbar-brand" style="color: #fff" href="#">后台管理系统</span>
                <!-- 个人信息框 -->
                <div class="right_bar">
                    <div class="dropdown .dropdown-menu-right">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                            admin
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li role="presentation">
                                <a role="menuitem" tabindex="-1" href="#">修改信息</a>
                            </li>
                            <li class="divider"></li>
                            <li role="presentation">
                                <a role="menuitem" tabindex="-1" href="#">退出登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
        <!-- 下面部分 -->
        <div class="container-fluid">
            <div class="row">
                <!-- 左侧导航栏 -->
                <aside class="admin_aside col-sm-3 col-md-2 sidebar">
                    <ul class="aside_active nav nav-sidebar">
                        <li >
                            <a href="#">用户管理</a>
                        </li>
                        <li>
                            <a href="#">公告管理</a>
                        </li>
                        <li>
                            <a href="#">Analytics</a>
                        </li>
                        <li>
                            <a href="#">Export</a>
                        </li>
                    </ul>
                </aside>
                <!-- 右侧内容区域 -->
                <section class="admin_content col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@charset "UTF-8";
// 顶部栏
.admin {
    .admin_center {
        float: right;
        left: 10px;
        top: 10px;
    }
    .right_bar {
        padding-right: 20px;
        padding-top: 10px;
        float: right;
    }
}
//左边菜单栏
.admin_aside {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
    border-right: 1px solid #ccc;
}
.aside_active li:hover{
    color: #ccc;
    background-color: black;
}
// 右边内容
.admin_content {
    padding: 20px;
}
</style>

