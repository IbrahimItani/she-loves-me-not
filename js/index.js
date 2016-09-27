
(function() {

  var parallaxObj, scrollToThis, interval;

  parallaxObj = $('.parallax');
  parallaxObj2 = $('.parallax2');
  parallaxObj3 = $('.parallax3');

  scrollToThis = parallaxObj.height();
  scrollToThis2 = parallaxObj.height(); 
  scrollToThis3 = parallaxObj.height(); 


  function scroll() {

    parallaxObj.animate({
      scrollTop: scrollToThis
    }, 2000);

    parallaxObj2.animate({
      scrollTop: scrollToThis2
    }, 2000);

    parallaxObj2.animate({
      scrollTop: scrollToThis3
    }, 2000);
    
    if(scrollToThis === 0){
      scrollToThis = parallaxObj.height();
      scrollToThis2 = parallaxObj.height();
      scrollToThis3 = parallaxObj.height();

    }else{
      scrollToThis = 0;
      scrollToThis2 = 0;
      scrollToThis3 = 0;
    }
  }
  
  scroll();

  interval = setInterval(function() {
    scroll();
  }, 2000);
  
  $('body').on('mouseover', function(){
    clearInterval(interval);
  });

}());