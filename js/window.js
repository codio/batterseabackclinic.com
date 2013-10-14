var _POPUP_FEATURES = '
  location=0,
  statusbar=0,
  menubar=0,
  width=400,
  height=300
';

function raw_popup(url, target, features) {
  if (isUndefined(features)) {
    features = _POPUP_FEATURES;
  }
  if (isUndefined(target)) {
    target = '_blank';
  }
  var theWindow =
    window.open(url, target, features);
  theWindow.focus();
  return theWindow;
}

function link_popup(src, features) {
  return
    raw_popup(src.getAttribute('href'),
    src.getAttribute('target') || '_blank',
    features);
}