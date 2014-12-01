//my activity

var $spaces = $('#my-ships td');
var $ship = $('.ship');
var fireBase = ('https://spencerbattleship.firebaseio.com/');
var shipPlacements = [];

//draggable and droppable
$(function() { 
    $ship.draggable({
      grid: [ 44, 44 ],
      containment: "#my-ships",
      snap: 'td',
      snapTolerance: "inner",
      tolerance: "touch",
      revert: "invalid",
    });
    $spaces.droppable({
      accept: $ship, 
      greedy: true,
      tolerance: "touch",
      drop: function(event, ui) {
        var getID = event.target.id;
        shipPlacements.push(getID);
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
  var $choice = $(this).attr('id');
  $('.targets').removeClass('highlighted');
  $(this).addClass('highlighted');
  e.stopPropagation();
  console.log($choice);
  
  $('#fire').click(function(checkForHit) {
    var checkForHit = shipPlacements._contains($choice);
      if (checkForHit != -1) {
          console.log("Hit!");
      } else {
          console.log("Miss!");
      }
  });
});

//disables draggable
$('#ready').click(function(){
  $ship.draggable("destroy"); 
  alert("Battle Time!")
  $('button#ready').hide();
});


//////////////////////////////////
///////ENEMY ACTIVITY/////////////
//////////////////////////////////

var $spaces2 = $('#enemy-ships td');
var $enemyShip = $('.enemy-ship');
var enemyShipPlacements = [];

//draggable and droppable
$(function() { 
    $enemyShip.draggable({
      grid: [ 44, 44 ],
      containment: "#enemy-ships",
      snap: 'td',
      snapTolerance: "inner",
      tolerance: "touch",
      revert: "invalid",
    });
    $spaces2.droppable({
      accept: $enemyShip, 
      greedy: true,
      tolerance: "touch",
      drop: function(event, ui) {
        var getID = event.target.id;
        enemyShipPlacements.push(getID);
      }
          });
    $("th").droppable({
      addClasses: false});
});

//Rotates ships
$('.enemy-ship').dblclick(function(){
var $ship2 = $(event.target);
$ship2.toggleClass('flip');
event.preventDefault()
});

//Yellow Highlighting
$('.me-target').click(function(e) {
  var $enemyChoice = $(this).attr('id');
  $('.me-target').removeClass('highlighted');
  $(this).addClass('highlighted');
  e.stopPropagation();
  console.log($enemyChoice);
  
  $('#enemy-fire').click(function(checkForHit2) {
    var checkForHit2 = enemyShipPlacements.indexOf($enemyChoice);
      if (checkForHit2 != -1) {
          console.log("Hit!");
      } else {
          console.log("Miss!");
      }
  });
});

//disables draggable
$('#enemy-ready').click(function(){
  $enemyShip.draggable("destroy"); 
  alert("Battle Time!")
  $('button#enemy-ready').hide();
});

