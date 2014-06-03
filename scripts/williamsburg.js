$(function () {


	// parallax shit for the startpage
	$('#intro').parallax("50%", 0.1);
  $('#second').parallax("50%", 0.1);
  // $('.bg').parallax("50%", 0.4);
  $('#third').parallax("50%", 0.3);

		var paddingTop = $('body').css('padding-top').replace(/[^-\d\.]/g, '');
		console.log(paddingTop);
	$('.submenu a').click(function () {
		console.log('rolling');
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - paddingTop - 25
			}, 400);
			$(this).toggleClass('active');
		})

}) 

