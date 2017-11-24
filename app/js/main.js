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
  $('#topsend-btn, #bottomsend-btn').click(function(){
    $('.modal').css('display', 'flex');
    return false;
  });
  $('#send_end').click(function(){
    $('.modal').css('display', 'none');
    return false;
  });

  $('.send-btn').click(function(e){
    e.preventDefault();

    var form = $('.send_form');
    // console.log(form.attr('method'));

    $.ajax({
      method: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success: function(data) {
        // console.log(data);
        $('.modal').css('display', 'flex');
      },
      error: function(e){
        $('.modal__body').text('Error');
        $('.modal').css('display', 'flex');
      }
    });
  });

});