$(document).ready(function() {
  $('#menu-button').on('click', function() {
    $('.collapse').slideToggle();
    $(this).toggleClass('open');
  })
})
