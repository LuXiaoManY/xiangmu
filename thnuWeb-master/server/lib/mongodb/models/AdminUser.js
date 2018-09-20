const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
  //管理员名
  adminName: {
    type: String,
    required: true
  },
  //密码
  password: {
    type: String,
    required: true
  },
  //创建的日期
  adminDate: {
    type: Date,
    default: Date.now()
  },
  //是否登录
  login: {
    type: Boolean,
    default: false
  },
  //电话
  tel: String,
  //邮箱
  emial: String
})

//导出Schema
//mongoose自动在当前连接的数据库中创建一个admin集合（表）
module.exports = mongoose.model('admin', adminSchema)
