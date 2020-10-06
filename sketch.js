var fixedRect, movingRect,third,fourth;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX=-2;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  third=createSprite(200,200,100,100)
  third.shapeColor="blue"
  fourth=createSprite(300,300,80,80)
  fourth.shapeColor="red"
  fifth=createSprite(380,350,50,50)
  fifth.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(isTouching(third, movingRect));
  if(isTouching(third, movingRect)){
    movingRect.shapeColor = "purple";
    third.shapeColor = "white";
  }
  
  else if(isTouching(fourth, movingRect)){
    movingRect.shapeColor="red"
  fourth.shapeColor="orange"
  }
  else if(isTouching(fifth,movingRect)){
    movingRect.shapeColor="yellow"
    fifth.shapeColor="purple"
  }
  else if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="grey"
  }else{
   movingRect.shapeColor="green"
   fixedRect.shapeColor="green" 
   fifth.shapeColor="yellow"
   third.shapeColor="blue"
    fourth.shapeColor="red"

  }
  
   bounceOff(movingRect,fixedRect)
    drawSprites();
}


  

