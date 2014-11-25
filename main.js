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

//$('.targets').click(function() {
  //td highlights yellow
//});
//$('#fire').click(function(){
  //td turns red and sends message to firebase
//});


