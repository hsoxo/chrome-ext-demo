var inject  = document.createElement('div');
inject.id = "roller"
document.body.insertBefore(inject, document.body.firstChild);

var style = document.createElement('link');
style.href = chrome.runtime.getURL('main.css');
style.rel = "stylesheet"
style.onload = function() {
  var js = document.createElement('script');
  js.src = chrome.runtime.getURL('main.js');
  js.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head||document.documentElement).appendChild(js);
};
(document.head||document.documentElement).appendChild(style);
