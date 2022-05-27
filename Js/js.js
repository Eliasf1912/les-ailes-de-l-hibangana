$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
        
$('a[href*=#]').bind("click", function(e){
	
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 500);
	e.preventDefault();
});
        
// Scroll Top FadeIn & FadeOut  
     
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.scroll-top').fadeIn();
	} else {
		$('.scroll-top').fadeOut();
	}
});