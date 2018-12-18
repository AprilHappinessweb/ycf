(() => {
    //4.导航栏显示效果
    var lis = document.querySelectorAll("nav>ul>[data-tab=tab]");
    var navblocks = document.querySelectorAll("nav>ul>div.nav-hot");
    for (var li of lis) {
        li.onmouseover = function () {
            var li = this;
            var a = li.children[0]
            var id = li.getAttribute("data-id");
            var div = document.getElementById(`${id}`);
            var divs = document.querySelectorAll("nav>ul>div")
            for (var d of divs) {
                d.style.display = "none";
            }
            div.style.display = "block";
        }
        li.onmouseout = function () {
            var li = this;
            var id = li.getAttribute("data-id");
            var div = document.getElementById(`${id}`);
            div.style.display = "none";
        }

    }
})()