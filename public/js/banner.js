var banner=document.querySelector("div.banner");
var bannerLis=document.querySelectorAll(".banner-list ul li");
var prevLeft=document.querySelector("div.prev-left");
var prevRight=document.querySelector("div.prev-right");
// console.log(prevLeft,prevRight)
bannerLis[0].style.background="#F36E27";
var i=1;
var j=0; 
//自动轮播(自增)
function t(){  
    i++;
    j++;
    if(i<6||i>-1){
        banner.style.background=`url(images/banner${i}.jpg) no-repeat center center`;
    }
    if(j==bannerLis.length){j=0}
    if(j==0){
        bannerLis[bannerLis.length-1].style.background="";
        bannerLis[j].style.background="#F36E27"; 
    }else{
        bannerLis[j-1].style.background="";
        bannerLis[j].style.background="#F36E27"; 
    }
    if(i>=5){
        i=0;
        }
    
}
function reduceT(){
    i--;
    j--;
    if(i<=0){
        i=5;
    }      
    banner.style.background=`url(images/banner${i}.jpg) no-repeat center center`;
    if(j<0){
        j=4;
        bannerLis[0].style.background="";
        bannerLis[j].style.background="#F36E27";     
    }else{
        bannerLis[j+1].style.background="";
        bannerLis[j].style.background="#F36E27"; 
    }
}

var bannerT = setInterval(t,1000);

//鼠标移入移出事件
banner.onmouseover=function(){
    clearInterval(bannerT);
    bannerT=null;
}
banner.onmouseout=function(){
    bannerT = setInterval(t,1000);
}

//左右按钮点击事件
prevLeft.onclick=function(){
    reduceT();
}
prevRight.onclick=function(){
    t();
}