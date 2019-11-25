$(document).ready(function(){
  let average;
  let number;
  let rank;
  let sum;
  let subject_points;
  let judge;

  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    subject_points = [Number($('#national_language').val ()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    sum = subject_points.reduce(function(a,b){
      return a+b;
    })
    console.log(sum);
    $("#sum_indicate").text(sum);//reduceメソッドを使い圭さんを簡略化。

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    average=sum/subject_points.length//平均点を計算
    $("#average_indicate").text(average);
    };

  function get_achievement(){
        if(average>=80){
          rank="A"
          return rank;
        }
        else if(average>=60){
          rank="B"
          return rank;
        }
        else if(average>=40){
          rank="C"
          return rank;
        }else{
          rank="D"
          return rank;
        }
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  };



  function get_pass_or_failure(){
    if(subject_points[0]>=60 && subject_points[1]>=60 && subject_points[2]>=60 && subject_points[3]>=60 && subject_points[4]>=60 ){
      judge="合格";
      return judge;
    }else {judge="不合格";
    return judge;
          }
    };

  function judgement(){
    rank=get_achievement();
    judge=get_pass_or_failure();
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。


    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${rank}です。${judge}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
    $("#evaluation").text(rank);
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
    $(`#judge`).text(judge);

  });

  $('#btn-declaration').click(function() {
    $(`#alert-indicate`).remove();
    judgement();


  });
});


// ① $(document).ready(function(){ ~ });HTML=DOMの読み込みが終わったらfunction()の中の処理(=なにかしらの処理)を実行するという意味
// ② $('#btn-evaluation').click(function() { ~ });ランクidのボタンをクリックしたとき処理される
// ③ $('#national_language, #english, #mathematics, #science, #society').change(function() { ~ });それぞれのid要素が変更されたら処理される
// ④ $('#national_language').val() id値の#national_languageのvalue=0を取得
// ⑤ Number()  とってきた文字列を数値に変換する
// ⑥ $("#sum_indicate").text(sum);#sum_indicateのid要素にsumの値がテキストベースで入力される。
// ⑦ .append
