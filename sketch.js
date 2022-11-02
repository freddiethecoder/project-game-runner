var boy,bg,bgImg,boyImg,crystal,crystalImg,crystal1,crystalImg1,crystal2,crystalImg2,ground;
var daimondGroup,stoneGroup
var score=0
var gs="play"

function preload(){
bgImg=loadImage("lava background.png");
boyImg=loadAnimation("runningboy 1.png","boy2.png","boy3.png","boy 4.png")
crystalImg=loadImage("rock obstacle 1.png")
crystalImg1=loadImage("rock 2 obstacle.webp")
crystalImg2=loadImage("red crystal.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(width/2,height/2,width/2+100,height-100)
  bg.addImage(bgImg)
  bg.scale = 3;
  bg.velocityX = -4

  boy=createSprite(90,height-270,10,40);
  boy.addAnimation("running",boyImg)
  boy.scale = 0.7;

ground=createSprite(width/2,height-50,width,10)
ground.visible = false




stoneGroup = new Group ()
daimondGroup = new Group ()
}

function draw() 
{
  background(30);
  drawSprites();
  if (gs==="play") {
   
    if(bg.x<700){
      bg.x=bg.width;
    }
  if (keyDown("space")) {
    boy.velocityY = -20
  }
  boy.velocityY = boy.velocityY +0.6
    crystals()
    crystals1()
    if (daimondGroup.isTouching(boy)) {
      score=score+2
      daimondGroup.destroyEach()
      boy.overlap(daimondGroup)
    }
    if (boy.isTouching(stoneGroup)) {
      gs="End"
     
    }
  }
  if (gs==="End") {
    textSize(100)
    text("GameOver",width/2-200,height/2)
    restart=createButton("restart")
    restart.position(800,100)
    restart.size(50,30)
    restart.mousePressed(reset)
    //boy.x = 50
    //boy.y = 650
    //bg.x = width/2
    bg.velocityX = 0
    daimondGroup.setVelocityXEach(0)
    stoneGroup.setVelocityXEach(0)  
  }
  




boy.collide(ground)


 
  fill("green")
  textSize(50)
  text("score: "+score,50,50)
}


function reset(){
gs="play"
console.log("working")

}





function crystals()
{
  if(frameCount%140 == 0){
    crystal=createSprite(width,height-100,40,50)
    crystal.velocityX = -7
    var r = Math.round (random(1,2))
    
    if(r==1){
      crystal.addImage(crystalImg)
      crystal.scale = 0.2
    }
    else if(r==2){
      crystal.addImage (crystalImg1)
      crystal.scale = 0.3
      

    }
    stoneGroup.add(crystal) 
  }
}

function crystals1()
{
  if(frameCount%230 == 0){
    crystal=createSprite(width,random(height-200,height -500),40,50)
    crystal.velocityX = -7
    //crystal.velocityY = Math.random(-2,2)
    crystal.addImage(crystalImg2)
    crystal.scale = 0.2
   daimondGroup.add(crystal)
  }
  
}




