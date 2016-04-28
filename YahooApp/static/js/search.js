
$(window).scroll(function(e){
  var count=0;
  if(window.pageYOffset>=100 && count==0){
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    $('html,body').animate({
        scrollTop: $(".newsframe1").offset().top},
        'slow');
        count+=1;
        console.log(count);
        console.log(pageYOffset);
  } else if(window.pageYOffset>=950 && count==1){
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    $('html,body').animate({
        scrollTop: $(".logo").offset().top},
        'slow');
        count-=1;
  }
});
