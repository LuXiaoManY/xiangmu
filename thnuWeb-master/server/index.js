const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
//表单处理中间件
const bodyParser = require('body-parser')
//处理session缓存
const session = require('express-session')
//导入mongdb配置文件
const mongo = require('./config/db')
//导入路由
const router = require('./routes/router')

//连接数据库
mongo.connect();

//跨域访问
app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
      res.send(200)
    } else {
      next()
    }
  });
  //配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
//处理表单数据
app.use(bodyParser.json())//处理json
app.use(bodyParser.urlencoded({extended: false}))//中间件

//配置session中间件
app.use(session({
    secret: 'youlike',
    resave: false,
    saveUninitialized: true, //默认分配session密钥
    cookie: {maxAge: 1000*60*60*24*30} //session保存的时间，单位是ms
}))

app.use(router)

app.use(function(err,req,res,next){
    var err = new Error('not found')
    err.status = 404
    next(err)
})
// app.use('/public',express.static('public'))
//静态文件路径
// app.use(express.static(path.join(__dirname,'dist')))
app.listen(80)
console.log('server success listen to port:80')