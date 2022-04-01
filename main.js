canvas = document.getElementById("my_Canvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
var c_h = 90;
var c_w = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var c_x = 10;
var c_y = 304;

function add() {
	//upload car, and background images on the canvas.
	background_image_Tag = new Image();
	background_image_Tag.onload = uploadBackground();
	background_image_Tag.src = background_image;

	car_image_Tag = new Image();
	car_image_Tag.onload = uploadgreencar();
	car_image_Tag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_image_Tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_image_Tag,c_x,c_y,c_w,c_h);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(c_y >=0) {
       c_y = c_y - 10;
	   uploadBackground();
	   uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(c_y <=507) {
		c_y = c_y + 10;
		uploadBackground();
		uploadgreencar();
	 }
}

function left()
{
	//Define function to move the car left side
	if(c_x >=0) {
		c_x = c_x - 10;
		uploadBackground();
		uploadgreencar();
	 }
}

function right()
{
	//Define function to move the car right side
	if(c_x <=977) {
		c_x = c_x + 10;
		uploadBackground();
		uploadgreencar();
	 }
}
