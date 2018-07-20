//Business Logic
var userInput;






function number2() {
	for (var num=0;num<=userInput;num++ ) {
  	if ((num%3 === 0) && (num%5===0)) {
      $("ul#return").append("<li>Ping-Pong</li>");
    }
    else if (num%3===0){
    	$("ul#return").append("<li>Ping</li>")
      }
    else if (num%5===0){
    	$("ul#return").append('<li>Pong</li>')
    }
    else {
      $("ul#return").append("<li>"+ num +"</li>")
    };
  };
};


//User Interface Logic
$(document).ready(function(){   // Js runs after page loads
	$("#numberloged").submit(function(event) {  // Event listener at numberentry ID for user input
		userInput = $("#numberentry").val();  // Collects keyed in data by user and assigns it to variable
    $("#return").text("");
    number2();
		$("#numberentry").val();
    event.preventDefault();
 });
});