function KProgressDialog = function() {
  var _progressBarValue = 0;
  var _isProgressBarVisible = false;
  var _text = '';
  var _isCancelable = true;
}

KProgressDialog.prototype.showProgressBar(v) {
  _isProgressBarVisible = v;
}

KProgressDialog.prototype.setProgressBarValue(value) {
  this._progressBarValue = value;
}

KProgressDialog.prototype.show = function() {
}

KProgressDialog.prototype.hide = function() {
}

KProgressDialog.prototype.setText = function(text) {
  this.text = _text;
}

KProgressDialog.prototype.setCancelable = function(v) {
  this.isCancelable = v;
}

KProgressDialog.prototype.onCancel = function() {
}
