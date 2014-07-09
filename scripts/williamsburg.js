$(function () {

	$.stellar({
		horizontalOffset: 0,
		verticalOffset: 0,
		horizontalScrolling: false,
		// hideElement: function($elem) { $elem.fadeOut(50); },
		hideDistantElements: 1
	});
	

	var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');

	$('.submenu a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - paddingTop - 25
		}, 400);
		$(this).toggleClass('active');
	})

	console.log(screen.width);
	// only load parallaximages if on desktop
	loadImgIfDesktop();
}) 


function loadImgIfDesktop() {
	if (screen.width>=768) {
		$("img.desktop-only").each(function () {
			$(this).attr('src',  $(this).attr('data-desktop-src'));
		});
	}	
}

