const AdminModels = require('../models/AdminUser')
const _ = require('lodash')

class Admin {
  constructor() {
    //构造方法
  }
  async adminRegist(req, res, next) {
    //获取注册信息
    const body = req.body
    // console.log("the new admin:" + body.adminName)
    try {
      const admin = await AdminModels.find({
        adminName: body.adminName
      })
      if (!_.isEmpty(admin)) {
        res.send({
          status: 'error',
          message: '该管理员已经存在'
        })
      } else {
        await AdminModels.create(body)
        res.send({
          status: 'success',
          message: '注册成功'
        })
      }
    } catch (err) {
      //   console.log(err)
      res.send({
        status: 'error',
        message: err
      })
    }

  }
}

module.exports = new Admin()
