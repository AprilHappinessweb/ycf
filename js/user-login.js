//鼠标移入事件
var txtUname=$("uname"),txtUpwd=$("upwd");
txtUname.onfocus=getFocus;
txtUpwd.onfocus=getFocus;
function getFocus(){          //封装鼠标移入事件getFocus方法
    var parentDiv=this.parentNode; //获取父级元素
    parentDiv.style.border="1px solid #999";//当鼠标选中当前input，父级元素边框高亮显示
    var hideDiv=parentDiv.nextElementSibling;
    hideDiv.style.visibility="visible"
}

// 鼠标移出事件
txtUname.onblur=function(){//账号框移出事件
    vali(this,/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/);//调用vali封装函数
};

function vali(txt,regExp){  //封装验证方法
    txt.parentNode.style.border="1px solid #D5D5D5";
    //获取显示验证结果的div
    var div=txt.parentNode.nextElementSibling;
    div.className="";

    if(regExp.test(txt.value)){ //如果输入的符合正则表达式规则
        div.className="success-text";  //样式改成success-text
        return true;
    }else{
        div.className="fail-text";  //否则样式改成fail-text
        return false;
    }
}
txtUpwd.onblur=function(){//密码框鼠标移出事件
    vali(this,/^[a-zA-Z0-9_]{6,12}$/);//调用vali封装函数
}

//用户登录
function login(){
    if(vali(txtUname,/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/)==true&&vali($("upwd"),/^[a-zA-Z0-9_]{6,12}$/)==true){
        var $uname=$("uname").value;    //获取uname值
        var $upwd=$("upwd").value;      //获取upwd值
        var formData="uname="+$uname+"&upwd="+$upwd;//定义post发送主体，存储要提交的uname和upwd值
        ajax({
            url:"http://localhost:3000/user/login",
            type:"post",
            data:formData,
            dataType:"json"
        })
        .then(res=>{
            console.log(res);
            if(res.ok==1){
                var msgBox=$("times");
                msgBox.style.display="block";
                var timer=setInterval(function(){
                    var second=$("second").innerHTML;
                    second--;
                    $("second").innerHTML=second;
                    if(second==0){
                        clearInterval(timer);
                        location.href="http://localhost:3000/index.html"
                    }
                },1000);
            }else{
                var msgBox=$("times");
                msgBox.style.display="block";
                var h2=document.querySelector("#times>.userMsg>h2");
                h2.innerHTML="登录失败！"
                var loginPage=document.querySelectorAll("#times>.userMsg>p>span:last-child");
                loginPage[0].innerHTML="会员登录";
                var a=document.querySelector("#times>.userMsg>a");
                a.setAttribute("href","http://localhost:3000/login.html");
                
                var timer=setInterval(function(){
                    var second=$("second").innerHTML;
                    second--;
                    $("second").innerHTML=second;
                    if(second==0){
                        clearInterval(timer);
                        location.href="http://localhost:3000/login.html"
                    }
                },1000);
            }
        })
    }else if(vali($("uname"),/^1[3-8]\d{9}$|(\w+@[0-9A-Za-z-]+(\.[0-9a-zA-Z-]+)+)/)==false){
        txtUname.focus();
    }else{
        txtUpwd.focus()
    }
}
