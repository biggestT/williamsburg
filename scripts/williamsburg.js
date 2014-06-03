$(function () {

	console.log($(".stellar-container"));

	// $.stellar();
	// // $("#stellar-container").stellar();

	$.stellar({
		horizontalOffset: 0,
		verticalOffset: 0,
		hideElement: function($elem) { $elem.fadeOut(50); },
		hideDistantElements: 1,
	});

	var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');

	$('.submenu a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - paddingTop - 25
		}, 400);
		$(this).toggleClass('active');
	})

}) 

