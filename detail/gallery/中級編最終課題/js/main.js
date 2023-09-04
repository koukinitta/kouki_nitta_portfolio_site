$(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 801,
        settings: {
        slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


  $('.plus1,.minus1').on('click', function () {
    $('.ans__box1').slideToggle('none');
    $('.plus1').slideToggle('none');
    $('.minus1').slideToggle('none');
  });
  
  $('.plus2,.minus2').on('click', function () {
    $('.ans__box2').slideToggle('none');
    $('.plus2').slideToggle('none');
    $('.minus2').slideToggle('none');
  });
  
  $('.plus3,.minus3').on('click', function () {
    $('.ans__box3').slideToggle('none');
    $('.plus3').slideToggle('none');
    $('.minus3').slideToggle('none');
  });

  $('.plus4,.minus4').on('click', function () {
    $('.ans__box4').slideToggle('none');
    $('.plus4').slideToggle('none');
    $('.minus4').slideToggle('none');
  });
  
  $('.plus5,.minus5').on('click', function () {
    $('.ans__box5').slideToggle('none');
    $('.plus5').slideToggle('none');
    $('.minus5').slideToggle('none');
  });
  
  $('.plus6,.minus6').on('click', function () {
    $('.ans__box6').slideToggle('none');
    $('.plus6').slideToggle('none');
  $('.minus6').slideToggle('none');
  });
})