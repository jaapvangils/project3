// JavaScript
// MyFirstJS
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.fillStyle = "green";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

xMax = canvas.height;
let slope = 1.2;
let intercept = 70;

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "red";
ctx.stroke();

function f(x) {
  return x * slope + intercept;
}