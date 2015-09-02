$(document).ready(food);

function food(){


//my favourite scoff
var myfoods = ['pizza', 'burger', 'cookies', 'mint ice cream', 'salad'];

//this makes your code wait until the document has loaded
//$(document).ready( yourfunctionname 

	function listfoods(){
		$.each(myfoods, outputfood);
	}

	$('button').click(listfoods);

	function outputfood(no, value){
		if (value=='salad')
			{$('#output').append('<p>' + value + ' is bleugh!</p>');}
		else
			{$('#output').append('<p>I like ' + value + '</p>');}
	}

}