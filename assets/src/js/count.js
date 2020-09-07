/** @format */

$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

function animate_number(start_block, result_block, count_number, duration_number) {
  if (
    $(window).scrollTop() >
    $(start_block).position().top - $(window).height() &&
    $(result_block).text() == 0
  ) {
    setTimeout(function () {
      $({ numberValue: 0 }).animate(
        { numberValue: count_number },
        {
          duration: duration_number, easing: 'linear',
          step: function (val) { $(result_block).text(Math.ceil(val)); },
        });
    }, 200);
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    animate_number('.count1', '.count1', 748, 2000);
    animate_number('.count2', '.count2', 3854, 2000);
    animate_number('.count3', '.count3', 24, 2000);
    animate_number('.count4', '.count4', 14, 2000);
  });
});
