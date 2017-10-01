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
});