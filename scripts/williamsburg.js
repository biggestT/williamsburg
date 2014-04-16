$(function () {
		console.log('loaded page');
		var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');
		console.log(paddingTop);
	$('.coffee-side a').click(function () {
		console.log('rolling');
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - paddingTop 
			}, 400);
		})
}) 

