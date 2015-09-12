// set up list of foods in an array
var foods = ['beer', 'burger', 'hotdog', 'pizza', 'salad'];
console.table(foods);
var counter;

//set up a counter to keep track of the position in the foods array

// use jQuery to check when document is ready, then do pageSetup
$(document).ready(pageSetup);
// at this point the page is loaded and ready, waiting for the user to do something

// pageSetup function: when triggered, pageSetup function does 2 things:
// 1) triggers the buildTheDropDown function
// 2) attaches a 'change' listener to the dropdown once it's built
// the 'change' listener calls the choosePicture function when a change happens
function pageSetup(){
	//console.log('inside function pageSetup');
	buildTheDropDown();
	$('#food_selector').change(choosePicture);
}

function choosePicture(){
		//console.log('inside function choosePicture');
		var selectedFood = $('#food_selector').val();

		//if salad is selected change css colors
		if (selectedFood = 'salad'){
			$("p").css('color','red');
			$("p").css('text-decoration','line-through');
			$("#box_1").css('border-color','red');
		}


			console.log('selected:' + selectedFood);
		//switch seleted items
			switch(selectedFood){
				case 'beer':
				console.log('selected case is beer');
				swapFood('beer');
				break;
				case 'burger':
				console.log('selected case is burger');
				swapFood('burger');
				break;
				case 'hotdog':
				console.log('selected case is hotdog');
				swapFood('hotdog');
				break;
				case 'pizza':
				console.log('selected case is pizza');
				swapFood('pizza');
				break;
				case 'salad':
				console.log('selected case is salad');
				swapFood('salad');
				break;
			}
		}

		//creating drop down list
		function buildTheDropDown(){
		// console.log('inside function buildTheDropDown');
		for(counter = 0; counter<foods.length;counter++){
			//console.log(foods[counter]);

			var optionString = '';
			optionString += '<option value="';
			optionString += foods[counter];
			optionString += '">';
			optionString += foods[counter].toUpperCase();
			optionString += '</options>';

			//console.log(optionString);
			$('#food_selector').append(optionString);
		}
	}

//swap attributes class
	function swapFood(food){

		console.log('inside function swapfood');
		$('#box_1').attr('class',food);
	}







// buildTheDropdown function:  builds an <option> tag for each food in foods array
// then adds it to the #food_selector div

// swapFood function:  is a simple helper function to swap the class
// with the background-image in it

// choosePicture function: runs swapFood depending on which food is chosen
