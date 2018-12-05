//功能一:登录切换
var zkDiv=document.getElementsByClassName("zk-title")[0];
var lcsDiv=document.getElementsByClassName("lcs-title")[0];
var section=document.getElementsByTagName("section")[0];
var userClass="";
zkDiv.onclick=function(){
    var zkDiv=this;
    zkDiv.className="zk-title";
    lcsDiv.className="lcs-title";
    section.style.background="url(./images/zkloginbg.jpg) no-repeat -290px top";
    userClass="zk";
}
lcsDiv.onclick=function(){
    var lcsDiv=this;
    zkDiv.className="zkchange";
    lcsDiv.className="lcschange";
    section.style.background="url(./images/lcsloginbg.jpg) no-repeat -290px top";
    userClass="lcs";
}

//功能二:验证功能
var input=document.getElementsByTagName("input");
var phoneInput=input[0];
var passwordInput=input[1];
var login=input[2];
var hintDiv=document.querySelector(".user-box .box-login .hint-text");
//手机号验证
phoneInput.onfocus=function(){
    var phoneInput=this;
    phoneInput.parentNode.style.borderColor="#F36E27";
    hintDiv.innerHTML="";
}
phoneInput.onblur=function(){
    var phoneInput=this;
    phoneInput.parentNode.style.borderColor="#D5D5D5";
    phone=phoneInput.value;
    if(phone==""){
        hintDiv.innerHTML="手机号码不能为空";
        return;
    }else if(!(/^1[3-8]\d{9}$/.test(phone))){
        hintDiv.innerHTML="手机号码格式不正确,请重新输入";
        return;
    }else{
        hintDiv.innerHTML="";
        return phone;
    }
}
//密码验证
passwordInput.onfocus=function(){
    var passwordInput=this;
    passwordInput.parentNode.style.borderColor="#F36E27";
}
passwordInput.onblur=function(){
    var passwordInput=this;
    passwordInput.parentNode.style.borderColor="#D5D5D5";
    password=passwordInput.value;
    if(password==""){
        hintDiv.innerHTML="密码不能为空";
        return;
    }else if(!(/\d{6,20}/.test(password))){
        hintDiv.innerHTML="密码长度在6~20之间";
    }else{
        hintDiv.innerHTML=""
        return password;
    }
}
login.onclick=function(){
    phoneInput.onfocus();
    
    var login=this;
    var formDate="phone="+phone+"&password="+password;
    if(phone|password){
        ajax({
            url:"http://localhost:3007/user/login",
            type:"post",
            data:formDate,
            dataType:"json"
        }).then(result=>{
            if(result.code==0){
                hintDiv.innerHTML="用户名或密码不正确，如果您是理财师，请点击理财师登录";
            }else{
                location="https://www.1caifu.com/";
            }
        })
    }
}


