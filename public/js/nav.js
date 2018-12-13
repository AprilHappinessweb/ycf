//使用ajax请求头部
(function(){
    ajax({
    url:"http://localhost:3007/nav.html",
    type:"get"
    })
    .then(res=>{
    var header=document.querySelector("nav")
    header.innerHTML=res;
    });
})();