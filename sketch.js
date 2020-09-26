
var monkey , monkey_running;
var bananasGroup, bananaImage; obstacle, obstacleGroup, obstacleImage
var obstacleGroup, obstacleImage;
var score
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var survivalTime
var message
var ground, invisbleGround;
var obstacle,obstacleImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  obstacleImage=loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(475,475);
  console.log(message);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(450,450,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(450,455,900,10);
  invisibleGround.visible = false;
  
  obstacleGroup = createGroup();
  bananasGroup = createGroup();
  
  score=0;
}


function draw() {
  
background("blue");

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,370,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(gameState===PLAY) {
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    food();
    Obstacles();
    
    if(bananasGroup.isTouching(monkey)) {
      bananasGroup.destroyEach();
      score = score + 2;
    }
    
     if(keyDown("space")&& monkey.y >= 140) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    
  monkey.collide(invisibleGround);
  }
    
  
  
  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    var banana=createSprite(300,300,30,10);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.y = random(220,330);
    banana.velocityX = -7;
    banana.setLifetime = 100 ;
    monkey.depth = banana.depth;
    monkey.depth = banana.depth + 1;
    bananasGroup.add(banana);
  }
    
}

function Obstacles() {
  if (frameCount % 300 === 0){
    var obstacle=createSprite(420,420,90,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale = 0.15;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}






