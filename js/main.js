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

$( document ).ready(function() {
	$toto=false;
    $("#btnnav").on('click',function(){
    	if ($toto){
    		$('#nav').hide();
    		$toto=false;
    		$("#btnnav").attr('aria-expanded','false');
    	} else {
    		$('#nav').show();
    		$toto=true;
    		$("#btnnav").attr('aria-expanded','true');
    	}
    });

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
});