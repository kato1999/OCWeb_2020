// 問題文とカテゴリのリスト
var problem = ["問題文1","問題文2","問題文3"];
var categ = ["〇〇1編", "〇〇2編", "〇〇3編"]


// 選択肢のリスト
var choice = [
    ["問題1の解答選択肢1", "問題1の解答選択肢2", "問題1の解答選択肢3", "問題1の解答選択肢4"], 
    ["問題2の解答選択肢1", "問題2の解答選択肢2", "問題2の解答選択肢3", "問題2の解答選択肢4"], 
    ["問題3の解答選択肢1", "問題3の解答選択肢2", "問題3の解答選択肢3", "問題3の解答選択肢4"], 
  ];

// 正答のリスト
var ans = [1,3,2]

var arg = new Object;
var parm = location.search.substring(1).split('&');
var val = parm[0].split('=');
var num = Number(val[1])-1


select="<a href='../ans.html'><div id=choice1>選択肢1</div></a>\n\
<a href='../ans.html'><div id=choice2>選択肢2</div></a>\n\
<a href='../ans.html'><div id=choice3>選択肢3</div></a>\n\
<a href='../ans.html'><div id=choice4>選択肢4</div></a>"

// alert(val[0]);

window.onload = function() {
    document.getElementById('problem').innerHTML = problem[num];
    document.getElementById('category').innerHTML = categ[num];

    document.getElementById('choice').innerHTML = select;


    document.getElementById('choice1').innerHTML = choice[num][0];
    document.getElementById('choice2').innerHTML = choice[num][1];
    document.getElementById('choice3').innerHTML = choice[num][2];
    document.getElementById('choice4').innerHTML = choice[num][3];
 }




