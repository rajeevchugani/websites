$(document).ready(showme);

function showme(){

	$(".readless").hide();

	$('.readmore').click(showmore);

	function showmore(){
		event.preventDefault();
		$(".readmore").hide();
		$(".readless").show();
		$("#show-this-on-click").slideDown(500);
	}

	$(".readless").click(showless);

	function showless(){
		event.preventDefault();
		$(".readmore").show();
		$(".readless").hide();
		$("#show-this-on-click").slideUp(500);
	}
	
	$('.learnmore').click(learn);

	function learn(){
		event.preventDefault();
		$(".learnmore").hide();
		$("#learnmoretext").slideDown();
	}
}