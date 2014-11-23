$(function() { 
    $( ".ship" ).draggable({ grid: [ 40, 40 ] });
    $( ".ship" ).draggable({ containment: "#my-ships", scroll: false });
});

$('div#aircraft-carrier').toggle(
function(){
    $( this ).addClass( "carrier-sideways" );
},
function(){
    $( this ).removeClass( "carrier-sideways" );
});


