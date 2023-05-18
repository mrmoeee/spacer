const canvas = document.querySelector('#spacer');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;

const player = {
  x: 400,
  y: 300,
  color: "white",
  draw() {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - 10, this.y + 20);
    ctx.lineTo(this.x + 10, this.y + 20);
    ctx.lineTo(this.x, this.y);
    
    // triangle outline
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
player.draw();
