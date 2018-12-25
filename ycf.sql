#设置服务器端编码
SET NAMES UTF8;

#删除数据库ycf,如果存在
DROP DATABASE IF EXISTS ycf;

#创建数据库
CREATE DATABASE ycf CHARSET=UTF8;

#使用数据库
USE ycf;

#创建数据表users用户信息表
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,         #用户id
    uname VARCHAR(20),                          #用户姓名
    phone VARCHAR(20),                          #用户手机号
    upwd VARCHAR(20),                       #用户密码
    userClass VARCHAR(128)                      #用户类型:理财师或投资人(个人或机构)
);

#创建数据表class产品类别
CREATE TABLE class(
    cid INT PRIMARY KEY AUTO_INCREMENT,         #类别id
    cname VARCHAR(20)                           #类别名称
);

#创建数据表product产品
CREATE TABLE product(
    pid INT PRIMARY KEY AUTO_INCREMENT,		#产品id
    pname VARCHAR(128),				#产品名称
    ppic VARCHAR(128), 				#产品图片
    pSale  VARCHAR(20),				#产品状态
    company VARCHAR(128),			#发行机构
    startSale DATE,				#本期起售日
    period VARCHAR(128),			#产品期限
    payInterest	VARCHAR(128),			#付息方式
    investmentField VARCHAR(128),		#投资领域
    scale VARCHAR(128),				#规模
    minPurchase VARCHAR(128),			#认购起点
    impawnRate VARCHAR(128),			#抵/质押率
    investmentArea VARCHAR(128),		#投资领域
    collectAccount VARCHAR(1000),		#募集账号
    moreStatement VARCHAR(1000),	 	#补充说明
    financingBody VARCHAR(1000),		#融资主体
    useOfFunds VARCHAR(1000),			#资金用途
    repayingSource VARCHAR(1000),		#还款来源
    riskControlMeasures	 VARCHAR(1000),		#风控措施
    lightspot  VARCHAR(1000), 			#项目亮点
    productTag  VARCHAR(1000),			#产品标签
    collectProgress  VARCHAR(128),		#募集进度
    collectProgressStatement  VARCHAR(128),	#募集进度说明
    minPurchaseEarnings   VARCHAR(1000),	#最低认购金额+预期收益
    middlePurchaseEarnings   VARCHAR(1000),	#区间认购金额+预期收益
    maxPurchaseEarnings   VARCHAR(1000),	#最高认购金额+预期收益
    matching	VARCHAR(128),			#大小额配比
    shareCount 	INT,				#邮件分享该产品次数
    appointmentCount  INT,			#预约该产品次数
    downloadCount INT,				#下载该产品资料包次数
    browseCount INT,				#浏览该产品次数
    classid	INT 				#产品类别
);

INSERT INTO `users`(`uid`,`uname`,`phone`,`upwd`,`userClass`) VALUES(null,"Tom","18866669999","t123456","zk,self"),
(null,"Jerry","18899996666","123456j","zk,ogn"),
(null,"Marry","18877779999","123m456","lcs");

