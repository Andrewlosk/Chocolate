$('.slick__slider').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
        breakpoint:1200, 
        settings:{
            slidesToShow: 3,

        }

    },
    {
        breakpoint: 768,
        settings:{
            slidesToShow:1,
        }
    }


  ]
});
