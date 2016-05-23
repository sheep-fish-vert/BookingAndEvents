
/* index-page size */

    function indexPageSize(){

        /* index page height */

            function indexPageSizeMain(){

                if($(window).width() > 992){

                    var windowHeight = $(window).height();

                    var footerHeight = $('.footer').outerHeight();

                    indexPageHeight = windowHeight - footerHeight;

                    $('.index-page').height(indexPageHeight);

                }else{

                    $('.index-page').removeAttr('style');

                }

            }

        /* /index page height */

        /* index page circle text position */

            function indexCiclePageTextPos(){

                $('.part-circle').each(function(){

                    var circleHeight = $(this).height();
                    var textItem = $(this).find('.part-circle-text');
                    var textHeight = textItem.height();
                    var titleTop = $(this).find('p span').position().top;

                    var position = (circleHeight/2)-(textHeight/2)-titleTop;

                    textItem.css('top', position);

                });

            }

        /* /index page circle height */

        indexPageSizeMain();
        indexCiclePageTextPos();

        $(window).load(function(){

            indexPageSizeMain();
            indexCiclePageTextPos();

        });

        $(window).resize(function(){

            indexPageSizeMain();
            indexCiclePageTextPos();

        });

    }

/* /index-page size */

/* index-page background-position */

    function indexPageBackgroundSize(){

        $('.part-background').each(function(){

            var imgParams = [(-1)*($(this).find('img').height()/2), (-1)*($(this).find('img').width()/2)];
            console.log(imgParams);

            $(this).find('img').css({'margin':imgParams[0]+'px 0 0 '+imgParams[1]+'px'});

        });

    };


/* /index-page background-position */

/* index page hover */

    function indexPageHover(){
        $('.part-circle').hover(
            function(){

                var parent = $(this).parents('.part');
                parent.addClass('hovered');

            },
            function(){

                var parent = $(this).parents('.part');
                parent.removeClass('hovered');

            }
        );
    }

/* index page hover */


$(document).ready(function(){

    indexPageSize();
    indexPageHover();
    indexPageBackgroundSize();

});

$(window).load(function(){

    /* prety show for index-page */

        setTimeout(function(){
            $('.index-page').addClass('loaded');
        }, 1000)

    /* /prety show for index-page */

});

$(window).resize(function(){

});