function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.first = first;
}

Symbol.prototype.setToRandomSymbol = function() {
  this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
}

Symbol.prototype.show = function() {
  if(this.first) {
    fill(180, 255, 180);
  } else {
    fill(0, 255, 70);
  }
  text(this.value, this.x, this.y);
}

Symbol.prototype.update = function() {
  this.y += this.speed;
  if(random() < 0.04) {
    this.setToRandomSymbol();
  }
}

Symbol.prototype.edges = function() {
  if(this.y > height) {
    this.y = 0;
  }
}
