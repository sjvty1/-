
function verify() {
    var obj = document.getElementById("password");
    var psw = obj.value;
    var len = psw.length;
    var charNum = 0;
    if (len >= 8) {
        for (var i = 0; i < psw.length; i++) {
            var ascNum = psw.substr(i, 1).charCodeAt();

            if ((ascNum >= 65 && ascNum <= 90) || (ascNum >= 97 && ascNum <= 122)) {
                charNum += 1
            }
        }
        if (charNum == 0) {
            alert("密码第一位必须为字母")
        } else {
            alert("密码长度为:" + len + "\n密码为：" + psw + "\n提交成功")
        }

    } else {
        alert("密码长度不可以小于8")
    }
}