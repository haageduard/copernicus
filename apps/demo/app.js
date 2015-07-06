function onStart() {
  var demoView = findViewById('l');
  var tv1 = new KTextView();
  tv1.setText('Hello, world!');
  tv1.setPaddingLeft(5);
  tv1.setPaddingRight(5);
  demoView.addView(tv1);
}

function onStop(reason) {
}
