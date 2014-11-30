var $spaces = $('#my-ships td')
var $ship = $('.ship')
var fireBase = ('https://spencerbattleship.firebaseio.com/')

//draggable and droppable
$(function() { 
    $ship.draggable({
      grid: [ 44, 44 ],
      containment: "#my-ships",
      snap: 'td',
      snapMode: "inner",
      tolerance: "touch",
      revert: "invalid",
    });
    $spaces.droppable({
      accept: $ship, 
      //revert: "valid",
      greedy: true,
      tolerance: "touch",
      drop: function(event, ui) {
        var getID = event.target.id;
        console.log(getID);
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
  //var $choice = $(this).get(0).id;
  var $choice = $(this).attr('id');
  $('.targets').removeClass('highlighted');
  $(this).addClass('highlighted');
  e.stopPropagation();
  console.log($choice);
      return $choice;
});


$('#fire').click(function(e){
  var $highLight = $('td').hasClass('highlighted');
  if ($highLight === true) {
  $('td').removeClass('highlighted');
  //$('td').removeClass('red');
  $('.target:selected').addClass('red');
  e.stopPropagation();
  }

});

//disables draggable
$('#ready').click(function(){
  $ship.draggable("destroy"); 
  alert("Battle Time!")
  $('button#ready').hide();
});
