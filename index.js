let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

let c = canvas.getContext("2d");

function Circle(x, y, dX, dY, radius, color) {
  this.color = color;
  this.x = x;
  this.y = y;
  this.dX = dX;
  this.dY = dY;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dX = -this.dX;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dY = -this.dY;
    }

    this.x += this.dX;
    this.y += this.dY;
    this.draw();
  };
}

let colorArray = ['#2ecc71', '#e74c3c', '#2980b9', '#e67e22', '#8e44ad', '#30336b', '#f9ca24', '#6ab04c', '#f1f2f6', '#7bed9f'];
let objectArray = [];

for (let i = 0; i < 60; i++) {
  let radius = Math.random()*30+20;
  let temp = (Math.random()*10);
  console.log(temp);
  let colorPicker = Math.floor(temp);
  let x = Math.random() * (innerWidth - radius*2)+radius;
  let y = Math.random() * (innerHeight - radius*2)+radius;
  let dX = (Math.random() - 0.5) * 4;
  let dY = (Math.random() - 0.5) * 4;

  objectArray.push(new Circle(x, y, dX, dY, radius, colorArray[colorPicker]));}

function animation() {
  requestAnimationFrame(animation);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].update();
  }
}

animation();
