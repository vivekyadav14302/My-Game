function preload() {
  //load game assets
 pimg = loadImage("frog.png");
 obimg = loadImage("worm.png");
 bgimg = loadImage("bg.jpg");
}

score = 0
function setup() {
  createCanvas(800,600);
  player = createSprite(50,50,50,50)
  player.shapeColor = "white"
  player.addImage(pimg);
  player.scale = .5;
  objectgroup = new Group()
}
function draw() {
  background(bgimg);
  stroke("red")
  strokeWeight(5)
  fill("lightgreen")
  ellipse(100,100,70,100)  
  
  if(
    frameCount%20==0
  ){
    objectgen()
  }
  for(var i = 0; i<objectgroup.length; i+=1){
    t = objectgroup.get(i)
    if(player.isTouching(t)){
      t.destroy()
      t = null
      score+=1
    }
  }
  textSize(18)
  text("Your Score: " + score, 430,100)
  if(mouseX<200 && mouseX>0 && mouseY<200 && mouseY>0){
   
  }
  else{
    player.x = mouseX;
    player.y = mouseY;
  }
  drawSprites()
  
}

function objectgen(){
  object = createSprite(0,100,30,20)
  object.shapeColor = "yellow"
  object.addImage(obimg)
  object.scale = random(.2,.4)
  object.velocityX = random(1,4)
  object.velocityY = random(-4,4)
  object.y = random(100,500)
  objectgroup.add(object)
}