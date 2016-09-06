$( document ).ready(function() {

	/**
	 * Gestion de l'ouverture/fermeture du menu
	 */

	var toto = false;

    $("#btnnav").on('click', function() {
    	if (toto){
    		$('body').removeClass('opened-menu');
    		$('#nav').hide();
    		$("#btnnav").attr('aria-expanded','false');
    	} else {
    		$('body').addClass('opened-menu');
    		$('#nav').show();
    		$("#btnnav").attr('aria-expanded','true');
    	}
    	toto = !toto;
    });


    /**
	 * Gestion des filtres sur les critères
	 */

    $('.filter input').on('click', function() {
        var $this = $(this),
            id = $this.attr('id'),
            $sections = $('section[data-level="'+ id + '"'),
            $anchors = $('a[data-level="'+ id + '"');

        if ( $this.prop('checked') ) {
            $sections.css('display', 'block');
            $anchors.removeClass('disabled');
        } else {
            $sections.css('display', 'none');
            $anchors.addClass('disabled');
        }
    });


    /**
	 * Gestion du scroll
	 */

    $(window).scroll(function() {

	    var position = $(this).scrollTop();

	    $('.thematique').each(function() {
	        var target = $(this).offset().top;
	        var id = $(this).attr('id');
	        
	        if (position >= target) {
	            $('#navtoc > nav > ul > li').removeClass('on');
	            $('#navtoc > nav > ul > li > a[href=#' + id + ']').parent().addClass('on');
	        }
	    });
	});
});