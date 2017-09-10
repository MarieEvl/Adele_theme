$(document).ready(function () {

    //////////////////// Wow Animations
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();




    /////////////////////MENU
    $('#menu_burger').on('click', function (e) {
        e.preventDefault();
        $('#menu_toggle').toggleClass('open');

        if ($('#menu_toggle').hasClass('open')) {
            $('.menu__cross').on('click', function () {
                $('#menu_toggle').removeClass('open');
            });

            $('.menu__link').on('click', function () {
                $('#menu_toggle').removeClass('open')
            });

        }
    });


    ////////////////////////Модальное окно для видео

    $('a[data-rel^=lightcase]').lightcase();




    //////////////////INGREDIENTS CHANGE

    function changeIngredient(row, info) {
        $(row).on('click', function () {
            $('.facts__about-ingredient:visible').css('visibility', 'hidden');
            $(info).css('visibility', 'visible');
        });
    }

    changeIngredient('#coffee-row', '#coffee');
    changeIngredient('#tea-row', '#tea');
    changeIngredient('#citrus-row', '#citrus');
    changeIngredient('#guarana-row', '#guarana');
    changeIngredient('#phenylalanine-row', '#phenylalanine');
    changeIngredient('#niacin-row', '#niacin');
    changeIngredient('#pepper-row', '#pepper');
    changeIngredient('#vitamin-row', '#vitamin');




    //dimensions
    //  $('.slides__item').width(width);
    //  $('.slides').width(width*$('.slides__item').length);
    //  
    //  //positioning
    //   $('.slides').css('left', -width);
    //   $('.slides>li:last-child').prependTo('.slides');
    //  
    //  //move slides forward
    //  function nextSlide() {
    //    $('.slides').animate({
    //      'margin-left':-width
    //    },500, function() {
    //      $('.slides>li:first-child').appendTo('.slides');
    //      $('.slides').css('margin-left', 0);
    //    });
    //  }
    //  //move slides backwards
    //  function prevSlide() {
    //    $('.slides').animate({
    //      'margin-left':width
    //    },500, function() {
    //      $('.slides>li:last-child').prependTo('.slides');
    //      $('.slides').css('margin-left', 0);
    //    });
    //  }
    //    
    //  //controls
    //  $('.next').click(nextSlide);
    //  $('.prev').click(prevSlide)



    /////////////////////Slider-Results
    var width = $('#slider-container').width();

    $('.slides__item').width(width);
    $('.slides').width(width * $('.slides__item').length);

    //positioning
    $('.slides').css('left', -width);

    $('.slides>li:last-child').prependTo('.slides');

    //move slides forward
    function nextSlide() {
        $('.slides').animate({
            'margin-left': -width
        }, 500, function () {
            $('.slides>li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }
    //move slides backwards
    function prevSlide() {
        $('.slides').animate({
            'margin-left': width
        }, 500, function () {
            $('.slides>li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }

    //controls
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide)




    ///////////////////Slider-Testimonials
    var widthTesti = $('#testimonials-slider-container').width();
    //     dimensions
    $('.testimonials__slides>li').width(widthTesti);
    $('.testimonials__slides').width(widthTesti * $('.testimonials__slides>li').length);

    //positioning
    $('.testimonials__slides').css('left', -widthTesti);
    $('.testimonials__slides>li:last-child').prependTo('.testimonials__slides');

    //move slides forward
    function nextSlideTesti() {
        $('.testimonials__slides').animate({
            'margin-left': -widthTesti
        }, 500, function () {
            $('.testimonials__slides>li:first-child').appendTo('.testimonials__slides');
            $('.testimonials__slides').css('margin-left', 0);
        });
    }
    //move slides backwards
    function prevSlideTesti() {
        $('.testimonials__slides').animate({
            'margin-left': widthTesti
        }, 500, function () {
            $('.testimonials__slides>li:last-child').prependTo('.testimonials__slides');
            $('.testimonials__slides').css('margin-left', 0);
        });
    }

    //controls
    $('.next-testi').click(nextSlideTesti);
    $('.prev-testi').click(prevSlideTesti)


});


///////////////////////    BUTTON TOP

$(window).scroll(function () {
        
    if ($(this).scrollTop() > 1200) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
    });
    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;

    });


    //Scroll Effects


