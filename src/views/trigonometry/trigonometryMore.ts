import Canvas from "../../Components/Canvas";

const width = innerWidth;
const height = innerHeight;
const canvas = new Canvas({ canvasId: "canvas", width, height });

const context = canvas.getContext();
const centerY = height * 0.5;
const centerX = width * 0.5;
const baseRadius = 100;
const offset = 50;
const speed = 0.05;
let angle = 0;

const render = () => {
  let radius = baseRadius + Math.sin(angle) * offset;

  context?.clearRect(0, 0, width, height);
  context?.beginPath();
  context?.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
  context?.fill();

  angle += speed;

  requestAnimationFrame(render);
};

render();
