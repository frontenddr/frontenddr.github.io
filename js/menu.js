$(document).ready(function() {
  $('.icon a').click(function() {
    $('.header-menu-ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.header-menu-ul').removeAttr('style');
		 }
	});//end resize
});//end ready