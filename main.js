$(function() { 
    $( ".ship" ).draggable({grid: [ 43, 43 ]});
    $( ".ship" ).draggable({ containment: "#my-ships", scroll: false });
    $( ".ship" ).draggable({snap: "td tr", revert: "valid"});
    $( ".ship" ).droppable({accept: ".ship", tolerance: "touch"});
});

$('.ship').dblclick(function(){
var $ship = $(event.target);
$ship.toggleClass('flip');
event.preventDefault()
});

$('.targets').click(function(e) {
  $('.targets').removeClass('highlighted');
  $(this).addClass('highlighted');
  e.stopPropagation();
  //var choice;
  //return choice;
});

$('#fire').click(function(e){
  //td turns red and sends message to firebase
  //if (('highlighted') === true);  
  $('.targets').removeClass('highlighted');
  $(this).addClass('red');  
  e.stopPropagation();
});


