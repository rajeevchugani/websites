//document ready
$(document).ready(pageLoad);

//once clicked submit
function pageLoad(){

	$('#submit-btn').click(imgupdate);

}

//pickup city name
function imgupdate(){
	event.preventDefault();
	var city = $('#city-type').val().toLowerCase();
	processResults(city);
}

function processResults(city){

//if 'New York' || 'New York City' || 'NYC' display background as nyc.jpg
if ( city == 'new york' || city== 'new york city' || city== 'nyc'){

	$('body').css('background-image','url(images/nyc.jpg)');

} 

//else if 'San Francisco' || 'SF' || Bay Area display background as sf.jpg

else if ( city == 'san francisco' || city== 'sf' || city== 'bay area'){

	$('body').css('background-image','url(images/sf.jpg)');

}

//else if 'Los Angeles' || 'LA' || 'LAX' display background as la.jpg
else if (city == 'los angeles' || city== 'la' || city== 'lax'){

	$('body').css('background-image','url(images/la.jpg)');
}

//else if 'Austin' || 'ATX' display as austin.jpg
else if (city == 'austin' || city== 'atx'){

	$('body').css('background-image','url(images/austin.jpg)');

}

//else if 'Sydney' || 'SYD' display as sydney.jpg
else if (city == 'sydney' || city== 'syd'){

	$('body').css('background-image','url(images/sydney.jpg)');

}


//if its none of above then a alert saying 'city is not in database' and display default image
else if (city != 'new york' || city != 'nyc' || city != 'new york city' || city != 'san francisco' || city != 'sf' || city != 'bay area' || city != 'los angeles' || city != 'la' || city != 'lax' || city != 'austin' || city != 'atx' || city != 'sydney' || city != 'syd'){

	$('body').css('background-image','url(images/citipix_skyline.jpg)');
	alert('The place you have selected has not been updated yet or does not exist, please re-enter');

}
}



