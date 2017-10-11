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
        var owl = $('.slider-js-1');
        owl.owlCarousel();
        $('.customNextBtn').click(function () {
            owl.trigger('next.owl.carousel');
        })
        $('.customPrevBtn').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });
        $(".slider-js-2").owlCarousel({
            items: 1
        });
        var owl = $('.slider-js-2');
        owl.owlCarousel();
        $('.customNextBtn2').click(function () {
            owl.trigger('next.owl.carousel');
        })
        $('.customPrevBtn2').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
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
            if ($(".header-nav-mob").is(":visible")) {
                $(".header-nav").fadeOut(0);
                $(".icon__menu").toggleClass("active");
            }
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
    $(function () {
        var sld = function () {
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
//////
/*
 function get_name_browser(){
 var ua = navigator.userAgent;
 if (ua.search(/.NET/) > 0) {
 $('.inp_range_1').addClass('ie_range');
 $('.inp_range_2').addClass('ie_range');
 $('.page_global').css('font-family', 'Open Sans');
 $('.page_success').css('font-family', 'Open Sans');
 }
 //CUSTOM INPUT (RANGE)
 $('document').ready(function (){
 function inp_1() {
 var inp_val = $('.inp_range_1').val();
 var inp_min = $('.inp_range_1').attr('min');
 var inp_max = $('.inp_range_1').attr('max');
 var inp_width = $('.inp_range_1').width();
 var count = (((inp_width / (inp_max - inp_min)) * inp_val) / inp_width) * 100 - ((100 / (inp_max - inp_min)) * inp_min);
 if (ua.search(/.NET/) < 0 && $('.inp_range_1').hasClass('test_input') == false) {
 $('.inp_range_1').css('background', 'linear-gradient(to right, #084b93 0%, #084b93 ' + count + '%, #707070 ' + count + '%, #707070 100%)');
 }
 if (ua.search(/.NET/) < 0 && $('.inp_range_1').hasClass('test_input') == true) {
 $('.inp_range_1').css('background', 'linear-gradient(to right, #fff 0%, #fff ' + count + '%, #ccc ' + count + '%, #ccc 100%)');
 }
 $('.bc_1').val(inp_val);
 $('.bc_1').change(function (){
 $('.inp_range_1').val($('.bc_1').val());
 })
 }
 function inp_2() {
 var inp_val = $('.inp_range_2').val();
 var inp_min = $('.inp_range_2').attr('min');
 var inp_max = $('.inp_range_2').attr('max');
 var inp_width = $('.inp_range_2').width();
 var count = (((inp_width / (inp_max - inp_min)) * inp_val) / inp_width) * 100 - ((100 / (inp_max - inp_min)) * inp_min);
 if (ua.search(/.NET/) < 0 && $('.inp_range_2').hasClass('test_input') == false) {
 $('.inp_range_2').css('background', 'linear-gradient(to right, #002357 0%, #002357 ' + count + '%, #ccc ' + count + '%, #ccc 100%)');
 }
 if (ua.search(/.NET/) < 0 && $('.inp_range_2').hasClass('test_input') == true) {
 $('.inp_range_2').css('background', 'linear-gradient(to right, #fff 0%, #fff ' + count + '%, #ccc ' + count + '%, #ccc 100%)');
 }
 $('.bc_2').val(inp_val);
 $('.bc_2').change(function (){
 $('.inp_range_2').val($('.bc_2').val());
 })
 }
 $('.bc_1').bind('click touch', function (){
 $('.bc_1').val('');
 });
 $('.bc_2').bind('click touch', function (){
 $('.bc_2').val('');
 });
 $(document).click(function(event) {
 if ($(event.target).closest(".bc_1").length) return;
 inp_1();
 event.stopPropagation();
 });
 $(document).click(function(event) {
 if ($(event.target).closest(".bc_2").length) return;
 inp_2();
 event.stopPropagation();
 });
 inp_1();
 inp_2();
 $('.bc_1').change(inp_1);
 $('.bc_2').change(inp_2);
 $('.inp_range_1').bind('mousemove click touchmove touchend', inp_1);
 $('.inp_range_2').bind('mousemove click touchmove touchend', inp_2);
 })
 }
 get_name_browser();
 function validate(inp) {
 inp.value = inp.value.replace(/[^\d,.]*!/g, '').replace(/([,.])[,.]+/g, '$1').replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');
 }
 */
