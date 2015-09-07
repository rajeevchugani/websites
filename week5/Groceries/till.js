//Document ready
$(document).ready(runPage);

var total = 0;
var medal = "";


//run all the functions on page
function runPage(){
	$('#new-btn').click(getNewFood);
	$('#add-btn').click(addNewFood);
	$('.print').click(printReciept);
	$('#delete').click(deleteLast);
	$('#newCustomer').click(refresh);
}

// add new food and prices into dropdown box to reduce errors
function getNewFood(){
	event.preventDefault();
	var food = $('#newfood').val();
	var newprice = $('#price').val();
	newFoodList(food, newprice);
}

function newFoodList(food, newprice){

	var myFood = "";

	myFood += '<option value="' + food + '" class="' + newprice + '">';
	myFood += food + ' ';
	myFood += '$' + newprice;
	myFood += '</option>';

	$('#formList').append(myFood);

}

//add items from dropdown box to printable table
//change imgs according to total values
//img will change if >= 100 bronze >= 200 silver >=300 gold
//one column will display list of items one column will display value of each item per line (new line for each item)
function addNewFood(){
	event.preventDefault();
	
	var selectedPrice = $('#formList').val();
	var selectedFood = $('#formList option:selected').text();
	var price = Number(selectedFood.replace(/[^0-9\.]+/g,""));
	additionFood(selectedPrice, price);

}

function additionFood(selectedPrice, price){

	var addItem = "";

	addItem += '<tr>';
	addItem += '<td>' + selectedPrice + '</td>';
	addItem += '<td>' + price + '</td>';
	addItem += '</tr>';

	total = total + price;

	$('#itemList').append(addItem);
	$('#total').text(total);

	if (total >=300){
		$('#award').attr('src', 'img/gold.jpg');
		medal = 'gold member';
	}

	else if (total >=200){

		$('#award').attr('src', 'img/silver.jpg');
		medal = 'silver member';
	}

	else if (total >= 100){
		$('#award').attr('src', 'img/bronze.jpg');
		medal = 'bronze member';
	}
}

//if all is correct press print to display name, table of items, total price and congrats based on img.
function printReciept(){
	var firstName = $('#firstname').val();
	var lastName = $('#lastname').val();

	if (total >= 100){

		alert( firstName + ' ' + lastName + ' your total bill is $ ' + total + ' Congratulations you have become a ' + medal + '!');
	}

	else
		alert( firstName + ' ' + lastName + ' your total bill is $ ' + total);
}

// if item added is wrong --> delete button deletes last item
// total value decreases
//if value decreases lower than the medal set amounts, change images back
function deleteLast(){
	var lastPrice = $('#itemList tr:last-child  td:last-child').text();

	total = total - lastPrice;
	$('#total').text(total);

	if (total >=300){
		$('#award').attr('src', 'img/gold.jpg');
		medal = 'gold member';
	}

	else if (total >=200){

		$('#award').attr('src', 'img/silver.jpg');
		medal = 'silver member';
	}

	else if (total >= 100){
		$('#award').attr('src', 'img/bronze.jpg');
		medal = 'bronze member';
	}

	else if (total <100){
		$('#award').attr('src', '');
	}

	if ($("table tr").length != 1) {
		$("table tr:last").remove();
	}
}

//refresh page for new customer
function refresh(){
	$("#listGroceries > tbody:last").children().remove();
	total = 0;
	$('#award').attr('src', '');
	$('#total').text(total);
	$("#firstname").val('');
	$("#lastname").val('');
	$("#newfood").val('');
	$("#price").val('');

}
