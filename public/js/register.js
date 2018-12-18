//查找元素
(() => {
    var options = document.querySelectorAll("div.reg-info-options>span");
    console.log(options)
    for (var option of options) {
        option.onclick = function () {
            var option = this;
            option.className = "sel";
            if (option.nextElementSibling) {
                option.nextElementSibling.className = "";
            } else {
                option.previousElementSibling.className = "";
            }
        }
    }
})()