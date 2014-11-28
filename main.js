var $spaces = $('#my-ships td')
var $ship = $('.ship')
var fireBase = ('https://spencerbattleship.firebaseio.com/')

$(function() { 
    $ship.draggable({
      grid: [ 44, 44 ],
      containment: "#my-ships",
      snap: ('td'),
      tolerance: "touch",
      revert: "invalid"
    });
    $spaces.droppable({
      accept: $ship, 
      revert: "valid",
      tolerance: "touch",
      drop: function(event, ui) {
        var id = ui.draggable.attr('id');
        console.log(id)
      }
          });
    $("th").droppable({
      addClasses: false});
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

$('#ready').click(function(){
  $ship.draggable("destroy");
  alert("Battle Time!")
  $('button#ready').hide();
});
