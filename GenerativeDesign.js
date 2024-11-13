"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

draw();

function drawLetter(letter, x, y, fontSize) {
	let colors = ["cyan", "purple", "blue", "red", "white"];
	let color = colors[Math.floor(Math.random() * colors.length)];

	context.font = `${fontSize}px IBM Plex Mono, monospace`;
	context.fillStyle = color;
	context.fillText(letter, x, y);
}

function draw() {
	let width = context.canvas.width;
	let height = context.canvas.height;

	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	let beginx = width * 0.15;
	let beginy = height * 0.5;
	let fontSize = width * 0.15;
	let word = "CHILL";

	for (let i = 0; i < word.length; i++) {
		let x = beginx + i * (fontSize * 1.1);
		let y = beginy + (Math.random() - 0.5) * fontSize;
		drawLetter(word[i], x, y, fontSize);
	}
	drawRandomCircles(width, height);
}

function drawRandomCircles(width, height) {
	let circleamount = 20;

	for (let i = 0; i < circleamount; i++) {
		let radius = Math.random() * 50 + 10;
		let x = Math.random() * width;
		let y = Math.random() * height;
		let colors = ["cyan", "purple", "blue", "red", "white"];
		let color = colors[Math.floor(Math.random() * colors.lenght)];

		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2, false);
		context.fillStyle = color;
		context.fill();
	}
}
