function KWidget() {

  var _paddingTop = 0;
  var _paddingLeft = 0;
  var _paddingBottom = 0;
  var _paddingRight = 0;
  var _marginTop = 0;
  var _marginLeft = 0;
  var _marginBottom = 0;
  var _marginRight = 0;
  
}

KWidget.prototype.setPaddingTop(a) {
  this._paddingTop = a;
}

KWidget.prototype.setPaddingLeft(b) {
  this._paddingLeft = b;
}

KWidget.prototype.setPaddingBottom(c) {
  this._paddingBottom = c;
}

KWidget.prototype.setPaddingRight(d) {
  this._paddingRight = d;
}

KWidget.prototype.setMarginTop(a) {
  this._marginTop = a;
}

KWidget.prototype.setMarginLeft(b) {
  this._marginLeft = b;
}

KWidget.prototype.setMarginBottom(c) {
  this._marginBottom = c;
}

KWidget.prototype.setMarginRight(d) {
  this._marginRight = d;
}

KWidget.prototype.setPadding = function(a, b, c, d) {
  this.setPaddingTop(a);
  this.setPaddingLeft(b);
  this.setPaddingBottom(c);
  this.setPaddingRight(d);
}

KWidget.prototype.setMargin = function(a, b, c, d) {
  this.setMarginTop(a);
  this.setMarginLeft(b);
  this.setMarginBottom(c);
  this.setMarginRight(d);
}

KWidget.prototype.getPlugins = function() {
}
