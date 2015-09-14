'use-strict';
$(function(){

  var calculator = new Calculator();

});

// your code here!

function Calculator(){
  $('#equals').click(validate);
}

function validate(){
  var num1 = $('#number1').val();
  var num2 = $('#number2').val();
  var operation = $('#operation').val();

  if (isNaN(num1) || isNaN(num2)) {
    $('#result').text('Sorry, one of those is not a valid number!');
  }
  else if(operation != "*" && operation != "+" && operation != "-" && operation != "/"){
    return $('#result').text('Sorry, not a valid operation!');
  }
  else{
      var total=eval(parseInt(num1)+operation+parseInt(num2));
      $('#result').text(total);
      }
    };
