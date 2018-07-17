//Business Logic
var userInput;

function number() {
	for (var num=0;num<number;num++ ) {
  	if ((num%3 === 0) && (num%5===0)) {
      $("#return").append("<li>Ping-Pong</li>");
    }
    else if (num%3===0){
    	$("#return").append("<li>Ping</li>")
      }
    else if (num%5===0){
    	$("#return").append('<li>Pong</li>')
    }
    else {
      $("return").append("<li>num</li>")
    }
  }
}


//User Interface Logic
$(document).ready(function(){   // Js runs after page loads
	$("#button1").submit(function(event) {  // Event listener at numberentry ID for user input
		userInput = ($("#numberentry").val());  // Collects keyed in data by user and assigns it to variable
    $("#return").text("");
    number();
    $("#numberentry").val()
    event.numberDefault();
 })	;
});
