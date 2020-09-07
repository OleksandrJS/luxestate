/** @format */

$(document).ready(function () {
  $('.nav_btn').on('click', function () {
    $('.nav_btn').removeClass('nav-active');
    $(this).addClass('nav-active');
  });
  $('.logo').on('click', function () {
    $('.nav_btn').removeClass('nav-active');
  });

  $('.header-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    $('.mobile_nav').toggleClass('active-bg');
  });
});