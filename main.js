$(function() { 
    $( "#ship" ).draggable({ grid: [ 40, 40 ] });
    $( "#ship" ).draggable({ containment: "#my-ships", scroll: false });
    
});


