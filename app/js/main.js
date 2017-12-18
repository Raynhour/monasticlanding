$('document').ready(function(){
  $('#theses-nav').click(function(){
        $('html, body').animate({
        scrollTop: $("#theses").offset().top
    }, 1000);
  })
  $('#speakers-nav').click(function(){
    $('html, body').animate({
    scrollTop: $("#speakers").offset().top
}, 1000);
})
  $('#getstarted-nav').click(function(){
    $('html, body').animate({
    scrollTop: $("#getstarted").offset().top
  }, 1000);
  })
  $('#contacts-nav').click(function(){
    $('html, body').animate({
    scrollTop: $("#footer").offset().top
  }, 1000);
  })
  // $('#topsend-btn, #bottomsend-btn').click(function(){
  //   // $('.modal').css('display', 'flex');
  //   // return false;
  // });
  $('#send_end').click(function(){
    $('.modal').css('display', 'none');
    return false;
  });
  var form = $('.send_form');
  $('.send_form').submit(function(event){
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {
          $('.modal').css('display', 'flex');
        },
        error: function(event){
          $('.modal__body').text('Error');
          // $('.modal').css('display', 'flex');
        }
      });
    
  });

});
