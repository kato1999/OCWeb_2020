// 解説文のリスト(開業する場合は\nを使用)
var expl=[
    "第1問の解説　あああああああああああああああああああああああああああああああああああああああああああああああああ",
    "第2問の解説　いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    "第3問の解説　ううううううううううううううううううううううううううううううううううううううううううううううううう",
    ]



var arg = new Object;
var parm = location.search.substring(1).split('&');
var val = parm[0].split('=');
var num = Number(val[1])-1
var TF = parm[1].split('=');

crrct = "<div class='fig correct_fig'>&#x25CB;</div>\n <div class='correct_word'>正解!</div>"
uncrr = "<div class='fig uncorrect_fig'>&#x00D7;</div>\n <div class='uncorrect_word'>残念!不正解</div>"


window.onload = function() {
    if (TF[1]==="T"){
        document.getElementById('answer').innerHTML = crrct;
    }
    else{
        document.getElementById('answer').innerHTML = uncrr;
    }

    document.getElementById('explain').innerHTML = expl[num];
 }




