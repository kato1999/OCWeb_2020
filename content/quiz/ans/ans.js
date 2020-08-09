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
var TF = parm[1].split('=');

console.log(TF);
console.log(num);
console.log(parm);



window.onload = function() {
    if (TF[0]==="T"){
        document.getElementById('answer').innerHTML = 正解;
    }
    else{
        document.getElementById('answer').innerHTML = 不正解;
    }

 }




