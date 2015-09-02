$(document).ready(showme);

function showme(){
	
	$(".readless").hide();

	$('.readmore').click(showmore);

	function showmore(){
		$(".readmore").hide();
		$(".readless").show();
		$("#show-this-on-click").slideDown(500);
	}

	$(".readless").click(showless);

	function showless(){
		$(".readmore").show();
		$(".readless").hide();
		$("#show-this-on-click").slideUp(500);
	}
	
	$('.learnmore').click(learn);

	function learn(){
		$(".learnmore").hide();
		$("#learnmoretext").slideDown();
	}
}