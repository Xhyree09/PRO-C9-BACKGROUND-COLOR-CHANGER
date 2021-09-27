
function setup() {
  createCanvas(400,400);
  background(51);
  triangle = createSprite(200,200,30,30);

}

function draw() 
{


  if (keyIsDown(LEFT_ARROW)) 
  {
    background("rgb(224, 176, 255)");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("pink");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("rgb(137, 207, 240)");
  }
if (keyIsDown(RIGHT_ARROW))
{
background("rgb(253,253,150)");

}

  
  drawSprites();
}

