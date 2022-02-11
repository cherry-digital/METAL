$('.slideshow-references').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-references",
    appendDots: ".slideshow-dots-references",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});

$('.slideshow-clients').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-clients",
    appendDots: ".slideshow-dots-clients",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
    }
        ]
});
