(() => {
    // 1.搜索栏的下拉列表功能
    var option = document.querySelector("header .web-header .header-search div.header-search-option");
    var optionSpan = document.querySelector("div.header-search-option>span");
    option.onclick = function (e) {
        e.stopPropagation();
        var option = this;
        if (optionSpan.className == "span-top") {
            optionSpan.className = "span-list";
            var list = optionSpan.nextElementSibling.children;
            for (var i = 0; i < list.length; i++) {
                var li = list[i];
                li.onclick = function () {
                    var li = this;
                    optionSpan.innerHTML = li.innerHTML;
                }
            }
        } else {
            optionSpan.className = "span-top";
        }
    }
    //以上div和span都包含在body内,若使用body的点击事件,会造成冲突
    var body = document.body;
    body.onclick = function (e) {
        if (e.target.nodeName == "BODY") {
            //var cbody=e.target;
            //var ul=document.querySelector("div.header-search>div.header-search-option>ul");
            //ul.style.display="none";
            // if(optionSpan.className="span-list")  
            //     optionSpan.className="span-top";  
        }
    }
    //2.搜索栏输入框文本自动轮播效果
    var search = document.querySelector("div.header-search-text>input");
    var searchtTexts = ["支持更多关键词，如“两年期”", "支持关键词搜索，如“政信类”", "试试用地区搜，如“贵州”", "发行机构也能搜，试试“光大”", "输入产品名称或关键词查找"];
    var hotsale = null; //计时器
    var i = 0;

    function hot() {
        i++;
        if (i == 4) {
            i = 0;
        }
        search.setAttribute("placeholder", searchtTexts[i]);
    }

    function start() {
        if (hotsale != null) {
            clearInterval(hotsale);
            hotsale = null;
        }
        hotsale = setInterval(hot, 2000);
    }

    function stop() {
        clearInterval(hotsale);
        hotsale = null;
    }
    start();

    //3.搜索栏输入框点击效果
    var searchText = document.querySelector("div.header-search-text");
    var inputText = document.querySelector("div.header-search-text>input");
    var span = document.querySelector("div.header-search-text>span");
    search.onfocus = function () {
        option.style.borderTopColor = "#F36E27";
        option.style.borderLeftColor = "#F36E27";
        option.style.borderBottomColor = "#F36E27";
        searchText.style.borderBottomColor = "#F36E27";
        searchText.style.borderTopColor = "#F36E27";
        searchText.className = "header-search-text tbc2";
        inputText.style.width = "420px";
        span.style.display = "none";
        search.setAttribute("placeholder", "");
        stop();
    }
    search.onblur = function () {
        option.style.borderTopColor = "#D7D7D7";
        option.style.borderLeftColor = "#D7D7D7";
        option.style.borderBottomColor = "#D7D7D7";
        searchText.style.borderBottomColor = "#D7D7D7";
        searchText.style.borderTopColor = "#D7D7D7";
        searchText.className = "header-search-text tbc";
        inputText.style.width = "257px";
        span.style.display = "inline-block";
        search.setAttribute("placeholder", searchtTexts[i]);
        start();
    }
})()