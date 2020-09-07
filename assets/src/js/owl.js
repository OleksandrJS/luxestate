/** @format */

$(document).ready(function () {
  $('.agents_cards').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    smartSpeed: 1000,
    margin: 28,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1140: {
        items: 3,
      },
    },
  });
});
