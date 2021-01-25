var backGround,backGroundImg;
var mouse,mouseImg;

function preload() {
  //backGroundImg =loadImage(garden.png);
  //mouseImg =loadImage(images/jerryOne.png);

}

function setup(){
    createCanvas(1200,600);
    //create tom and jerry sprites here
    backGround=createSprite(400,200);
   // backGround=addImage(backGroundImg);

   mouse=createSprite(200,200);
   //mouse=addImage(mouseImg);
}

function draw() {
     background("pink");
  
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
