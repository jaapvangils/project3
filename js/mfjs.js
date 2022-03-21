// JavaScript
// MyFirstJS
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let slope = 1.2;
let intercept = 70;

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "blue";
ctx.stroke();

function f(x) {
  return x * slope + intercept;
}