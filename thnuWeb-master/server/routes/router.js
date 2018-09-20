const express = require('express')
const router = express.Router()

//管理员模块
const Admin = require('../lib/mongodb/controller/adminUser')


router.get('/',(req,res) => {
    res.send({
        staues:"success"
    })
})
//管理员相关路由
router.post('/admin/register',Admin.adminRegist)    //管理员注册

module.exports = router