

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

    setTimeout(() => {
        $('.preloder').fadeOut();
    }, 2000);
