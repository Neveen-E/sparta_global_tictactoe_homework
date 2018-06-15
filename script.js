$(function() {
  //data
  var reset = $('#reset');
  var playerTurn = $('.playerTurn');
  var cells = $('td');
  var winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


  //functions

  $(reset).on('click', function() {
    //$(cells).html('');
    $(cells).each(function(index, value){
      $(value).html("");
    })
  });

  $(cells).each(function(index, cell) {

    $(cell).on('click', function() {
      // if ($(cell).html() == ''){
      //   $(cell).bind('click');
      // }
      if ($(playerTurn).html() == "It is X's turn") {
        $(cell).html('x');
        $(playerTurn).html("It is O's turn");

      }
      else {
        $(cell).html('o');
        $(playerTurn).html("It is X's turn");
      }
      if ($(cell).html() != ''){
        $(cell).unbind('click');
      }
      /*else if($(cell).html() == '') {
        $(cell).on('click');
      }*/

    });

});
});



//reset - enable click
//select an array - win/lose
