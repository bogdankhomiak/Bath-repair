'use strict';
$(document).ready(function () {
    $(function () {
        $("#rangeSlider").ionRangeSlider({
            type: "single",
            grid: true,
            min: 1,
            max: 10,
            from: 5.5,
            grid_num: 9,
            step: 0.5,
            hide_min_max: true,
            postfix: " м<sup>2</sup>"
        });
    });
    $(function () {
        $('.tabs__items').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
                .closest('.tabs').find('.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
        });
    });
    $(function () {
        $(".slider-js-1").owlCarousel({
            items: 1
        });
        $(".slider-js-2").owlCarousel({
            items: 1
        });

    });
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
            $(".header-nav").fadeOut(0);
            $(".icon__menu").toggleClass("active");
        })
    });
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
        var sld = function() {
            if ($(window).width() <= 767) {
                $(".slider-js-3").owlCarousel({
                    items: 1
                });
            } else {
                $(".slider-js-3").owlCarousel('destroy');
            }
        };
        sld();
        $(window).resize(sld);
    });
});