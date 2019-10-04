var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext("2d");

var brushSettings = {
  color = '#ffffff',
  size = 5
}

context.fillStyle = "blue";
context.fillRect(0, 0, canvas.width, canvas.height);