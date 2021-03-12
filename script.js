

var dcanvasx = 400;
var dcanvasy = 400;
var canvasx = dcanvasx//screen.availWidth
var canvasy = dcanvasy//screen.availHeight



function setup() {
	fill("white")
	createCanvas(canvasx, canvasx);

}







var [xspeed, yspeed] = [0, 0];
var xpos = Math.round(Math.random() * canvasx)
var ypos = Math.round(Math.random() * canvasy)
var x = 30
var y = 30
var linex = 30
var liney = 10
var vari;
var numi;


var col = "blue"
var col2 = "red"
var col3 = "yellow"


var coliRed = 79
var coliGrn = 79
var coliBlu = 255

var coliRed2 = 255
var coliGrn2 = 79
var coliBlu2 = 79

var coliRed3 = 255
var coliGrn3 = 255
var coliBlu3 = 79

var defSpeed = canvasx / 210;
var plspeed = defSpeed;
var plsoftx = 0;
var plsofty = 0;



var xpos3 = Math.round(Math.random() * canvasx)
var ypos3 = Math.round(Math.random() * canvasy)
var x3 = 15
var y3 = 15


var [xspeed2, yspeed2] = [0, 0];
var xpos2 = Math.round(Math.random() * canvasx)
var ypos2 = Math.round(Math.random() * canvasy)

var xpl = xpos - canvasx
var xpr = xpos + canvasy
var ypl = ypos - canvasx
var ypr = ypos + canvasy

var xpl2 = xpos2 - canvasx
var xpr2 = xpos2 + canvasy
var ypl2 = ypos2 - canvasx
var ypr2 = ypos2 + canvasy

var dragbx = 25
var dragby = canvasy - 125
var adragbx = 25
var adragby = canvasy - 125
var dragbr = 100

var dragx;
var dragy;
var adragx;
var adragy;
var dragr = 50;
var plmove = 1;
var keycodes = 0;
var mobilem = document.querySelector('#Mobile:checked');
var slider = document.getElementById("myRange");
var slidervalue;
var diff;
var difficulty;



var x2 = 30//Math.round(Math.random() * 10)
var y2 = x2
var linex2 = 30
var liney2 = 10
var health = 100
var health2 = 100
var health3 = 100
var devmode = 0
var devekey = 0
var devkey = 22
var devkey2 = 44
var answer = 1;
var defEnSpeedx = canvasx / 100;
var defEnSpeedy = canvasy / 100;
var enSpeedx = 0;
var enSpeedy = 0;
var ensoftx = 0;
var ensoftx = 0;
var dbtwposX = xpos - xpos2;  //dbtwposX = Distance Between Player/Enemy X-Axis
var dbtwposY = ypos - ypos2;  //dbtwposX = Distance Between Player/Enemy Y-Axis
var enSpeedDivdrX = dbtwposX; //enSpeedDivdr = Enemy Speed Divider X-Axis
var enSpeedDivdrY = dbtwposY; //enSpeedDivdr = Enemy Speed Divider X-Axis
var dividerX = 80;
var dividerY = 80;

var shotstrt = 5;


var moveUp;
var moveDown;
var moveLeft;
var moveRight;

var hide = 0;
var hides = 0;
var timesub = 0.1;


/*
var ctx = canvas.getContext('2d'); 
var canvas = document.getElementById('circle');
/*/

function draw() {





	if (((document.querySelector('#Mobile:checked') == null) == true) == true) {
		mobilem == true;
	}

	if ((document.querySelector('#Mobile:checked') == null) == true) {
		mobilem == false;
	}

	dragx = mouseX - dragr / 2;
	dragy = mouseY - dragr / 2;




	background(225);

	if (devmode == 2) {
			text(dragx.toFixed(1), 200, 200)
		text(dragy.toFixed(1), 200, 250)

		//text(dragx + dragr / 2 ,250,150)
		//text(dragy,250,200)


		//	text(dbtwposX,200,250)
		text(((document.querySelector('#Mobile:checked') == null) == false), 200, 300)
		//text(enSpeedx.toFixed(0),200,350)
		//text(enSpeedy.toFixed(0),200,400)	
	}




	// --	Enemy Follow Player
	if (xpos > xpos2) xpos2 += enSpeedx
	if (xpos < xpos2) xpos2 -= enSpeedx
	if (ypos > ypos2) ypos2 += enSpeedy
	if (ypos < ypos2) ypos2 -= enSpeedy




	fill("white")
	strokeWeight(1)
	// --------------- Var Updater
	if (xpos > xpos2) dbtwposX = xpos - xpos2
	if (xpos < xpos2) dbtwposX = xpos2 - xpos
	if (ypos > ypos2) dbtwposY = ypos - ypos2
	if (ypos < ypos2) dbtwposY = ypos2 - ypos

	if (dbtwposX <= 100) dividerX = dbtwposX / 1.5
	if (dbtwposX >= 101) dividerX = 80
	if (dbtwposY <= 100) dividerY = dbtwposY / 1.5
	if (dbtwposY >= 101) dividerY = 80

	if (x2 <= 10) x2 = Math.round(Math.random() * 30), y2 = x2

	//if(mousedown == 1)rect(dragx + dragr - dragr,dragy + dragr - dragr,dragr,dragr)





	if (document.querySelector('#Mobile:checked') != null) {
		fill("white")
		strokeWeight(1)
		rect(dragbx, dragby, dragbr, dragbr)
		fill("black")


		if (mouseX >= dragbx && mouseX <= dragbx + dragbr / 2 && mouseY >= dragby + dragr / 2 && mouseY <= dragby + dragbr / 2 + dragr / 2) {
			adragx = dragx, adragy = dragy, rect(adragx, adragy, dragr, dragr), moveLeft = 1;
		} else if (keycodes == 0) {
			moveLeft = 0;
		}



		if (mouseX >= dragbx + dragbr / 2 && mouseX <= dragbx + dragbr && mouseY >= dragby + dragr / 2 && mouseY <= dragby + dragbr / 2 + dragr / 2) {
			adragx = dragx, adragy = dragy, rect(adragx, adragy, dragr, dragr), moveRight = 1;
		} else if (keycodes == 0) {
			moveRight = 0;
		}




		if (mouseY >= dragby && mouseY <= dragby + dragbr / 2 && mouseX >= dragbx + dragr / 2 && mouseX <= dragbx + dragbr / 2 + dragr / 2) {
			adragx = dragx, adragy = dragy, rect(adragx, adragy, dragr, dragr), moveUp = 1;
		} else if (keycodes == 0) {
			moveUp = 0;
		}



		if (mouseY >= dragby + dragbr / 2 && mouseY <= dragby + dragbr && mouseX >= dragbx + dragr / 2 && mouseX <= dragbx + dragbr / 2 + dragr / 2) {
			adragx = dragx, adragy = dragy, rect(adragx, adragy, dragr, dragr), moveDown = 1;
		} else if (keycodes == 0) {
			moveDown = 0;
		}




		if (moveLeft == 1) {
			xspeed = -plspeed;
		}
		else if (moveRight == 0) {
			xspeed = 0;
			if (keyCode == 0) keycodes = 0;
		}

		if (moveRight == 1) {
			xspeed = plspeed;
		}
		else if (moveLeft == 0) {
			xspeed = 0;
			if (keyCode == 0) keycodes = 0;
		}


		if (moveUp == 1) {
			yspeed = -plspeed;
		}
		else if (moveDown == 0) {
			yspeed = 0;
			if (keyCode == 0) keycodes = 0;
		}

		if (moveDown == 1) {
			yspeed = plspeed;
		}
		else if (moveUp == 0) {
			yspeed = 0;
			if (keyCode == 0) keycodes = 0;
		}
	}
	enSpeedDivdrX = dbtwposX;
	enSpeedDivdrY = dbtwposY;
	// ------ END ---- Var Updater

	//ctx.arc(2, 2, 2, 0, 2 * Math.PI, false);

	xpl = xpos - canvasx //xpl is for the canvas illusion shape  appering on the left of the screen when moving to the right of the screen

	xpr = xpos + canvasx //xpr is for the canvas illusion shape  appering on the right of the screen when moving to the left of the screen

	ypl = ypos - canvasy //ypl is for the canvas illusion shape  appering on the top of the screen when moving to the bottom of the screen

	ypr = ypos + canvasy //ypr is for the canvas illusion shape  appering on the bottom of the screen when moving to the top of the screen




	xpl2 = xpos2 - canvasx //xpl is for the canvas illusion shape  appering on the left of the screen when moving to the right of the screen

	xpr2 = xpos2 + canvasx //xpr is for the canvas illusion shape  appering on the right of the screen when moving to the left of the screen

	ypl2 = ypos2 - canvasy //ypl is for the canvas illusion shape  appering on the top of the screen when moving to the bottom of the screen

	ypr2 = ypos2 + canvasy //ypr is for the canvas illusion shape  appering on the bottom of the screen when moving to the top of the screen



	fill(col) //char 1 color
	strokeWeight(1) //char 1 stroke color
	rect(xpos, ypos, x, y) // char 1 shape & position

	fill(col2) //char 2 color
	strokeWeight(1) //char 2 stroke color
	rect(xpos2, ypos2, x2, y2) // char 2 shape & position

	fill(col3) //char 3 color
	strokeWeight(1) //char 3 stroke color
	rect(xpos3, ypos3, x3, y3) // char 3 shape & position



	//clone of char 1 (for canvas loop illusion)
	fill(col)
	strokeWeight(1)
	rect(xpl, ypos, x, y)
	fill(col)
	strokeWeight(1)
	rect(xpos, ypl, x, y)
	fill(col)
	strokeWeight(1)
	rect(xpr, ypos, x, y)
	fill(col)
	strokeWeight(1)
	rect(xpos, ypr, x, y)
	//--------END-----(for canvas loop illusion)

	//clone of char 2/Enemy (for canvas loop illusion)
	fill(col2)
	strokeWeight(1)
	rect(xpl2, ypos2, x2, y2)
	fill(col2)
	strokeWeight(1)
	rect(xpos2, ypl2, x2, y2)
	fill(col2)
	strokeWeight(1)
	rect(xpr2, ypos2, x2, y2)
	fill(col2)
	strokeWeight(1)
	rect(xpos2, ypr2, x2, y2)
	//--------END-----(for canvas loop illusion Enemy)



	xpos += xspeed;
	ypos += yspeed;


	fill(col2)
	strokeWeight(1)
	rect(xpos2, ypos2, x2, y2)
	xpos2 += xspeed2;
	ypos2 += yspeed2;
	fill("black")


	if (devmode == 1) {
		devon()
	}

	if (devmode == 2) {
		devon2()
	}


	//line(xpos + x/2 + shotstrt, ypos + y/2 + shotstrt,xpos2 + x2/2, ypos2 + y2/2)

	if (shotstrt > xpos) {
		shotstrt += 1;
	}



	/*	
	// checks if objects are not visible (out of canvas)
	if(x2 <= 10) x2 = Math.round(Math.random() * 100)

	if(xpos2 >= canvasx - x2) xpos2 =  0
	if(xpos2 <= 0 + x2) xpos2 =  Math.round(Math.random() * canvasx)
	if(ypos2 >= canvasy - y2) ypos2 =  Math.round(Math.random() * canvasy)
	if(ypos2 <= 0 + y2) ypos2 =  Math.round(Math.random() * canvasy)
	/*/
	if (xpos >= canvasx + x + plsoftx) xpos = x + plsoftx
	if (xpos <= 0 - x - plsoftx) xpos = canvasx - x - plsoftx
	if (ypos >= canvasy + y + plsofty) ypos = y + plsofty
	if (ypos <= 0 - y - plsoftx) ypos = canvasy - y - plsofty
	/*/
	/*/
	// ----------------------------------(out of canvas)
	//     ↓ checking if xpos touching xpos2 ↓ checking if xpos touching ypos2
	if (xpos + x >= xpos2 && xpos <= xpos2 + x2 && ypos + y >= ypos2 && ypos <= ypos2 + y2) health = health - 2, xpos = Math.round(Math.random() * canvasx), ypos = Math.round(Math.random() * canvasy), xpos3 = Math.round(Math.random() * canvasx), ypos3 = Math.round(Math.random() * canvasy)


	//     ↓ checking if xpos3 touching xpos2 ↓ checking if ypos3 touching ypos2
	if (xpos3 + x2 >= xpos2 && xpos3 <= xpos2 + x2 && ypos3 + y3 >= ypos2 && ypos3 <= ypos2 + y2) health2 = health2 - 5, xpos3 = Math.round(Math.random() * canvasx), ypos3 = Math.round(Math.random() * canvasx), health3 += 15;


	if (health > 100) health = 100;
	if (health2 > 100) health2 = 100;
	if (health3 > 100) health3 = 100;

	if (health < 0) health = 0;
	if (health2 < 0) health2 = 0;
	if (health3 < 0) health3 = 0;




	if (diff == 1) {
		difficulty = "Easy";
		plspeed = 4;
		enSpeedx = 1.2;
		enSpeedy = 1.2;
		timesub = 0.0150;
	}

	if (diff == 2) {
		difficulty = "Medium";
		plspeed = 2;
		enSpeedx = 1.5;
		enSpeedy = 1.5;
		timesub = 0.015;

	}

	if (diff == 3) {
		difficulty = "Hard";
		plspeed = 2;
		enSpeedx = 1.75;
		enSpeedy = 1.75;
		timesub = 0.15;
	}
	health3 -= timesub;


	if (hide == 0) {
		strokeWeight(0.50)

		text("Difficulty:  ", 10, 30)
		text(difficulty, 60, 30)

		//----health text
		fill("black")
		text("Player", canvasx / 2 - 80, canvasy / 10)

		fill("black")
		text("Enemy", canvasx / 2 - 80, canvasy / 6)

		fill("black")
		text("Timer", canvasx / 2 - 80, canvasy / 4.25)


		fill("black")
		text("Player", canvasx / 2 + 65, canvasy / 10)

		fill("black")
		text("Enemy", canvasx / 2 + 65, canvasy / 6)

		fill("black")
		text("Timer", canvasx / 2 + 65, canvasy / 4.25)
		//END health text


		fill("black")
		text("Press Esc To Show", canvasx / 2 - 42, canvasy / 3.75)


		//health bar
		fill("grey");
		rect((canvasx / 2) - 40, canvasy / 10 - 13, 100, 15)
		fill(coliRed, coliGrn, coliBlu);
		rect((canvasx / 2) - 40, canvasy / 10 - 13, health, 15)
		fill("black")
		text(health.toFixed(0), canvasx / 2, canvasy / 10);

		//health bar 2
		fill("grey");
		rect((canvasx / 2) - 40, canvasy / 6 - 13, 100, 15)
		fill(coliRed2, coliGrn2, coliBlu2);
		rect((canvasx / 2) - 40, canvasy / 6 - 13, health2, 15)
		fill("black")
		text(health2.toFixed(0), canvasx / 2, canvasy / 6);

		//health bar 3
		fill("grey");
		rect((canvasx / 2) - 40, canvasy / 4.25 - 13, 100, 15)
		fill(coliRed3, coliGrn3, coliBlu3);
		rect((canvasx / 2) - 40, canvasy / 4.25 - 13, health3, 15)
		fill("black")
		text(health3.toFixed(0), canvasx / 2, canvasy / 4.25);


		if (health < 0) return keyPressed, health = 0, health = 100, xpos = Math.round(Math.random() * canvasx), ypos = Math.round(Math.random() * canvasy), xspeed = 0, yspeed = 0
		//END HEALTH BARS
	}






	if (xpos >= xpos2) enSpeedx = enSpeedDivdrX / dividerX// - defEnSpeedx
	if (xpos == xpos2) enSpeedx = 0
	if (xpos <= xpos2) enSpeedx = enSpeedDivdrX / dividerX// - defEnSpeedx
	if (xpos == xpos2) enSpeedx = 0

	if (ypos >= ypos2) enSpeedy = enSpeedDivdrY / dividerY// - defEnSpeedy
	if (ypos == ypos2) enSpeedy = 0
	if (ypos <= ypos2) enSpeedy = enSpeedDivdrY / dividerY// - defEnSpeedy
	if (ypos == ypos2) enSpeedy = 0
	// End Enemy Follow Player

	dif()


	slidervalue = document.getElementById("myRange").value;
	text(slidervalue, 30, -10)

	if (health3 == 0) {
		fill("red")
		rect(200, 200, 5, 5)
	}








}

function devon() {
	plspeed = 5;
	answer = 44;
	if (keyCode == 27) {
		plspeed = 2;
		answer = 0;
		devmode = 0;
	}
}

function devon2() {
	enSpeedx = 10;
	enSpeedy = 10;
	if (keyCode == 27) {
		defEnSpeedx = 20;
		defEnSpeedy = 20;
		answer = 0;
		devmode = 0;
	}
}

dif()

slidervalue = 2;

function dif() {
	diff = slidervalue;
}

function varnum() {
	if (devmode == 0) {
		vari = document.getElementById("varsi")
		numi = document.getElementById("numsi")
		console.warn(vari.value)
	}
}

var mousedown;


function devv() {
	devkey2 = 44;
	val = document.getElementById("Mobile").checked = false;
	if (val == true) mobilem = val;
	if (val == false) mobilem = val;
	var answer;
	slidervalue = document.getElementById("myRange").value;
	answer = document.getElementById("demo").value;
	val = document.getElementById("Mobile").checked = 0;
	try {
		slidervalue = document.getElementById("myRange").value;
		answer = Number(answer);
		devmode = Number(answer);
		if (answer == devkey) devmode = 1
		if (answer == devkey2) devmode = 2
		if (answer != devkey && answer != devkey2 && answer == 0) devmode = 0

	}
	catch (err) {
	}
}

function mouseClicked() {
	if (mousedown === 1) {
		mousedown = 0;
	} else {
		mousedown = 1;
	}
}

function keyPressed() {
	if (document.querySelector('#Mobile:checked') == null) {
		switch (keyCode) {
			case 37:
			case 65:
				xspeed = -plspeed;
				moveLeft = 1;
				keycodes = 1;
				break;
			case 39:
			case 68:
				xspeed = plspeed;
				moveRight = 1;
				keycodes = 1;
				break;
			case 38:
			case 87:
				yspeed = -plspeed;
				moveUp = 1;
				keycodes = 1;
				break;
			case 40:
			case 83:
				yspeed = plspeed;
				moveDown = 1;
				keycodes = 1;
				break;
			case 27:
				hide = 0;
				break;
		}
	}
}

function keyReleased() {
	switch (keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			moveLeft = 0;
			if (keyCode != 65 && moveLeft == 0) keycodes = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			moveRight = 0;
			if (keyCode != 68 && moveRight == 0) keycodes = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			moveUp = 0;
			if (keyCode != 87 && moveUp == 0) keycodes = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			moveDown = 0;
			if (keyCode != 83 && moveDown == 0) keycodes = 0;
			break;
		case 27:
			hide = 1;
			break;
	}
}


