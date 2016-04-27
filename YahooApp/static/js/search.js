$(function() {
  $('.srch-button').hover(function(){
    var $wrapper = $('.srch-wrapper'),
        isOpen = $wrapper.hasClass('open');
    $wrapper.toggleClass('open')
    return false;
  });
})
