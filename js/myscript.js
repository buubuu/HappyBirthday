$(document).ready(function(){
	$("#main_birthday_page").hide();

	$('.flip-container'). fadeOut('slow');

	$('#main_birthday_page').fadeIn('fast');
})

/*$(document).ready(function(){
	
	$("#wishes_text"). hide();

	$("#cardflip").click(function(){
		$("#welcome_text").fadeOut("fast");
		$("#wishes_text"). css({'-webkit-transform': 'rotate(360deg)', 'transform':'rotate(360deg)'}) .fadeIn("slow");
		
		$(".birthday_card"). css({
			'-webkit-transform' : 'rotate(360deg)',
			'transform' : 'rotate(360deg)'
		});

	});

})*/