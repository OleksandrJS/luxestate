/** @format */

$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('.wrapper_nav').addClass('whiteBG');
      $('.wrapper_nav').removeClass('container');
      $('.header').css('margin-top', '0px');
      $('.header_hero').addClass('padding-mobile-226');
      $('.header_img-bg').css('top', '94px');
    } else {
      $('.wrapper_nav').removeClass('whiteBG');
      $('.wrapper_nav').addClass('container');
      $('.header').css('margin-top', '26px');
      $('.header_hero').removeClass('padding-mobile-226');
      $('.header_img-bg').css('top', '27px');
    }
  });
});