var canva;
var gameState = 0;
var contestant, contestantCount;
var database;
var quiz, question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  console.log(database);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
