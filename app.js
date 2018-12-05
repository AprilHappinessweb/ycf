//导入路由
const userRouter=require("./routers/user.js");
//导入模块包
const bodyParser=require('body-parser');
const express=require('express');
//创建web服务器
var app=express();
//加载跨域访问组件
const cors=require("cors");
// 配置允许脚手架访问程序
app.use(cors({
	origin:["http://127.0.0.1:3007","http://localhost:3007"],
	credentials:true
}));
//指定监听端口
app.listen(3007);
//中间件,把post获取的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//托管静态文件到public目录
app.use(express.static('public'));

//把路由器挂载到 /user下
//访问路由/user/login     /user/reg
app.use('/user',userRouter);



































































































