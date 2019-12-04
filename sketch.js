var capture;
var filterBut1;
var filterBut2;
var filterBut3;
var filterBut4;
var bot1 = false;
var bot2 = false;
var bot3 = false;
var bot4 = false;

function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  fill(0);

  //WEB CAMERA
  capture = createCapture(VIDEO);
  capture.size(windowWidth/2, windowHeight/2);
  capture.hide();

  //FILTER BUTTONS

  noStroke();

  filterButton1 = createButton('Gray Filter');
  filterButton1.style("background-color", "gray");
  filterButton1.style("color", "white");
  filterButton1.style("border", "0px");
  filterButton1.style("font-size", "10px");
  filterButton1.style("font-family", "Montserrat-Bold");
  filterButton1.style("padding", "10px");
  filterButton1.style("border-radius", "10px");
  filterButton1.style("border-style", "solid");
  filterButton1.style("border-color", "white");
  filterButton1.style("border-width", "2px");
  filterButton1.position((100)-filterButton1.width/2, (50)+filterButton1.height/2);
  filterButton1.mousePressed(filterBut1);

  filterButton2 = createButton('Invert Filter');
  filterButton2.style("background-color", "Black");
  filterButton2.style("color", "White");
  filterButton2.style("border", "0px");
  filterButton2.style("font-size", "10px");
  filterButton2.style("font-family", "Montserrat-Bold");
  filterButton2.style("padding", "10px");
  filterButton2.style("border-radius", "10px");
  filterButton2.style("border-style", "solid");
  filterButton2.style("border-color", "White");
  filterButton2.style("border-width", "2px");
  filterButton2.position((200)-filterButton2.width/2, (50)+filterButton2.height/2);
  filterButton2.mousePressed(filterBut2);

  filterButton3 = createButton('Threshold Filter');
  filterButton3.style("background-color", "White");
  filterButton3.style("color", "Black");
  filterButton3.style("border", "0px");
  filterButton3.style("font-size", "10px");
  filterButton3.style("font-family", "Montserrat-Bold");
  filterButton3.style("padding", "10px");
  filterButton3.style("border-radius", "10px");
  filterButton3.style("border-style", "solid");
  filterButton3.style("border-color", "White");
  filterButton3.style("border-width", "2px");
  filterButton3.position((315)-filterButton3.width/2, (50)+filterButton3.height/2);
  filterButton3.mousePressed(filterBut3);

  filterButton4 = createButton('Posterize Filter');
  filterButton4.style("background-color", "red");
  filterButton4.style("color", "White");
  filterButton4.style("border", "0px");
  filterButton4.style("font-size", "10px");
  filterButton4.style("font-family", "Montserrat-Bold");
  filterButton4.style("padding", "10px");
  filterButton4.style("border-radius", "10px");
  filterButton4.style("border-style", "solid");
  filterButton4.style("border-color", "White");
  filterButton4.style("border-width", "2px");
  filterButton4.position((445)-filterButton4.width/2, (50)+filterButton4.height/2);
  filterButton4.mousePressed(filterBut4);

  filterButton5 = createButton('Take a Picture!');
  filterButton5.style("background-color", "blue");
  filterButton5.style("color", "White");
  filterButton5.style("border", "0px");
  filterButton5.style("font-size", "10px");
  filterButton5.style("font-family", "Montserrat-Bold");
  filterButton5.style("padding", "10px");
  filterButton5.style("border-radius", "10px");
  filterButton5.style("border-style", "solid");
  filterButton5.style("border-color", "White");
  filterButton5.style("border-width", "2px");
  filterButton5.position((700)-filterButton5.width/2, (50)+filterButton5.height/2);
  filterButton5.mousePressed(picTaken);
}

function draw() {

  background('black');
  capture.loadPixels();

  imageMode(CENTER);
  image(capture, width/2, height/2, 640, 480);


  if(bot1 == true){
    filter(GRAY);
  }

  else{
  }

  if(bot2 == true){
    filter(INVERT);
  }
  else{
  }

  if(bot3 == true){
    filter(THRESHOLD);
  }
  else{
  }

  if(bot4 == true){
    filter(POSTERIZE, 3);
  }
  else{
  }
}

//BUTTONS FUNCTIONS
function filterBut1(){
if(bot1 == false){
  bot1 = true;
}
else{
  bot1 = false;
}
}

function filterBut2(){
  if(bot2 == false){
    bot2 = true;
  }
  else{
    bot2 = false;
  }
}

function filterBut3(){
  if(bot3 == false){
    bot3 = true;
  }
  else{
    bot3 = false;
  }
}

function filterBut4(){
  if(bot4 == false){
    bot4 = true;
  }
  else{
    bot4 = false;
  }
}

//SAVING THE IMAGE
function picTaken(){
saveCanvas('PictureFilter.jpg');
}

//WINDOW RESIZE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
