$(document).ready(function() {

$(".textinput input").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})


$(".textinput select").change(function() {
  if ($(this).val() != "") {
    $(this).addClass('filled');
  } else {
    $(this).removeClass('filled');
  }
})


//make action on click
$('.dropbtn').click(function(){

  //stop default & pass my action
  event.preventDefault();

  //make dropdown menu slide down from nav
  $('#myDropdown').slideToggle();

  //make dropdown menu stay active after click
  $(this).toggleClass('active');
})

});
