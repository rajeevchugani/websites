//set up variables for cities
var cities =  ["nyc", "sf", "la", "atx", "syd"];
//set up a counter to keep track of the position in the foods array
var counter;

// jQuery to check when document is ready, then do pageSetup
$(document).ready(pageSetup);

// pageSetup function: when triggered, pageSetup function does 2 things:
// 1) triggers the buildTheDropDown function
// 2) attaches a 'change' listener to the dropdown once it's built
// the 'change' listener calls the choosePicture function when a change happens

function pageSetup(){
	//console.log('inside function pageSetup');
	buildTheDropDown();
	$('#city-type').change(choosePicture);
}

function choosePicture(){
		//console.log('inside function choosePicture');
		var selectedCity = $('#city-type').val();

		console.log('selected:' + selectedCity);
		
		//switch seleted cities
		switch(selectedCity){
			case 'nyc':
			console.log('selected case is nyc');
			swapCity('nyc');
			break;
			case 'sf':
			console.log('selected case is sf');
			swapCity('sf');
			break;
			case 'la':
			console.log('selected case is la');
			swapCity('la');
			break;
			case 'atx':
			console.log('selected case is atx');
			swapCity('atx');
			break;
			case 'syd':
			console.log('selected case is syd');
			swapCity('syd');
			break;
		}
	}

		//creating drop down list
		function buildTheDropDown(){
		// console.log('inside function buildTheDropDown');
		for(counter = 0; counter<cities.length;counter++){
			
			//console.log(cities[counter]);
			//add drop down list for the cities
			var optionString = '';
			optionString += '<option value="';
			optionString += cities[counter];
			optionString += '">';
			optionString += cities[counter].toUpperCase();
			optionString += '</options>';

			//console.log(optionString);
			//aatach the line created within #city-type
			$('#city-type').append(optionString);
		}
	}

//swap the class to what is selected in drop down box
function swapCity(city){

	console.log('inside function swapCity');
	$('body').attr('class',city);
}




