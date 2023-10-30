//Drawing Basics

//Setup the canvas and the graphics context
let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Store image in variables
let clothcloudpng = document.getElementById("cloud.png");

//Sky
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300); //Draw a filled square

//Sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill();

//Grass
ctx.fillStyle = "#056608";
ctx.fillRect(0, 300, 400, 200); //Draw a filled square

//Clouds
ctx.drawImage(cloud, 150, 100);
ctx.drawImage(cloud, 189, 80);
