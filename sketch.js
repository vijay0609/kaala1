var king,kingimg
var s1,s2,s3,s4,s5,s6
var s1img, s2img,s3img, s4img, s5img,s6img
var bg;
var invsground
var w1,w1img,w2,w2img
var PLAY = 1
var END = 0
var gameState = PLAY
var life
var bar
var w3,w3img
var kills




function preload(){
  kingimg = loadImage("g.png")
  s1img = loadImage("a.png")
  s2img = loadImage("b.png")
  s3img = loadImage("c.png")
  s4img = loadImage("d.png")
  s5img = loadImage("e.png")
  s6img = loadImage("h.png")
  bg = loadImage("bg.png")
  w1img = loadImage("w3.png")
  w2img = loadImage("w1.png")
  w3img = loadImage("w1.png")
  
}

function setup(){
  createCanvas(1200,500);
  life=5
  bar=1
  kills=0
  king = createSprite(150,380)
  king.addImage(kingimg)
  king.scale = 1
  king.setCollider("rectangle",0,0,80,110)
  invsground = createSprite(600,380,1200,10)

  s1 = createSprite(1500,310)
  s1.addImage(s1img)
  s1.velocityX=-4
  s1.debug=true
  s1.setCollider("rectangle",0,0,170,170)


  w1 = createSprite(200,-520)
  w1.addImage(w1img)
  w1.scale = 0.6
  w1.velocityX = 0
  //w1.visible=false

  w2 = createSprite(1080,340)
  w2.addImage(w2img)
  w2.scale = 0.4
  w2.velocityX = 0
  w2.visible=false

  w3 = createSprite(1080,340)
  w3.addImage(w3img)
  w3.scale = 0.4
  w3.velocityX = 0
  w3.visible=false



  

  /*s2 = createSprite()
  s2.addImage(s1img)

  s3 = createSprite()
  s3.addImage(s1img)

  s4 = createSprite()
  s4.addImage(s1img)

  s5 = createSprite()
  s5.addImage(s1img)

  s6 = createSprite()
  s6.addImage(s1img)*/
}

function draw(){
  background(bg);

  fill("black")
  textFont("public secret demo")
  textSize(20)
  text("YOUR LIFE: " , 320,30)

  textFont("caramel sweets")
  text( life +"💖",415,30)
 
 if(gameState === PLAY){
 
  fill("black");
  textFont("CARAMEL SWEETS");
  textSize(15);
  text(" S - TO SHOOT",10,30);
  
  fill("black")
  textFont("arial")
  textSize(10)
  text("(after shooting it takes some time to reload)",110,25)

  fill("black");
  textFont("CARAMEL SWEETS");
  textSize(15);
  text(" SPACE - TO JUMP",10,50);

  fill("black")
  textFont("arial")
  textSize(10)
  text("(jump to escape from enemies)",130,50)

  fill("red")
  textFont("impact")
  textSize(23)
  text("Weapon Status: ",500,30)
 
  king.collide(invsground)
  invsground.visible = false 
  //king.debug = true

  if((keyDown("space") || keyDown("up") ) && king.y >= 300){
    king.velocityY = -15
   
  }
  if ((keyDown("right"))){
    king.x=king.x+10
    
  }
  if ((keyDown("left"))){
    king.x=king.x-10
  
  }

  if(keyDown("s")){
    w1.velocityY=10
    w1.velocityX=10
  }

  king.velocityY = king.velocityY + 0.8

  if(bar<=3){
    
  }

  if(w2.x <= -300){
    w2.x = 1080
  }

  if(w3.x<=-400){
    w3.x = 1080
  }
 
  if(w1.x === 200){
    fill("black")
    textFont("arial")
    textSize(22)
    text(" Reloaded 👍",650,30)

  }
  else {
    fill("black")
    textFont("arial")
    textSize(22)
    text("Not available 👎",650,30)
}
  if(w1.x> 1200){
    w1.velocityX=0
    w1.velocityY=0
    w1.x = 200
    w1.y=-500
  }
  if(s1.x===1100){
    s1.velocityX = 0
    w2.velocityX = -15
    w2.visible = true
  }
  if (bar!=0){
  fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar+"💖",s1.x,s1.y-150)
  }
  if(life === 0)[
    gameState = END
  ]
  if(w1.isTouching(s1)&&w1.y>310){
    bar = bar-1
    w1.x=600
    w1.y=600
  }
  if(bar === 0){
    s1.destroy()
    w2.destroy()
    w3.destroy() 
  }

  if(s1.destroy()){
    life = life+1
  }
  
  if((bar<=3)&&(s1.x===1080)){
    w3.velocityX = -15
    w3.visible = true
  }
  
  
 }
 if(king.isTouching(w2)&&w2.x<king.x-10){
   life=life-1
   w2.x = 1080
 }
 
 if(gameState === END){
   king.destroy()
   w1.destroy()
   w2.destroy()
   s1.destroy()
   background("rgba(0,0,0,0.7)")
   fill("red")
   textSize(50)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("06")
   text("  GAME OVER  ",400,270)
 
 }
  drawSprites()

}
