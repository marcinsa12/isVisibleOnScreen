 function isVisibleOnScreen(el)
 {
     var screenTop = window.scrollY;
     var screenBottom = screenTop + window.innerHeight;
     var elementTop = el.offsetTop;
     var elementBottom = elementTop + el.offsetHeight;
     return ((screenTop <= elementBottom) && (screenBottom >= elementTop) ); //gives TRUE when even small part of the element is on the screen.
   //  return ((elementBottom <= screenBottom) && (elementTop >= screenTop)); // gives TRUE when whole element is visible on the screen.
}
 
