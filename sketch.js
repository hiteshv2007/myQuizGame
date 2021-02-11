
var gameState = 0;
var ContestantCount;
var allContestants;
var answer;
var database;

var Question, Contestant, Quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  Quiz = new quiz();
  Quiz.getState();
  Quiz.start();
}


function draw(){
  background("red");
  if(ContestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}


