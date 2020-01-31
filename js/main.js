/**
 * Récupération de la hauteur du menu principal
 */

var heightFullMenu = $('.headsite').outerHeight(true);


$( document ).ready(function() {
	/**
	 * Gestion de l'ouverture/fermeture du menu
	 */

	var toto = false;

	openMenu();

	$("#btnnav").on('click', function() {
		toto ? closeMenu() : openMenu();
	});

	function closeMenu() {
		$('body').removeClass('opened-menu');
		$('#nav').removeClass('nav-opened');
		$("#btnnav").attr('aria-expanded','false');
		toto = false;
	}

	function openMenu() {
		$('body').addClass('opened-menu');
		$('#nav').addClass('nav-opened');
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

	if ($('.toc-follow').length) {

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
