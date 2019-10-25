/**
 * Récupération de la hauteur du menu principal
 */

var heightFullMenu = $('.headsite').outerHeight(true);
$('#nav').hide();


$( document ).ready(function() {

    /**
     * Corrige la position du scroll si l'url contient une ancre
     * L'événement "scroll de la fenêtre" est déclenché pour mettre à jour l'ancre actif
     */

    if (document.location.hash.indexOf('#') > -1) {
        var id = document.location.hash;
        setTimeout(function() {
            $('html, body').animate({scrollTop : $(id).offset().top - $('.headsite').height()}, 0);
        }, 50);
    }
    else
    {
        // Mise à jour de l'ancre active à l'ouverture du site
        $(window).trigger('scroll');
    }

	/**
	 * Gestion de l'ouverture/fermeture du menu
	 */

	var toto = false;

    $("#btnnav").on('click', function() {
    	toto ? closeMenu() : openMenu();
    });

    function closeMenu() {
        $('body').removeClass('opened-menu');
        $('#nav').hide();
        $("#btnnav").attr('aria-expanded','false');
        toto = false;
    }

    function openMenu() {
        $('body').addClass('opened-menu');
        $('#nav').show();
        $("#btnnav").attr('aria-expanded','true');
        toto = true;
    }

    /**
	 * Gestion des filtres sur les critères
	 */

    $('.filter input').on('click', function() {
        var $this = $(this),
            id = $this.attr('id'),
            $sections = $('section[data-level="'+ id + '"'),
            $anchors = $('a[data-level="'+ id + '"');

        if ( $this.prop('checked') ) {
            $this.attr('aria-checked', 'true');
            $sections.css('display', 'block');
            $anchors.removeClass('disabled');
        } else {
            $this.attr('aria-checked', 'false');
            $sections.css('display', 'none');
            $anchors.addClass('disabled');
        }
    });

    /**
	 * Indication de l'ancre actif sur les pages "Critères" et "Glossaire"
	 */

    if ($('.home').length || $('.criteres').length || $('.glossaire').length) {

        $(window).scroll(function() {

            var paddingTopThematique = parseInt($('h2').css('padding-top')),
                position             = $(this).scrollTop() + heightFullMenu - paddingTopThematique;

            var $el = $('.criteres').length ? $('.thematique') : $('h2');

    	    $el.each(function() {
    	        var target = $(this).offset().top;
    	        var id = $(this).attr('id');

    	        if (position >= target) {
    	            $('#navtoc > nav > ul > li').removeClass('on');
    	            $('#navtoc > nav > ul > li > a[href=#' + id + ']').parent().addClass('on');
    	        }
    	    });
        });
	}


    /**
     * Fix : position du scroll lorsque l'on clique sur l'ancre d'un critère
     */

    $('a[href^=#crit]').on('click', function(e) {
        e.preventDefault();
        var crit = $(this).attr('href');
        document.location.hash = crit;
        $('html, body').scrollTop($(crit).offset().top - $('.headsite').height());
        e.target.blur();
    });

    /**
     * Ouverture du menu principal à l'activation du lien d'évitement "Aller au menu"
     */

    $('#go-to-menu').on({
        click : openMenu,
        keydown: function(e) {
            if (e.keyCode == 13) {
                openMenu();
                $('#nav').find('a').first().focus();
            }
        }
    });


});
