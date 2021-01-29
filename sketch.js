var dog,sadDog,happyDog;
var feedButton
var addFoodButton

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  //milkImage = loadImage("Images/Milk.png")
}

function setup() {
  //added the line below
  database=firebase.database();
  createCanvas(1000,400);
  
  //created a food object
  foodObj = new Food();

  //created a reference to the location "Food" in the database
  foodStock=database.ref('Food');
  //created a listener function which calls function readStock if the value of the Food node changes
  foodStock.on("value",readStock);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed button, position it and write a mousePressed function for it
  //do the same 3 steps for addFood button

}

function draw() {
  background(46,139,87);
  textSize(20)
  fill("black")
  text("Buddy", 770,140)
  drawSprites();
  //get last feed time from the database and display it as text on the screen
}

//function to read food Stock

function readStock(data){
  //get the value of data from a listener funand call updateFoodStock
}

//function to update food stock and last fed time
function feedDog(){
  //add happy dog image
  //call updateFoodStock and set it as getFoodStock() - 1
  //write code to access the database and "update" the nodes Food and FeedTime
}

//function to add food in stock
function addFoods(){
  //write code to add food
}