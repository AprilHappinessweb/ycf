//引入数据池
const pool=require("../pool.js");
//引入模块
const express=require("express");

//创建路由
var router=express.Router();

//1.用户登录路由
router.post("/login",function(req,res){
    var phone=req.body.phone;
    var password=req.body.password;
    var sql="SELECT uid FROM users WHERE phone=? AND upwd=?";  
    pool.query(sql,[phone,password],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:0});
        }else{
            res.send({code:1});
        }
    });
});

//导出路由
module.exports=router;