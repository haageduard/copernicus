/* Вызывается при создании приложения */
function onCreate() {
  var demoView = findViewById('l');
  var tv1 = new KTextView();
  tv1.setText('Hello, world!');
  tv1.setPaddingLeft(5);
  tv1.setPaddingRight(5);
  demoView.addView(tv1);
}

/* Вызывается при закрытии приложения */
function onDestroy() {
}

