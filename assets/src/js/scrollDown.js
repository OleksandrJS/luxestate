/** @format */

$(document).ready(function () {
  $('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 90 }, 1000);
    }
  });
});
