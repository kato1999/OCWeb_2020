// 解説文のリスト(改行する場合は\nを使用)
var expl=[
    "本学からは、野依良治さんや赤崎勇さんをはじめ、6名のノーベル賞受賞者を輩出しています。これは日本の大学で3番目に多い数となっています。",
    "名古屋市営地下鉄の名古屋駅から東山線で本山駅まで行き、名城線に乗り換えて名古屋大学駅に行くのが最短ルートです。乗り換えがうまく行った場合は約20分で名古屋駅から名古屋大学駅に移動することができます。",
    "名古屋大学の土地総面積は3,215,492㎡で、ディズニーランド（約510,000㎡）の約6倍です。いかに広いかがわかりますね...!",
    "正解はミュージカルのチケットです。ミュージカルのチケットは流石に買えませんね（笑）とはいえ、名古屋大学には、キャンパスのいたるところに購買やコンビニがあり、学生生活で買い物に困らないのが名大に通うメリットの一つです。",
    "現在、食堂では、新型コロナウイルス感染拡大防止のため、給茶機でのお茶の提供は中止ししています。感染防止策を十分に練った上で営業を再開しております。",
    "毎月18日の「IBの日」では、クレープが10％引きで提供されます。",
    "名古屋大学博物館は、名古屋大学の学生問わず、無料で入ることができます。是非立ち寄ってみてください！", 
    "中央図書館のラウンジには、ホワイトボードが常備されています。",
    "本を購入するときにMeicaを提示すると定価の10%OFFで購入することができます。",
    "「NUCT」は、これは「Nagoya Univercity Collaboration and Course Tools」の略称です。流石に簡単すぎましたか？",
    "「Me~dia」は、名古屋大学生協学生委員会が、年に6回、通算191号を発行している歴史ある機関誌です。生協からのお知らせが載っているのはもちろんですが、その他にも学生が執筆した記事やクイズなど、読んで楽しい内容となっています。"]

var url = [
    "../../tip/tip1.html",
    "../../tip/tip2.html",
    "../../tip/tip3.html",
    "../../tip/tip4.html",
    "../../tip/tip5.html",
    "../../tip/tip6.html",
    "../../tip/tip7.html",
    "../../tip/tip8.html",
    "../../tip/tip9.html",
    "../../tip/tip10.html",
    "../../tip/tip11.html"
]

var category = [
    "名大の歴史",
    "駅・立地",
    "敷地面積",
    "購買・コンビニ",
    "食堂・外食",
    "カフェ",
    "博物館",
    "フリースペース",
    "Meica",
    "NUCT",
    "Me~dia",
]


var arg = new Object;
var parm = location.search.substring(1).split('&');
var val = parm[0].split('=');
var num = Number(val[1])-1
var TF = parm[1].split('=');

crrct = "<div class='fig correct_fig'>&#x25CB;</div>\n <div class='correct_word'>正解!</div>";
uncrr = "<div class='fig uncorrect_fig'>&#x00D7;</div>\n <div class='uncorrect_word'>残念!不正解</div>";

link = '<a href="URL" class="back_quiz">somethingについての詳しい情報を見る</a>'
link = link.replace("URL", url[num]);
link = link.replace("something", category[num]);

link2 = '<a href="../quiz.html#ID" class="back_quiz">名大クイズのトップに戻る</a></span>';
link2 = link2.replace("ID", "card"+String(num+1));


window.onload = function() {
    if (TF[1]==="T"){
        document.getElementById('answer').innerHTML = crrct;
    }
    else{
        document.getElementById('answer').innerHTML = uncrr;
    }

    document.getElementById('explain').innerHTML = expl[num];
    document.getElementById('link').innerHTML = link;
    document.getElementById('link2').innerHTML = link2;
 }




