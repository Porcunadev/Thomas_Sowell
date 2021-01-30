$(document).ready(function() {
    $(".animated_link").click(function() {
      $('html, body').animate({
        scrollTop: $('#test').offset().top
      },1000); 
    });
  });

$(document).ready(function(){
    $(".more").click(function() {
        $('html, body').animate({
            scrollTop:$('#test').offset().top
        },1000)
    });
});