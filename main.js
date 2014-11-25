$(function() { 
    $( ".ship" ).draggable({grid: [ 40, 40 ]});
    $( ".ship" ).draggable({ containment: ".Game-Board", scroll: false });
    $( ".ship" ).draggable({snap: "td tr", revert: "valid"});
    $( ".ship" ).droppable({accept: ".ship", tolerance: "touch"});
});

/*
$('#aircraft-carrier').on('click', function(e) {
    $( '.aircraft-carrier' ).toggleClass( "carrier-flip" );
    //e.preventDefault()
});
*/
