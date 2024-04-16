import Canvas from "../../Components/Canvas";

const width = innerWidth;
const height = innerHeight;
const canvas = new Canvas({ canvasId: "canvas", width, height });
const context = canvas.getContext();
const arrowX = width / 2;
const arrowY = height / 2;
const speed = 0.01;
const baseRadius = 200;
let dx = 0;
let dy = 0;
let angle = 0;
let x = 0;
let y = 0;
let circleAngle = 0;

const render = () => {
  context?.clearRect(0, 0, width, height);
  x = arrowX + Math.cos(circleAngle) * baseRadius;
  y = arrowY + Math.sin(circleAngle) * baseRadius;

  context?.save();
  context?.translate(x, y);
  context?.rotate(angle);

  context?.beginPath();
  context?.moveTo(20, 0);
  context?.lineTo(-20, 0);
  context?.moveTo(20, 0);
  context?.lineTo(10, -10);
  context?.moveTo(20, 0);
  context?.lineTo(10, 10);
  context?.stroke();

  circleAngle += speed;
  context?.restore();
  requestAnimationFrame(render);
};

document.body.addEventListener("mousemove", (e) => {
  dx = e.clientX - arrowX;
  dy = e.clientY - arrowY;
  angle = Math.atan2(dy, dx);
});

render();
