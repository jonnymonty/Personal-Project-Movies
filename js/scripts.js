function addHeaderSlider() {
  $('.movie-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: $('.next'),
    prevArrow: $('.prev')
  });
}

function addUpcomingSlider() {
  $('.upcoming-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: $('.upcomingNext'),
    prevArrow: $('.upcomingPrev'),
    responsive: [{
        breakpoint: 1270,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function addPopularSlider() {
  $('.popular-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: $('.popularNext'),
    prevArrow: $('.popularPrev'),
    responsive: [{
        breakpoint: 1270,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function addTopRatedSlider() {
  $('.topRated-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: $('.topRatedNext'),
    prevArrow: $('.topRatedPrev'),
    responsive: [{
        breakpoint: 1270,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function addCastSlider() {
  $('.cast-slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: $('.castNext'),
    prevArrow: $('.castPrev'),
    responsive: [{
        breakpoint: 1270,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}