$(function () {
		console.log('loaded page');
		var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');
		console.log(paddingTop);
	$('.category-side a').click(function () {
		console.log('rolling');
		// var imageUrl = $(this).attr('data-image');

		// $('html').css({
		// 	'background': 'url(' + imageUrl + ') no-repeat center center fixed',
		// 	'-webkit-background-size': 'cover',
		// 	'background-size': 'cover'
		// })
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - paddingTop - 25
			}, 400);
			$(this).toggleClass('active');
		})

}) 

