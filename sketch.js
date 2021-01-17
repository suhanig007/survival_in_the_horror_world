const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodeis;
var canvas, horrorPlaceImg;
var scaryHeadImg, spiritImg
var horrorPlace
var scaryHead, spirit
var stickFigureImg
var stickfigure
var pixelCharacterImg
var pixelCharacter
var goldImg
var gold
var gameState = 0;
var invisibleGround
var world;
var engine;

function preload() {
  horrorPlaceImg=loadImage("images/horror-wallpaper.jpg")
  scaryHeadImg=loadImage("images/scaryHead.png")
  spiritImg=loadImage("images/spirit-removebg-preview.png")
  stickFigureImg=loadImage("images/WeirdStickfigure-removebg-preview.png")
  pixelCharacterImg=loadAnimation("images/animatedpixel_character/1.png","images/animatedpixel_character/2.png",
  "images/animatedpixel_character/3.png","images/animatedpixel_character/4.png","images/animatedpixel_character/5.png","images/animatedpixel_character/6.png",
  "images/animatedpixel_character/7.png","images/animatedpixel_character/8.png","images/animatedpixel_character/9.png","images/animatedpixel_character/10.png",
  "images/animatedpixel_character/11.png","images/animatedpixel_character/12.png","images/animatedpixel_character/13.png","images/animatedpixel_character/14.png",
  "images/animatedpixel_character/15.png","images/animatedpixel_character/16.png","images/animatedpixel_character/17.png","images/animatedpixel_character/18.png",
  "images/animatedpixel_character/19.png","images/animatedpixel_character/20.png","images/animatedpixel_character/21.png","images/animatedpixel_character/22.png",
  "images/animatedpixel_character/23.png","images/animatedpixel_character/24.png","images/animatedpixel_character/25.png","images/animatedpixel_character/26.png")
  goldImg=loadImage("images/gold-removebg-preview.png")

  
 
}



function setup(){
  canvas = createCanvas(400,800);
  engine=Engine.create();
  world=engine.world;

  horrorPlace=createSprite(200,200)
  horrorPlace.velocityX = -2;
  horrorPlace.x = horrorPlace.width/2
  horrorPlace.addImage(horrorPlaceImg)
  
  pixelCharacter = createSprite(100, 350, 10, 10);
  pixelCharacter.addAnimation("pixel",pixelCharacterImg)
  pixelCharacter.scale=0.1;

  invisibleGround = createSprite(0,400,400,10)
  invisibleGround.visible = false;
  
  scaryHead = new Group();
  spirit = new Group();
  gold1 = new Group();
  
  

}


function draw(){
  background("white`");
  Engine.update(engine)
  if (horrorPlace.x<400){
    horrorPlace.x = horrorPlace.width/2
  }
  if(keyDown("space")){
    pixelCharacter.velocityY = -12
  }
  pixelCharacter.velocityY = pixelCharacter.velocityY + 0.8;

  pixelCharacter.collide(invisibleGround)

  if(pixelCharacter.isTouching(gold)) {
    pixelCharacter.velocityX=2;
    count=count+2
    goldGroup.destroyEach();

  }
  if(pixelCharacter.isTouching(scaryHead)){
    pixelCharacter.velocityX=1;
  }
   var velocity=pixelCharacter
  switch (velocity){
    case 10:
      pixelCharacter.velocityX= 3;
      break;
      case 20:
      pixelCharacter.velocityX= 4;
      break;
      case 30:
      pixelCharacter.velocityX= 5
      break;
      case 40:
      pixelCharacter.velocityX = 6;
      break;
      default:
      break;
  }

gold();
obstacle1();
obstacle2();

drawSprites();
textSize(20)
fill("00FFBD")
tex("SO FAR YOUR SCORE IS->" + count, 340,15);
}
function gold(){
  if(frameCount %80===0){
    var gold1 = createSprite(600,250,40,10)
    gold1.addImage("gold",goldImg)
    gold1.scale=0.05;
    gold1.velocityX=-5;

    gold1.lifetime=300;
    gold1.y = random(50,250)
    gold1.add(gold)
  }
}
function obstacle1() {
  if(frameCount % 80===0){
    var spirit1 = createSprite(800,350,10,40)
    spirit1.addImage("spirit",spirit)
    spirit1.scale = 0.15;
    spirit1.velocityX = -6
    spirit1.lifetime = 300;
    spiritGroup.add(spirit1)
  }
}
