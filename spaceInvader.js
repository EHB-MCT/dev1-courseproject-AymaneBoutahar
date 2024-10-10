"use strict";

let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext("2d");

signature();

function signature() {
	context.fillStyle = "black";
	context.fillRect(0, 0, 300, 300);

	context.fillStyle = "#4ee44e";

	drawSpaceInvaderchunk(75, 25);
	drawSpaceInvaderchunk(175, 25);
	drawSpaceInvaderchunk(25, 25);
	drawSpaceInvaderchunk(225, 25);

	drawSpaceInvaderchunk(75, 75);
	drawSpaceInvaderchunk(175, 75);

	drawSpaceInvaderchunk(75, 125);
	drawSpaceInvaderchunk(175, 125);
	drawSpaceInvaderchunk(25, 125);
	drawSpaceInvaderchunk(225, 125);
	drawSpaceInvaderchunk(100, 125);
	drawSpaceInvaderchunk(150, 125);

	drawSpaceInvaderchunk(75, 225);
	drawSpaceInvaderchunk(175, 225);
	drawSpaceInvaderchunk(25, 225);
	drawSpaceInvaderchunk(225, 225);
}

function drawSpaceInvaderchunk(x, y) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x + 50, y);
	context.lineTo(x + 50, y + 50);
	context.lineTo(x, y + 50);
	context.closePath();
	context.fill();
}
