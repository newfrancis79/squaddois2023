function ativaScrollSuave(selector) {

	$(selector).click(function(event){

		event.preventDefault();
		var target=$(this).attr('href');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500)
	});
}

ativaScrollSuave('[href*=panel-about]');
ativaScrollSuave('[href*=panel-speakers]');
ativaScrollSuave('[href*=panel-form]');