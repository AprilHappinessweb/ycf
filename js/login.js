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
phoneInput.onblur=function(){
    var phoneInput=this;
    return phone=phoneInput.value;
}
passwordInput.onblur=function(){
    var passwordInput=this;
    return password=passwordInput.value;
}
login.onclick=function(){
    var login=this;
    if(phone==""){
        hintDiv.innerHTML="手机号码不能为空";
        return;
    }
    if(phone="//"){}
    else if(password==""){
        hintDiv.innerHTML="密码不能为空";
        return;
    }else{

    }
}


