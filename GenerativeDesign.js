// Some parts of this project were developed using suggestions generated by ChatGPT (OpenAI)
// 18/12/2024: https://chatgpt.com/share/6762c9c2-1620-8006-8698-2d5143176f66, https://chatgpt.com/share/6762d9a6-c038-8006-a810-40817bc7913f
// Modifications made by Aymane Boutahar
"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

/**
 *
 * @param {MouseEvent} eventData
 */

let balls = [];
let AmountOfBalls = 15;

drawBouncyBalls();

let mouseX = 0;
let mouseY = 0;

window.onmousedown = move;

function move(eventData) {
	mouseX = eventData.PageX;
	mouseY = eventData.PageY;
}

for (let i = 0; i < AmountOfBalls; i++) {
	//this code was partially generated with ChatGPT (OpenAI) on 18/12/2024

	let size = Utils.randomNumber(20, 100); // the radius of the balls
	let xPos = Utils.randomNumber(size, width - size);
	let yPos = Utils.randomNumber(size, height - size);
	let xSpeed = Utils.randomNumber(-10, 10); // horizontal speed
	let ySpeed = Utils.randomNumber(-10, 10); // vertical speed
	let color = RandomColor(); // generates a random color for the balls

	balls.push({ xPos, yPos, size, xSpeed, ySpeed, color });
}

function RandomColor() {
	let colors = ["red", "blue", "white", "purple", "orange"];
	return colors[Math.floor(Math.random() * colors.length)];
}

//checks if the balls hit the screen
function updateBalls(ball) {
	ball.xPos += ball.xSpeed;
	ball.yPos += ball.ySpeed;

	if (ball.xPos + ball.size > width || ball.xPos - ball.size < 0) {
		ball.xSpeed = -ball.xSpeed; // reverses the horizontal direction
		ball.color = RandomColor(); //changes color
	}

	if (ball.yPos + ball.size > height || ball.yPos - ball.size < 0) {
		ball.ySpeed = -ball.ySpeed; // reverses the vertical direction
		ball.color = RandomColor(); //changes color
	}
}

function drawBouncyBalls() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	//this code was partially generated with ChatGPT (OpenAI) on 18/12/2024
	for (let i = 0; i < balls.length; i++) {
		updateBalls(balls[i]); // updates the ball position and speed
		drawBall(balls[i]); // draws the ball
	}
	requestAnimationFrame(drawBouncyBalls); //loops this drawing
}

function drawBall(ball) {
	//steps to draw the circle
	context.beginPath();
	context.arc(ball.xPos, ball.yPos, ball.size, 0, Math.PI * 2, false); // draws the circle with a random radius and coordinate
	context.fillStyle = ball.color;
	context.fill();
}
