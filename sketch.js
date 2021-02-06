
var titleScreen,bg1;
var brotherIMG1,brotherIMG2;
var enemysGroup,bulletGroup;
var enemy1,enemy2,enemy3,enemy4;
var title,Start,startButton
var bgIMG2,bg2,bg3,bgIMG3;
var Brother;
var image,image2;
var gameState = "pass";
var music1,music2,music3,music4,musci5;
var level1,level2,level3,level4;
var bro12gun,broGun;
var gunFire,gunFire2;
var fireSound1,fireSound2;
var endImage;
var restart;
var score=0
function preload() {
 
  bg1=loadImage("BG IMAGE1 (2).png")
  startButton=loadImage("startButton.jpg")
  bg2=loadImage("BG IMAGE mountains.jpg")
  brotherIMG1=loadImage("big bro.png")
  brotherIMG2=loadImage("small bro.png")
  music2=loadSound("music2.mp3")
  fireSound1=loadSound("bro fire.mp3")
  fireSound2=loadSound("boss fire.mp3")
  enemy1=loadImage("Guard1.jpg")
  enemy2=loadImage("Guard2.jpg")
  enemy3=loadImage("Guard3.jpg")
  enemy4=loadImage("Guard4.jpg")
  broGun=loadImage("hero's gun.jpg")
  gunFire=loadImage("gun firing.jpg")
  gunFire2=loadImage("gun firing2.jpg")
  endImage=loadImage("end.jpg")
  restartIMG=loadImage("Restart.jpg")
  bgIMG3=loadImage("BG IMAGE 3.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2+30,displayHeight/2-130)
    bg.addImage(bg1)
    bg.scale=0.3/1.12
    //bg.addAnimation("image2",bg2)
    
    enemysGroup = new Group();
    bulletGroup = new Group();
    Start=createSprite(displayWidth/2,displayHeight/2+50)
    Start.addImage(startButton)
    Start.scale=0.8
    Start.visible = true;

   
    enemysGroup.visible=false
    score=0
}

function draw(){
  
  bg1.velocityX = -5;
  if (bg1.x < 450){
    bg1.x =displayWidth/2;
    }
   

 score = score + Math.round(getFrameRate()/60);
 
   if(mousePressedOver(Start)){
   
    gameState="PLAY"
   
   
    bg.visible=false
   
    
    Start.visible=false

    bg1=createSprite(displayWidth-1200,displayHeight/2)
    bg1.addImage(bg2)
    bg1.scale=0.8
    
    bro=createSprite(displayWidth/6+60,displayHeight/1-200)
    bro.addImage(brotherIMG1)
    bro.scale=0.4

    bro12gun=createSprite(displayWidth/6+80,displayHeight/1-210)
    bro12gun.addImage(broGun)
    bro12gun.scale=0.4

    bro1=createSprite(displayWidth/6+170,displayHeight/1-170)
    bro1.addImage(brotherIMG2)
    bro1.scale=0.6
   
    bro12gun=createSprite(displayWidth/6+190,displayHeight/1-130)
    bro12gun.addImage(broGun)
    bro12gun.scale=0.4
     

    enemysGroup.visible=true

    }
 
    if (keyDown("space")) {
        
      createBullet(); 
       
    }
    
    if(frameCount % 160 === 0) {
    var enemy = createSprite(1200,500);
      enemy.velocityX = -4;
     
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy.addImage(enemy1);
                break;
        case 2: enemy.addImage(enemy2);
                break;
        case 3: enemy.addImage(enemy3);
                break;
        case 4: enemy.addImage(enemy4);
                break;
        default: break;
      }
       enemy.scale = 0.5;
       enemysGroup.add(enemy)
    }
    if(bulletGroup.isTouching(enemysGroup)){
      enemysGroup.destroyEach(); 
      }
      if(enemysGroup.isTouching(bro12gun)){
        gameState="END";
      }
    else  if (gameState === "END") {
      var end=createSprite(displayWidth-700,displayHeight/2);
      end.addImage(endImage)
      end.scale=2
      restart=createSprite(displayWidth-700,displayHeight/2-100)
      restart.addImage(restartIMG)
      restart.scale=0.7
        enemysGroup.destroyEach();
        bro.visible=false
        bro1.visible=false
        bulletGroup.destroyEach();
        bg1.visible=false
        bg2.visible=false
        bg.visible=false
        if(mousePressedOver(restart)){}
           gameState="PLAY"
      }
      
      if(score>=80){
        
       level2();
        
      }
   drawSprites();
   if(gameState==="PLAY"){
   fill("yellow")
   textSize(20)
  text("SCORE: "+ score, displayWidth/2,displayHeight/2);
   
   }
}


function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(gunFire);
  bullet.x = 360;
  bullet.y =bro12gun.y; 
  bullet.velocityX = 4;
  bullet.lifetime = 200;
  bullet.scale = 0.2;
  bulletGroup.add(bullet);
   
}

 function level2(){
  bg1.visible=false
  bg3=createSprite(displayWidth-750,displayHeight/2)
  bg3.addImage(bgIMG3)
  bg3.scale=1.3;
  
 }

