var canvas = document.getElementById("radarCanvas");
if (canvas.getContext)
{
  var ctx = canvas.getContext("2d");
  // ctx.scale(1.8, 1.8);
  drawAxis(ctx, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 20, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 60, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 100, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 140, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 180, 2, '#03CC00');
  drawCircle(ctx, 300, 300, 200, 8, '#03CC00');
}

function drawLine(context, beginX, beginY, endX, endY, thickness, color) {
  context.beginPath();
  context.moveTo(beginX, beginY);
  context.lineTo(endX, endY);
  context.lineWidth = thickness;
  context.strokeStyle = color;
  context.stroke();
  context.closePath();
}

function drawCircle(context, centerX, centerY, radius, thickness, color) {
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.lineWidth = thickness;
  context.strokeStyle = color;
  context.stroke();
  context.closePath();
}

function drawAxis(context, thickness, color) {
  drawLine(context, 50, 300, 550, 300, thickness, color);
  drawLine(context, 300, 50, 300, 550, thickness, color);
}
