$(function(){
  $('#btn1').click(function(){
    if($('h1').hasClass('show')){
      $('h1').removeClass('show');
    }else{
      $('h1').addClass('show');
    }
  });
});