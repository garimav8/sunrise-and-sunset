const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bgimg ;
var Hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
  if(bgimg)
  background(bgimg);

    Engine.update(engine);

    // write code to display time in correct format here
    text("HOUR: " + hour,100,100)
    textSize(32);
    fill ("white");


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')

    //change the data in JSON format
    var responseJSON = await response.json()


    // write code slice the datetime

    var dateTime = responseJSON.datetime

    hour = dateTime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=05){
        bg= "sunrise1.png";
    }
    else if(hour>=05 && hour<=06){
        bg = "sunrise2.png";
    }
    else if(hour>=06 && hour<=7){
        bg = "sunrise3.png";
    }
    else if(hour>=7 && hour<=9){
        bg = "sunrise4.png"
    }
    else if(hour>=9 && hour<=12){
        bg = "sunrise5.png";
    }
    else if(hour>=12 && hour<=16){
        bg= "sunrise6.png";
    }
    else if(hour>=16 && hour<=17){
        bg= "sunset7.png";
    }
    else if(hour>=17 && hour<=18){
        bg= "sunset8.png";
    }
    else if(hour>=18 && hour<=19){
        bg= "sunset9.png";
    }
    else if(hour>=19 && hour<=20){
        bg= "sunset10.png";
    }
    else if(hour>=20 && hour<=23){
        bg= "sunset11.png";
    }
    else if(hour>=23 && hour<=4){
        bg= "sunset12.png";
    }
    else{
        bg= "sunset8.png";
    }

    //load the image in backgroundImg variable here
   bgimg = loadImage(bg);
}

