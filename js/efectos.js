$(document).ready(function(){

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 1500 + (index * 500));
	});

