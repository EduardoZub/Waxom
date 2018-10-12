"use strict";
$(document).ready(function() {

    // script for head slider START
    $('.section-head-slider').slick({
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000

    });
    // script for fixed header START
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $(".header").addClass("mode").fadeIn('fast');
        } else {
            $(".header").removeClass("mode").fadeIn('fast');
        };
    });
    // script for recent posts slider START
    $('.section-recent-posts-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000

    });

    // script for search START
    $(".icon-search").click(function() {
        $("body").toggleClass("show-search-field");
    });
    // script for burger menu START
    $(".header-burger,.close-icon").click(function() {
        $("body").toggleClass("show-menu");
        $(".section-head-content").removeClass("show-menu");
    });
    // script for tabs START
    $(".tab_item").not(":first").hide();
    $(".tabs-block .tab").click(function() {
        $(".tabs-block .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});