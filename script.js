var playing = false;
var beforeQuiz = true;
var beforeQuiz1 = true;
var beforeQuiz2 = true;
var beforeQuiz3 = true;
var quizAtSeconds = 6;
var quizAtSeconds1 = 12;
var quizAtSeconds2 = 18;
var quizAtSeconds3 = 24;

$("video").on("play", function () {
  playing = true;
});

$("video").on("pause ended", function () {
  playing = false;
});

$("video").on("timeupdate", function (e) {
  if (this.currentTime < quizAtSeconds && this.currentTime < quizAtSeconds1 && this.currentTime < quizAtSeconds2 && this.currentTime < quizAtSeconds3) {
    beforeQuiz = true;
  } else if (beforeQuiz && this.currentTime >= quizAtSeconds) {
    beforeQuiz = false;
    if (playing) {
      showQuiz();
    }
  }else if (beforeQuiz1 && this.currentTime >= quizAtSeconds1) {
    beforeQuiz1 = false;
    if (playing) {
      showQuiz1();
    }
  }else if (beforeQuiz2 && this.currentTime >= quizAtSeconds2) {
    beforeQuiz2 = false;
    if (playing) {
      showQuiz2();
    }
  }else if (beforeQuiz3 && this.currentTime >= quizAtSeconds3) {
    beforeQuiz3 = false;
    if (playing) {
      showQuiz3();
    }
  }
});
function showQuiz() {
  $("video").removeAttr("controls").get(0).pause();
  $("#question0").show();
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#feedback").hide();
  $("#quiz").show();
}
function showQuiz1() {
  $("video").removeAttr("controls").get(0).pause();
  $("#question1").show();
  $("#question0").hide();
  $("#quiz").show();
}
function showQuiz2() {
  $("video").removeAttr("controls").get(0).pause();
  $("#question2").show();
  $("#question1").hide();
  $("#quiz").show();
}
function showQuiz3() {
  $("video").removeAttr("controls").get(0).pause();
  $("#question3").show();
  $("#question2").hide();
  $("#quiz").show();
}
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "question.json", true);
xhttp.onload = function() {
  const json = xhttp.responseText;
  var data = JSON.parse(json);
  for (var i = 0 ; i <= data.length ; i++) {
    $("#question").append("<div id=question"+[i]+"><h1>"+data[i].question+"</h1><div class='answers'><button class=value"+[i]+" onclick='myFunction()'>"+data[i].answers[0]+"</button><button class=value"+[i]+" onclick='myFunction()'>"+data[i].answers[1]+"</button></div></div>");
  }
}
xhttp.send();
function myFunction(){
  $("video").attr("controls", true).get(0).play();
  $("#question0").hide();
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#quiz").hide();
}