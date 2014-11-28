var $spaces = $('#my-ships td')
var $ship = $('.ship')

$(function() { 
    $ship.draggable({grid: [ 44, 44 ]});
    $ship.draggable({ containment: "#my-ships", scroll: false });
    $ship.draggable({snap: "td tr", revert: "valid"});
    $ship.droppable({accept: $ship, tolerance: "touch"});
    $("th").droppable({addClasses: false});
    });

//Rotates ships
$('.ship').dblclick(function(){
var $ship = $(event.target);
$ship.toggleClass('flip');
event.preventDefault()
});

//Yellow Highlighting
$('.targets').click(function(e) {
  var $choice = $(event.target);
  $('.targets').removeClass('highlighted');
  $(this).addClass('highlighted');
  e.stopPropagation();
      return $choice;
});

$('#fire').click(function(e){
  var $highLight = $('td').hasClass('highlighted');
  if ($highLight === true) {
  $('td').removeClass('highlighted');
  $('.target:selected').addClass('red');
  console.log("works");
  e.stopPropagation();
  }
});

//filter(":selected").

