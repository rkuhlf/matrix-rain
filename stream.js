function Stream(x) {
  this.symbols = [];
  this.x = x;
  this.totalSymbols = round(random(5, (height/symbolSize)-1));
  this.speed = random(5, 10);
}

Stream.prototype.generateSymbols = function() {
  var y = random(height);
  var x = this.x;

  var first = random() < 0.5;
  for (var i = 0; i <= this.totalSymbols; i++) {
    symbol = new Symbol(x, y, this.speed, first);
    symbol.setToRandomSymbol();
    this.symbols.push(symbol);
    y -= symbolSize;
    first = false;
  }
}

Stream.prototype.render = function() {
  for (var i = 0; i < this.symbols.length; i++) {
    this.symbols[i].show();
    this.symbols[i].update();
    this.symbols[i].edges();
  }
}
