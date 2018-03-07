function getPosition(elem) {
  var distanceFromTop = 0;
  while(elem) {
    distanceFromTop += (elem.offsetTop + elem.clientTop);
    elem = elem.offsetParent;
  }
  return distanceFromTop;
}
//This tells us when element is even partially visible on the screen
function isVisibleOnScreen(elem) {
    var screenTop = /MSIE \d|Trident.*rv:/.test(navigator.userAgent) ? document.querySelector('html').scrollTop : window.scrollY;
    var screenBottom = screenTop + window.innerHeight;
    var elemTop = getPosition(elem);
    var elemBottom = elemTop + elem.offsetHeight;
    return ((screenTop <= elemBottom) && (screenBottom >= elemTop) );
}

//This tells us when element is visible on the screen from top til bottom
function isFullyVisibleOnScreen(elem) {
    var screenTop = /MSIE \d|Trident.*rv:/.test(navigator.userAgent) ? document.querySelector('html').scrollTop : window.scrollY;
    var screenBottom = screenTop + window.innerHeight;
    var elemTop = getPosition(elem);
    var elemBottom = elemTop + elem.offsetHeight;
    return ((elemBottom <= screenBottom) && (elemTop >= screenTop));
}
