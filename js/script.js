

$(document).ready(function(){

    $(".navbar-toggler").click(function(){
        $(".bars_close").toggleClass('fa-bars fa-times')
    });

});


    $(document).ready(function(){

        $('#m_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });

    });



    $(document).ready(function(){
        $('#client').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    });

    $(document).ready(function(){
        
        // $(".submenu").hide();
        $('.main_menu>li>a').click(function(){
            $(this).next('.submenu').slideToggle();
            $("submenu").show();
        });

        $(window).scroll(function(){
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();

            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
            });


            $('.bottom_top').click(function(){
                $('html, body').animate({
                  scrollTop: '0px'
                },500);
                return false;
            })
          
            $('.bottom_top').hide();
            $(window).scroll(function(){
                if ($(window).scrollTop() > 100) {
                $('.bottom_top').fadeIn();
                }
                else{
                $('.bottom_top').fadeOut();
                }
            })

    });

    setTimeout(() => {
        $('.preloder').fadeOut();
    }, 2000);

    
