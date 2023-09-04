const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();


$(function() {
  $('.drawer__icon').on('click',function(e) {
    e.preventDefault();
    $('.drawer__icon').toggleClass('is-active')
    $('.drawer-content').toggleClass('is-active')
    $('.drawer__back').toggleClass('is-active')
  })

  $('a[href*="#"]').click(function() {
    let header = $('.header').innerHeight();
    let way = $(this).attr('href');
    let position = $(way).offset().top - header;
    $('body,html').animate({scrollTop: position}, 300);
    return false
  });

  $(window).scroll(function(){
    if(100 < $(this).scrollTop()){
      $('.to-top').addClass('is-show');
    } else {
      $('.to-top').removeClass('is-show');
    }
  })
});