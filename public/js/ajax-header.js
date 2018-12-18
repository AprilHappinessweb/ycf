//使用ajax请求头部
    ajax({
    url:"http://localhost:3007/header.html",
    type:"get"
    })
    .then(res=>{
    var header=document.querySelector("header")
    header.innerHTML=res;
    });


