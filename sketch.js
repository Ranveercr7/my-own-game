var bg,bgImg;
var sub,subImg;
var e1,e2,e3,e4,e5;
function preload() {
  bgImg = loadImage("images/background.jpg");
  subImg = loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png",
  "images/s6.png","images/s7.png","images/s8.png","images/s9.png","images/s10.png","images/s11.png",
  "images/s12.png","images/s13.png","images/s14.png","images/s15.png","images/s16.png","images/s17.png",
  "images/s18.png","images/s19.png","images/s20.png","images/s21.png","images/s22.png","images/s23.png",
  "images/s24.png","images/s25.png","images/s26.png","images/s27.png","images/s28.png","images/s29.png",
  "images/s30.png","images/s31.png","images/s32.png","images/s33.png","images/s34.png","images/s35.png",
  "images/s36.png","images/s37.png","images/s38.png","images/s39.png","images/s40.png","images/s41.png",
  "images/s42.png","images/s43.png","images/s44.png","images/s45.png");
  e1 = loadImage("images/E1.png");
  e2 = loadImage("images/E2.png");
  e3 = loadImage("images/E3.png");
  e4 = loadImage("images/E4.png");
  e5 = loadImage("images/E5.png");
}

function setup() {
  createCanvas(800,400);
 sub = createSprite(100, 200, 50, 50);
  sub.addAnimation("moving",subImg);
}

function draw() {
  background(bgImg);  
  spawnEnemies();
  drawSprites();
}
function spawnEnemies(){
  if(frameCount % 100 === 0){
    var enemy = createSprite(800,200,50,50);
    var rand = Math.round(random(1,4));
    enemy.velocityX = -4;
    enemy.scale = 0.3;
    enemy.y = (random(40,400)); 

    switch(rand){
      case 1 : enemy.addImage(e1)
      break  ;
      case 2 : enemy.addImage(e2)
      break  ;
      
      case 3 : enemy.addImage(e4)
      break  ;
      case 4 : enemy.addImage(e5)
      break  ;
      default : break;
    }
  
  }
}