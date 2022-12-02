$(document).ready(function(){
  $('#btn-icon-map').click(function(){
    $('#div-opened-map').slideDown();
    $('#btn-icon-map').slideUp();
  })
  && $('#btn-icon-file').click(function(){
    $('#div-opened-file').slideDown();
    $('#btn-icon-file').slideUp();
  })
  && $('#btn-icon-group').click(function(){
    $('#div-opened-group').slideDown();
    $('#btn-icon-group').slideUp();
  })

  $('#div-opened-map').click(function(){
    $('#btn-icon-map').slideDown();
    $('#div-opened-map').slideUp();
  })
  && $('#div-opened-file').click(function(){
    $('#btn-icon-file').slideDown();
    $('#div-opened-file').slideUp();
  })
  && $('#div-opened-group').click(function(){
    $('#btn-icon-group').slideDown();
    $('#div-opened-group').slideUp();
  })

  // change styles at click on btn-yellow and return the style when click on btn-minus

  $('.btn-yellow').click(function(){
    $('.plus-yellow').hide();
    $('.minus-yellow').show();
    $('.cicle-text').css('background-color', '#ffcc33')  
    $('.cicle-text').css('color', '#000')  
    $('.color-yellow').css('display', 'block')
    $('.cicle-text span').css('display', 'none')
  })

  $('.btn-yellow-minus').click(function(){
    $('.plus-yellow').show();
    $('.minus-yellow').hide();
    $('.cicle-text').css('background-color', '#fff')
    $('.cicle-text').css('color', '#000')
    $('.color-yellow').css('display', 'none')
    $('.cicle-text span').css('display', 'block')
  })

  $('.btn-red').click(function(){
    $('.plus-red').hide()
    $('.minus-red').show()
    $('.cicle-text').css('background-color', '#ff3737')
    $('.cicle-text').css('color', '#fff')
    $('.color-red').css('display', 'block')
    $('.cicle-text span').css('display', 'none')
  })

  $('.btn-red-minus').click(function(){
    $('.plus-red').show()
    $('.minus-red').hide()
    $('.cicle-text').css('background-color', '#fff')
    $('.cicle-text').css('color', '#000')
    $('.color-red').css('display', 'none')
    $('.cicle-text span').css('display', 'block')
  })
  
  $('.btn-grey').click(function(){
    $('.plus-grey').hide();
    $('.minus-grey').show();
    $('.cicle-text').css('background-color', '#707070')
    $('.cicle-text').css('color', '#fff')
    $('.color-grey').css('display', 'block')
    $('.cicle-text span').css('display', 'none')
  })

  $('.btn-grey-minus').click(function(){
    $('.plus-grey').show();
    $('.minus-grey').hide();
    $('.cicle-text').css('background-color', '#fff')
    $('.cicle-text').css('color', '#000')
    $('.color-grey').css('display', 'none')
    $('.cicle-text span').css('display', 'block')
  })
});
