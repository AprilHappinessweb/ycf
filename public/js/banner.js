//一 广告图部分
function banner() {
    var banner = document.querySelector("div.banner");
    var bannerLis = document.querySelectorAll(".banner-list ul li");
    var prevLeft = document.querySelector("div.prev-left");
    var prevRight = document.querySelector("div.prev-right");
    // console.log(prevLeft,prevRight)
    bannerLis[0].style.background = "#F36E27";
    var i = 1;
    var j = 0;
    //自动轮播(自增)
    function t() {
        i++;
        j++;
        if (i < 5 || i > -1) {
            banner.style.background = `url(images/banner${i}.jpg) no-repeat center center`;
        }
        if (j == bannerLis.length) {
            j = 0
        }
        if (j == 0) {
            bannerLis[bannerLis.length - 1].style.background = "";
            bannerLis[j].style.background = "#F36E27";
        } else {
            bannerLis[j - 1].style.background = "";
            bannerLis[j].style.background = "#F36E27";
        }
        if (i >= 5) {
            i = 0;
        }
    }

    function reduceT() {
        i--;
        j--;
        if (i <= 0) {
            i = 5;
        }
        banner.style.background = `url(images/banner${i}.jpg) no-repeat center center`;
        if (j < 0) {
            j = 4;
            bannerLis[0].style.background = "";
            bannerLis[j].style.background = "#F36E27";
        } else {
            bannerLis[j + 1].style.background = "";
            bannerLis[j].style.background = "#F36E27";
        }
    }

    var bannerT = setInterval(t, 2000);

    //鼠标移入移出事件
    banner.onmouseover = function () {
        clearInterval(bannerT);
        bannerT = null;
    }
    banner.onmouseout = function () {
        bannerT = setInterval(t, 1000);
    }

    //左右按钮点击事件
    prevLeft.onclick = function () {
        reduceT();
    }
    prevRight.onclick = function () {
        t();
    }
}
//二 数据展示部分
function datashow() {
    var dataspans = document.querySelectorAll(".index-data ul span");
    var val1 = parseInt(dataspans[0].innerHTML.split(",").join(""));
    var val2 = parseInt(dataspans[1].innerHTML.split(",").join(""));
    var val3 = parseInt(dataspans[2].innerHTML.split(",").join(""));
    //数值转特定字符串
    function changeStr(num) {
        num += "";
        var str = "";
        for (var i = 1; i <= num.length; i++) {
            str += num[i - 1];
            if (i % 3 == 0 && i != num.length) {
                str += ",";
            }
        }
        return str;
    }
    //数据展示效果功能
    function change1() {
        var i = val1;
        i += 18951;
        val1 = i;
        dataspans[0].innerHTML = changeStr(val1);;
        if (val1 > 6075357) {
            dataspans[0].innerHTML = "6,075,357";
            clearInterval(t1);
        }
    }

    function change2() {
        var i = val2;
        i += 75;
        val2 = i;
        dataspans[1].innerHTML = changeStr(val2);;
        if (val2 > 22758) {
            dataspans[1].innerHTML = "22,758";
            clearInterval(t2);
        }
    }

    function change3() {
        var i = val3;
        i += 2;
        val3 = i;
        dataspans[2].innerHTML = changeStr(val3);;
        if (val3 > 568) {
            dataspans[2].innerHTML = "568";
            clearInterval(t3);
        }
    }
    var t1 = setInterval(change1, 2);
    var t2 = setInterval(change2, 2);
    var t3 = setInterval(change3, 2);

}
banner();
datashow();