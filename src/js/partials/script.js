'use strict';
$(document).ready(function () {
    //TABS
    $(function () {
        $('.tabs__items').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
                .closest('.tabs').find('.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
        });
    });
    //SLIDER 1
    $(function () {
        $(".slider-js-1").owlCarousel({
            items: 1
        });
        var owl = $('.slider-js-1');
        owl.owlCarousel();
        $('.customNextBtn').click(function () {
            owl.trigger('next.owl.carousel');
        });
        $('.customPrevBtn').click(function () {
            owl.trigger('prev.owl.carousel');
        });
    });
    //SLIDER 2
    $(function () {
        $(".slider-js-2").owlCarousel({
            items: 1,
            nav: false
        });
        var owl = $('.slider-js-2');
        owl.owlCarousel();
        $('.customNextBtn2').click(function () {
            owl.trigger('next.owl.carousel');
        });
        $('.customPrevBtn2').click(function () {
            owl.trigger('prev.owl.carousel');
        });

    });
    //SLIDER 3
    $(function () {
        var slider3 = function () {
            if ($(window).width() <= 767) {
                $(".slider-js-3").owlCarousel({
                    items: 1
                });
            } else {
                $(".slider-js-3").owlCarousel('destroy');
            }
        };
        slider3();
        $(window).resize(slider3);
    });
    //MENU MOB
    $(function () {
        $(".header-nav-mob").click(function () {
            $(".icon__menu").toggleClass("active");
            if ($(".header-nav").is(":visible")) {
                $(".header-nav").fadeOut(0);
            } else {
                $(".header-nav").fadeIn(0);
            }
        });

        $(".header-nav__link").click(function () {
            if ($(".header-nav-mob").is(":visible")) {
                $(".header-nav").fadeOut(0);
                $(".icon__menu").toggleClass("active");
            }
        })
    });
    //TABS MOB
    $(function () {
        $(".tabs__item").click(function () {
            $(".tabs__items").toggleClass("selected");
        });
    });
    $(function () {
        $(".list").click(function () {
            $(".list").not(this).removeClass("on");
            $(this).toggleClass("on");
        });
    });
    $(function () {
        $(".portfolio__name").click(function () {
            $(".portfolio__name").not(this).removeClass("on");
            $(this).toggleClass("on");
        });
    });
    $(function () {
        $(".list__all-btn").click(function () {
            if ($(".tabs-block_primary .list").hasClass("close")) {
                $(this).html('Скрыть полный перечень');
                $(".close").addClass("open");
                $(".close").removeClass("close");
            }
            else if ($(".list").hasClass("open")) {
                $(this).html('Смотреть полный перечень');
                $(".open").addClass("close");
                $(".open").removeClass("open");
            }
        });
    });
    //INPUT RANGE
    $(function () {
        function inpScale() {
            var inpValue = $('.range-slider__scale').val();
            var inpMin = $('.range-slider__scale').attr('min');
            var inpMax = $('.range-slider__scale').attr('max');
            var inpWidth = $('.range-slider__scale').width();
            var count = (((inpWidth / (inpMax - inpMin)) * inpValue) / inpWidth) * 100 - ((100 / (inpMax - inpMin)) * inpMin);
            $('.range-slider__scale').css('background', 'linear-gradient(to right, #084b93 0%, #084b93 ' + count + '%, #707070 ' + count + '%, #707070 100%)');
            $('.rangeValue').val(inpValue);
            $('.rangeValue').change(function () {
                $('.range-slider__scale').val($('.rangeValue').val());
            })
        }
        $('.rangeValue').bind('click touch', function () {
            $('.rangeValue').val('');
        });
        $(document).click(function (event) {
            if ($(event.target).closest(".rangeValue").length) return;
            inpScale();
            event.stopPropagation();
        });
        inpScale();
        $('.rangeValue').change(inpScale);
        $('.range-slider__scale').bind('mousemove click touchmove touchend', inpScale);
        function validate(inp) {
            inp.value = inp.value.replace(/[^\d,.]*!/g, '').replace(/([,.])[,.]+/g, '$1').replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');
        }
    });
    //MENU SCROLL
    $(function () {
        $(function () {
            $(".scroll").on("click touch", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top - 80;
                var head_height = String(Number($('.header-top').css('height').substring(0, $('.header-top').css('height').length - 2)))
                if (w_d <= 767) {
                    top = $(id).offset().top - head_height + 1;
                }
                $('body,html').animate({scrollTop: top}, 1000);
            });
        });
        $('.scroll > a').on('click touch', function () {
            if (this.hash) $(document).data('h', 1);
        });
        $(document).scroll(function () {
            if ($(this).data('h')) $(this).data('h', 0).scrollTop($(this).scrollTop() - 200);
        });
        $(window).resize();
    });
});

//MENU
var w_d = $(window).width();
$(document).ready(function () {
    var $menu = $(".header-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("navbar-fixed-top");
            var head_height = String(Number($('.header-top').css('height').substring(0, $('.header-top').css('height').length - 2))) + 'px';
            $('.header-main').css('margin-top', head_height);
            if (w_d <= 767) {
                $('.header-main').css('margin-top', head_height);
            }
        }
        else if ($(this).scrollTop() <= 100 && $menu.hasClass("navbar-fixed-top")) {
            $menu.removeClass("navbar-fixed-top").addClass("default");
            $('.header-main').css('margin-top', '0px');
        }
    });
});
