let player;
let pImg;
let oImg;
let bgImg;
let obstacles = [];
let wordClassifier;

function setup() {
  createCanvas(1350,635);
    player = new Player(); 
    wordClassifier.classify(heardWord);
}

function keyPressed(){
  if(key == " "){
    player.jump();
  }
  
}
function heardWord(error,results){
if (results[0].label =="up"){
  player.jump();
}
}

function preload() {
  bgImg = loadImage ("background.jpg")
  pImg = loadImage ("player.png")
  oImg = loadImage ("obstacle.jpg")
  let options = {
    probabilityThreshold:0.85,  
  };

  wordClassifier=ml5.soundClassifier('SpeechCommands18w', options);

}

function draw() {
  background(bgImg);
  player.show();
  player.move();
  
  if (random(1) < 0.01){
  obstacles.push(new Obstcle());
    
  }


  for (let obs of obstacles) {
    obs.show();
    obs.move(); 
    
    if(player.collided(obs) == true) {
      console.log("GAME-OVER");
      noLoop(); 
    }
  }







}
