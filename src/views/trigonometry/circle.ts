import Canvas from "../../Components/Canvas";

const width = innerWidth;
const height = innerHeight;
const canvas = new Canvas({ canvasId: "canvas", width, height });
const context = canvas.getContext();

const centerX = width / 2;
const centerY = height / 2;

const radius = 200;
const speed = 0.01;
let angle = 0;
let x = 0;
let y = 0;

const render = () => {
  context?.clearRect(0, 0, width, height);
  x = centerX + Math.cos(angle) * radius;
  y = centerY + Math.sin(angle) * radius;
  context?.beginPath();
  context?.arc(x, y, 10, 0, Math.PI * 2, false);
  context?.fill();

  angle += speed;
  requestAnimationFrame(render);
};

render();
