$(function () {
	$(window).scroll(function() {
	    $('.learn').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.mail').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
})