var mixer = mixitup('.p_mix_it');

new VenoBox();

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:'<span class="prevArrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="nextArrow"><i class="fa-solid fa-angle-right"></i></span>',
    centerMode: true,
    centerPadding: '0',

    responsive: [
        {
          breakpoint: 912,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
          }
        }
      ]
  });