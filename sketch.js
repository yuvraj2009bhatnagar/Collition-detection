
var fixed_Rect, moving_Rect;

function setup() {
  createCanvas(800,400);

  fixed_Rect= createSprite(200,200,50,80);
  fixed_Rect.shapeColor= "green";

  moving_Rect= createSprite(400,200,80,30);
  moving_Rect.shapeColor= "green";

  
}

function draw() {
  background(0); 
  console.log(moving_Rect.y-fixed_Rect.y);
  moving_Rect.x= mouseX;
  moving_Rect.y= mouseY;


if (moving_Rect.x- fixed_Rect.x < fixed_Rect.width/2 +moving_Rect.width/2   &&  
  
  fixed_Rect.x-moving_Rect.x < fixed_Rect.width/2 +moving_Rect.width/2  &&
  moving_Rect.y- fixed_Rect.y < fixed_Rect.height/2 +moving_Rect.height/2
  &&   fixed_Rect.y- moving_Rect.y < fixed_Rect.height/2 +moving_Rect.height/2) {

  fixed_Rect.shapeColor= "red";
  moving_Rect.shapeColor= "red";
  
} 

else {
  fixed_Rect.shapeColor= "green";
  moving_Rect.shapeColor= "green";

}
drawSprites();
}

