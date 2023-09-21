new WOW().init();

$(function(){
  $('.hbg').on('click',function(){
    $('.drawer').toggleClass('open');
  });
  $('.drawer__menu').on('click',function(){
    $('.drawer').removeClass('open');
  });


  
	setTimeout(function(){
    $('.loader-wrap').fadeOut();
  },2500);

  
});