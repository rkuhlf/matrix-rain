var symbolSize = 16;
var streams = [];
var toggle = true;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(symbolSize);
  for(var i = 0; i < width; i+=symbolSize) {
    var stream = new Stream(i);
    stream.generateSymbols();
    streams.push(stream);
  }
}

function draw() {
  if(toggle) {
    background(0, 120);
    for (var i = 0; i < streams.length; i++) {
      streams[i].render();
    }
  }
}

function mousePressed() {
  toggle = !toggle;
}
