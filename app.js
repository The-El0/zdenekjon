console.info('✅ app.js works');



//
//  DOM ready
//
document.addEventListener("DOMContentLoaded", function(){
  console.info('✅ DOMContentLoaded');
});




//
//  When the user scrolls down 80px from the top of the document,
//  resize the navbar's padding and the logo's font size
//
window.onscroll = function() {
  console.debug("scrollTop: " + document.documentElement.scrollTop);
  shrinkHeader();
};




//
//  Shrink Header onScroll
//
function shrinkHeader() {
  var scrollTop = 50;

  if ( document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop ) {
    document.body.classList.add("js__shrink-navigation");
  }
  else {
    document.body.classList.remove("js__shrink-navigation");
  }
}
