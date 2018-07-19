//Business Logic
var userInput= [];

function pingPong(number) {
	for (var num = 0;num <= number; num ++ ) {
  	if (num%3===0 && num%5===0) {
      userInput.push("ping-pong");
    }
    else if (num%3===0){
    	userInput.push("ping");
      }
    else if (num%5===0){
    	userInput.push("pong");
    }
    else {
      userInput.push(num);
    };
  };
};


//User Interface Logic
$(document).ready(function(){   // Js runs after page loads
  $("#numberloged").submit(function(event) {  // Event listener at numberentry ID for user input
    event.preventDefault();
		var number = parseInt($("#numberentry").val());  // Collects keyed in data by user and assigns it to variable

    pingPong(number); // Run number function

    userInput.forEach(function(number) {
      $("#return").append("<li>" + number + "</li>");
    });

 });
});
