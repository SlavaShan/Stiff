

$(document).ready(function(){
    
// accordeon

    $('#accordion-wrap ul > li ul')
        .click(function(event){
          event.stopPropagation();
        })
        .filter(':not(:first)')
        .hide();

    $('#accordion-wrap ul > li').click(function(){
        var selfClick = $(this).find('ul:first').is(':visible');
        if(!selfClick) {
          $(this)
            .parent()
            .find('> li ul:visible')
            .slideToggle();
        }

        $(this)
          .find('ul:first')
          .stop(true, true)
          .slideToggle();

    });

    $('#accordion-wrap .act').click(function(){
        $('#accordion-wrap .act').removeClass('active');
        $(this).addClass('active');
    });

// end accordeon

// fancybox

    $(".fancybox").fancybox();

// end fancybox

});


