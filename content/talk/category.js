// 問題文とカテゴリのリスト
var QA_list = [
[
    // 受験について(勉強)
    ["受験について(勉強)（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問が長い場合あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    "答えが長い場合いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    "not"],
],

[
    // 受験について(勉強以外)
    ["受験について(勉強以外)（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "not"],
],

[
    // 大学生活について(勉強)
    ["大学生活について(勉強)（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "not"],
],

[
    // 大学生活について(部活・サークル・バイトなど)
    ["大学生活について(部活・サークル・バイトなど)（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "new"],
],

[
    // 学部学科について
    ["学部学科について（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "new"],
],

[
    // 留学について
    ["留学について（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "new"],
],

[
    // その他
    ["その他（あだ名）",
    "答え（学部学科学年あだ名）",
    "new"],
    ["質問",
    "答え",
    "new"],
]
];

var category = [
"受験について(勉強)",
"受験について(勉強以外)",
"大学生活について(勉強)",
"大学生活について(部活・サークル・バイトなど)",
"学部学科について",
"留学について",
"その他",
]


var que = '<div class="question">Q</div>\n';
var ans = '<div class="answer">A</div>';
var update = '<span class="new">new!</span>';
var QA = "";


var parm = location.search.substring(1).split('&');
var val = parm[0].split('=');
var num = Number(val[1])-1;

cnt = 0;
while(cnt<QA_list[num].length){
    if (QA_list[num][cnt][2]==="new"){
        QA += update
    }
    QA += que.replace("Q", QA_list[num][cnt][0]);
    QA += ans.replace("A", QA_list[num][cnt][1]);

    cnt += 1
}

window.onload = function() {
    document.getElementById('QA').innerHTML = QA;
    document.getElementById('categ').innerHTML = category[num];
 }




