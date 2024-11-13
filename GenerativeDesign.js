"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

drawGenerativeArt();

function drawLetter(letter, x, y, fontSize) {
	//function that draws just a single letter in a random position with random colour.
	let colors = ["cyan", "purple", "blue", "red", "white"];
	let color = colors[Math.floor(Math.random() * colors.length)]; // randomly select a color from the colors given in let colors.

	context.font = `${fontSize}20px IBM Plex Mono, monospace`; // sets the font for the text with the given font. In this case, IBM Plex Mono.
	context.fillStyle = color;
	context.fillText(letter, x, y);
}

function drawGenerativeArt() {
	// draws the design (the word "CHILL" with the randomly colored circles).
	let width = context.canvas.width;
	let height = context.canvas.height;

	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	// these all define the starting position of the circles and words
	let beginx = width * 0.15; // X starting position is set to 15% of the canvas width
	let beginy = height * 0.5; // Y starting position is set to the middle of the canvas
	let fontSize = width * 0.15; // The font size takes about 15% of the canvas width
	let word = "CHILL";

	for (let i = 0; i < word.length; i++) {
		let x = beginx + i * (fontSize * 1.1); // zorgt voor een soort van willekeurige offset wat voor dynamiek zorgt in het werk
		let y = beginy + (Math.random() - 0.5) * fontSize;
		drawLetter(word[i], x, y, fontSize);
	}

	drawRandomCircles(width, height); // function call to draw random circles with random colours and coordinates
}

function drawRandomCircles(width, height) {
	// this function draws the circles on the canvas
	let circleamount = 15; //amount of circles being drawn

	for (let i = 0; i < circleamount; i++) {
		// loops through the number of circles
		let radius = Math.random() * 50 + 10;
		let x = Math.random() * width;
		let y = Math.random() * height;
		let colors = ["cyan", "purple", "blue", "red", "white"];
		let color = colors[Math.floor(Math.random() * colors.lenght)];

		//steps to draw the circle
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2, false); // draws the circle with a random radius and coordinate
		context.fillStyle = color;
		context.fill();
	}
}
