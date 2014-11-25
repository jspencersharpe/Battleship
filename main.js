$(function() { 
    $( ".ship" ).draggable({grid: [ 43, 43 ]});
    $( ".ship" ).draggable({ containment: ".Game-Board", scroll: false });
    $( ".ship" ).draggable({snap: "td tr", revert: "valid"});
    $( ".ship" ).droppable({accept: ".ship", tolerance: "touch"});
});

$('.ship').dblclick(function(){
var $ship = $(event.target);
$ship.toggleClass('flip');
event.preventDefault()
});

/*
$('#aircraft-carrier').on('click', function(e) {
    $( '.aircraft-carrier' ).toggleClass( "carrier-flip" );
    //e.preventDefault()
});
*/
