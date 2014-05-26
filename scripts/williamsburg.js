$(function () {
		console.log('loaded page');

		$('#scene').parallax({
			// calibrateX: false,
			// calibrateY: true,
			// invertX: false,
			// invertY: true,
			// limitX: false,
			// limitY: 10,
			// scalarX: 2,
			// scalarY: 8,
			// frictionX: 0.2,
			// frictionY: 0.8,
			originX: 0.5,
			originY: 0.5
		});

		var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');
		console.log(paddingTop);
	$('.submenu a').click(function () {
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

