canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keypressed = e.keyCode;
	console.log(keypressed);
	
		if((keypressed >=97 && keypressed<=122)|| (keypressed >=65 && keypressed<=90))
		{
	   aplhabetkey();
	   document.getElementById("d1").innerHTML="você pressionou uma tecla alfabeto";
       console.log("alphabet key");
		}
		else if(keypressed >=48 && keypressed <=57)
		{
		 numberkey();
		 document.getElementById("d1").innerHTML="você pressionou uma tecla número";
		}
		else if(keypressed >=37 && keypressed <=40)
		{
		 arrowkey();
		 document.getElementById("d1").innerHTML="você pressionou uma tecla direcional";
		}
		else if((keypressed==17)||(keypressed==18)||(keypressed==27))
		{
		specialkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla especial";
		}
		else{
		otherkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla outros";
	}
}

function aplhabetkey()
{
img_image="alfabeto.png"
add();
}
function numberkey()
{
img_image="n+¦mero.png";
add();
}
function arrowkey()
{
img_image="direcional.png";
add();
}
function specialkey()
{
img_image="especial.png";
add();
}
function otherkey()
{
img_image="outras.png";
add();
}
	
