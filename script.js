$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n >= 21 || n < 5){
	   //alert("night");
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "night";
	}
 	else if (n > 18 && n < 21){
 	  //alert("evening");
 	  //System.out.print(n);
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "evening";
	}
	else if (n > 5 && n < 8){
	  //alert("sunrise");
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunrise";
	}
	else if (n > 16 && n < 18)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});
