/** @format */

function how_hover(card, img_number) {
  $(card).hover(
    function () {
      $(this).find('.how_img').attr('src', './img/0' + img_number + '-white.png');
      $(this).css({
        cursor: 'pointer',
        'background-color': '#ffcc01',
      });
      $(this).find('.how_card-title').css('color', '#ffffff');
      $(this).find('.how_card-subtitle').css('color', '#ffffff');
      $(this).find('.how_card-link').css('color', '#ffffff');
      $(this).find('.how_card-underline').css('background-color', '#ffffff');
    },
    function () {
      $(this).find('.how_img').attr('src', './img/0' + img_number + '-black.png');
      $(this).css('background-color', '#ffffff');
      $(this).find('.how_card-title').css('color', '#1f373d');
      $(this).find('.how_card-subtitle').css('color', '#1f373d');
      $(this).find('.how_card-link').css('color', '#1f373d');
      $(this).find('.how_card-underline').css('background-color', '#1f373d');
    });
}

$(document).ready(function () {
  how_hover('.how_card-1', 1);
  how_hover('.how_card-2', 2);
  how_hover('.how_card-3', 3);
});