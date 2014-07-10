var paddingTop;

$(function () {

	$.stellar({
		horizontalOffset: 0,
		verticalOffset: 0,
		horizontalScrolling: false,
		// hideElement: function($elem) { $elem.fadeOut(50); },
		hideDistantElements: 1
	});
	

	paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');

	$('.submenu a').click(scrollToSlide);

	// only load parallaximages if on desktop
	loadImgIfDesktop();

	// make first submenu-item active
	$('.submenu a:first').addClass('active');
}) 

function loadImgIfDesktop() {
	if (screen.width>=768) {
		$("img.desktop-only").each(function () {
			$(this).attr('src',  $(this).attr('data-desktop-src'));
		});
	}	
}

function scrollToSlide(e) {
	$('.submenu a').removeClass('active');
	$(this).addClass('active');
	$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - paddingTop - 25
		}, 400);
}