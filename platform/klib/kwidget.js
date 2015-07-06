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

KWidet.prototype.setPadding = function(a, b, c, d) {
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
