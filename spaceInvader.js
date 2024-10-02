"use strict";

alert("Draw your space invader here");

signature();

function signature() {
	let canvas = document.querySelector("canvas");
	canvas.width = 300;
	canvas.height = 300;
	let context = canvas.getContext("2d");

	context.fillStyle = "black";
	context.fillRect(0, 0, 300, 300);

	context.fillStyle = "#4ee44e";

	function drawSpaceInvaderchunk(x, y) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + 50, y);
		context.lineTo(x + 50, y + 50);
		context.lineTo(x, y + 50);
		context.closePath();
		context.fill();
	}

	drawSpaceInvaderchunk(200, 50);
	drawSpaceInvaderchunk(50, 50);
	drawSpaceInvaderchunk(0, 50);
	drawSpaceInvaderchunk(250, 50);

	drawSpaceInvaderchunk(50, 100);
	drawSpaceInvaderchunk(200, 100);

	drawSpaceInvaderchunk(50, 150);
	drawSpaceInvaderchunk(200, 150);
	drawSpaceInvaderchunk(0, 150);
	drawSpaceInvaderchunk(250, 150);
	drawSpaceInvaderchunk(100, 150);
	drawSpaceInvaderchunk(150, 150);

	drawSpaceInvaderchunk(50, 250);
	drawSpaceInvaderchunk(200, 250);
	drawSpaceInvaderchunk(0, 250);
	drawSpaceInvaderchunk(250, 250);
}
