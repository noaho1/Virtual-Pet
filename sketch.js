var dog
var happyDog
var database
var foodS;
var dogImg

function preload()
{
  //load images here
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

dog.scale = 0.1
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
} else{
  dog.addImage(dogImg);
} 

drawSprites();
  //add styles here

textSize (15);
fill ("white");
noStroke();
text("Press UP_ARROW Key To Feed Drago Milk!",100,150);
text("Food Remaining: " + foodS, 160, 100);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
    });
}


