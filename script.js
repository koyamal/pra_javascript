$(function(){
  $('.method').click(function(){
    var $method = $(this).find('.hide_content');
    if($method.hasClass('show')){
      $method.removeClass('show');
      $(this).find('span').text('+');
    }else{
      $method.addClass('show');
      $(this).find('span').text('-');
    }
  });

  $('#trg_fadeout').hover(
    function(){
      $('#tgt_fadeout').fadeOut();
    },
    function(){
      $('#tgt_fadeout').fadeIn();
    }
  );

  $('#trg_css').hover(
    function(){
      $('#tgt_css').css('color', 'red');
    },
    function(){
      $('#tgt_css').css('color', 'black');
    }
  );

  $('#trg_text').hover(
    function(){
      $('#tgt_text').text('Hello JQuery!');
    },
    function(){
      $('#tgt_text').text('Hello World!');
    }
  );
});