// 热点专题图片点击切换功能
(()=>{
    var imgList=document.querySelector(".hot-topic-list .hot-topic-img");
    var buttonR=document.querySelector(".hot-topic-list .button-right");
    var buttonL=document.querySelector(".hot-topic-list .button-left");
    var left=parseInt(window.getComputedStyle(imgList).marginLeft);//获得滚动区域的内联样式left值
    buttonR.onclick=function(){
        left=left-304;
        imgList.style.marginLeft=left+"px";
        buttonL.style.display="block";
        if(left==-1216){
            buttonR.style.display="none";
        }
    }
    buttonL.onclick=function(){
        left=left+304;
        imgList.style.marginLeft=left+"px";
        buttonL.style.display="block";
        if(left==0){
            buttonL.style.display="none";
        }  
    }
})()