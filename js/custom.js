$(document).ready(function () {

    $('ul.nav li').on('click', function () {
        
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });


    //    //smooth scroll and active menu button code
    //    var html_body = $('html, body');
    //    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
    //        //for active menu button
    //        $(this).addClass('active').siblings().removeClass('active');
    //        //smooth scroll on menu click
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                html_body.animate({
    //                    scrollTop: target.offset().top - 0
    //                }, 1000);
    //                return false;
    //            }
    //        }
    //    });



    //    navbar code

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 350) {

            $(".navbar").addClass("active-navbar");
        } else {

            $(".navbar").removeClass("active-navbar");
        }

    });

  






});
