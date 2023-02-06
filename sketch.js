var btn_red;
//crie a variável que guarda o botão verde 
var ???;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  //Utilize o código 'createButton' para criar um botão
  btn_red = ???("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  
  ??? = ???("GREEN");
  ???.position(250,50);
  ???.mousePressed(green_bg);
  
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}