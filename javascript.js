$(document).ready(function() {
    // Initialize Slick Carousel for Featured Category section
    $('.featured-carousel').slick({
        slidesToShow: 4, // Show 4 items at a time
        slidesToScroll: 2, // Scroll 2 items at a time
       autoplay: true, // Enable autoplay
       autoplaySpeed: 4000, // Set autoplay interval to 4 seconds
       infinite: true, // Loop infinitely
       arrows: true, // Show navigation arrows
       dots: true, // Show navigation dots
       responsive: [
    {
      breakpoint: 1024, // Adjust settings for screens with max width 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false, // Hide arrows
      }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialize Slick Carousel for Biography Books section
    $('.biography-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
