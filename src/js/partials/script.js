'use strict';
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