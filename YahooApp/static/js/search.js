
$(window).scroll(function(){
  var $searchbar = $('.srch-bar').height();
  if($(this).scrollTop() == $searchbar){
    window.scrollTo(0, 500);
    return false;
    };
});
