// 問題文とカテゴリのリスト
var problem = ["名古屋大学は、ノーベル賞受賞者を何名輩出したでしょう？",
                "名古屋大学の敷地内には「名古屋大学駅」が存在します。「名古屋駅」から「名古屋大学駅」まで乗り換えがスムーズにできた場合、どのくらいの時間で行けるでしょう？",
                "名古屋大学における全キャンパスの土地面積はディズニーランドの約何倍でしょう？",
                "次の商品のうち、名古屋大学生協の購買で買うことができないものはどれでしょう？",
                "名古屋大学生協のコロナ禍での食堂営業において、次のうちおこなっていないものはどれでしょう？（2020年7月現在）",
                "東山キャンパスの中にあるIBカフェでは、オムライスやパスタなどの洋食だけでなく、コーヒーやクレープなども提供しております。そのIBカフェでいつもより安くクレープが販売される「IBの日」とはいつでしょう？",
                "東山キャンパスには「名古屋大学博物館」という博物館があります。名古屋大学の学生以外の入館料はいくらでしょう？",
                "東山キャンパス内には多くのフリースペースがあり、そこでは自由に勉強、議論、歓談をすることができます。その中の1つの中央図書館のラウンジに常備されているものはなんでしょう？",
                "名大の食堂・購買で買い物をするときに使えるプリペイドカードとして「Meica」がありました？これを名大内の本屋で支払時に提示すると何％OFFになるでしょう？",
                "名大の授業は1つのWebサイトで管理されています。このWebサイト名は「NUCT」といいますが、これは「Nagoya Univercity ○○ Tools」の略称です。○○に入る英語は何でしょう？",
                "名古屋大学生協が年に6回発行している機関誌として「Me~dia」がありますが、これまでに通算何号を発行したでしょう？"];

var categ = ["歴史編", "駅・立地編", "敷地面積編", "購買・コンビニ編", "食堂・外食編", "カフェ編", "博物館編", "フリースペース編", "Meica編", "NUCT編", "Me~dia編"]


// 選択肢のリスト
var choice = [
    ["1人", "2人", "6人", "10人"], 
    ["10分", "20分", "30分", "40分"], 
    ["0.5倍", "1倍", "2倍", "6倍"],
    ["新幹線のチケット", "ミュージカルのチケット", "自転車", "iPad Pro"],
    ["給湯器でのお茶の提供", "割り箸の提供", "アクリル板のしきりの設置", "アルコール消毒液の設置"],
    ["1月3日", "1月8日", "毎月13日", "毎月18日"],
    ["100円", "500円", "700円", "無料"],
    ["ホワイトボード", "自動販売機", "レーザーポインター", "ウォーターサーバー"],
    ["1%", "2%", "5%", "10%"],
    ["Colorful Community", "Collaboration and Course", "Coca-Cola", "Cristiano"],
    ["約10号", "約20号", "約50号", "約200号"],
     
  ];

// 正答のリスト(正解の番号を記入する)
var ans = [3,2,4,2,1,4,4,1,4,2,4] //問題1,問題2,問題3の解答




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




