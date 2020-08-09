// 問題文とカテゴリのリスト
var problem = ["問題文1あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお","問題文2","問題文3"];
var categ = ["〇〇1編", "〇〇2編", "〇〇3編"]


// 選択肢のリスト
var choice = [
    ["問題1の解答選択肢1", "問題1の解答選択肢2", "問題1の解答選択肢3", "問題1の解答選択肢4"], 
    ["問題2の解答選択肢1", "問題2の解答選択肢2", "問題2の解答選択肢3", "問題2の解答選択肢4"], 
    ["問題3の解答選択肢1", "問題3の解答選択肢2", "問題3の解答選択肢3", "問題3の解答選択肢4"], 
  ];

// 正答のリスト(正解の番号を記入する)
var ans = [1,3,2] //問題1,問題2,問題3の解答

// 問題部分の背景写真
// var pic = ["url(../../../img/info.jpg)"]



var arg = new Object;
var parm = location.search.substring(1).split('&');
var val = parm[0].split('=');
var num = Number(val[1])-1


select= '\
<a href="../ans/ans.html?num=problem&ans=TF" class="btn" id="choice1"></a>\n\
<a href="../ans/ans.html?num=problem&ans=TF" class="btn" id="choice2"></a>\n\
<a href="../ans/ans.html?num=problem&ans=TF" class="btn" id="choice3"></a>\n\
<a href="../ans/ans.html?num=problem&ans=TF" class="btn" id="choice4"></a>\n'

select = select.replace("problem", num+1);
select = select.replace("problem", num+1);
select = select.replace("problem", num+1);
select = select.replace("problem", num+1);

cnt = 1;
while(cnt<=4){
    if (cnt==ans[num]){
        select=select.replace("TF","T"); }
    else{
        select=select.replace("TF","F"); }
    cnt = cnt + 1;
}


window.onload = function() {
    // document.getElementById("box2").style.backgroundImage = pic[0]

    document.getElementById('problem').innerHTML = problem[num];
    document.getElementById('category').innerHTML = categ[num];

    document.getElementById('choice').innerHTML = select;


    document.getElementById('choice1').innerHTML = choice[num][0];
    document.getElementById('choice2').innerHTML = choice[num][1];
    document.getElementById('choice3').innerHTML = choice[num][2];
    document.getElementById('choice4').innerHTML = choice[num][3];
 }




