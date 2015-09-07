$(document).ready(pageLoad);

function pageLoad(){

	$('#submit-btn').click(two);

}

function two(){
	event.preventDefault();
	var myValue = $('#formField').val();
	buildMyTag(myValue);

}

function buildMyTag(txt){
	var myTag ='';
	myTag += '<p>';
	myTag += txt;
	myTag += '</p>';
	$('#output').append(myTag);


	console.log(myTag);

}

function three(){

	event.preventDefault();
	var addItem = "";

	addItem += '<tr>';
	addItem += '<tb>';
	addItem += selectedPrice;
	additem += '</tb>';
	addItem += '<tb>';
	addItem += price;
	addItem += '</tb>';
	addItem += '</tr>';

	$('.table').append(addItem);
}

