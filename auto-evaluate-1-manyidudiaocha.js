// 教务管理系统 -> 问卷调查 -> 满意度调查
var selects = $('iframeautoheight').contentDocument.getElementsByTagName("select")
var j = 1
var n = selects[0].childElementCount
console.log(n)
var t = self.setInterval(autoEvaluate, 1000)
function autoEvaluate() {
    if(j == n) {
        window.clearInterval(t)
        // $('iframeautoheight').contentDocument.getElementById("Button2").click()
    }
    for (i = 1; i < selects.length; i++) {
        selects[i].value = "完全认同"
    }
    var rand = Math.max(1, Math.floor(Math.random() * selects.length));
    selects[rand].value = "相对认同"
    $('iframeautoheight').contentDocument.getElementById("Button1").click()
    j++
    console.log(j)
}