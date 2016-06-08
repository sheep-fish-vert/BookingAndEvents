
/* index-page size */

    function indexPageSize(){

        /* index page height */

            function indexPageSizeMain(){

                var windowHeight = $(window).height();

                if($(window).width() > 992 && windowHeight > 500){

                    var footerHeight = $('.footer').outerHeight();

                    indexPageHeight = windowHeight - footerHeight;

                    $('.index-page').height(indexPageHeight);

                    $('.part').removeAttr('style');

                }else{

                    $('.index-page').removeAttr('style');

                    $('.part').height(windowHeight/2)

                }

            }

        /* /index page height */

        /* index page circle text position */

            var timerTextPos = null;

            function indexCiclePageTextPos(){

                clearTimeout(timerTextPos);

                timerTextPos = setTimeout(function(){

                    $('.part-circle').each(function(){

                        var textItem = $(this).find('.part-circle-text');
                        var titleTop = $(this).find('p').position().top;
                        
                        var valueTop = 50 - ((titleTop*100)/$(this).height());
                        textItem.css({'top':valueTop+'%'});
                        
                        console.log(valueTop);

                    });

                }, 1000);
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

    function indexPageBackgroundPosition(){

        var timerBackground = null;

        function indexPageBackgroundPositionMain(){

            clearTimeout(timerBackground);

            tiemrBackground = setTimeout(function(){

                $('.part-background').each(function(){

                    var imgParams = [(-1)*($(this).find('img').height()/2), (-1)*($(this).find('img').width()/2)];

                    $(this).find('img').css({'margin':imgParams[0]+'px 0 0 '+imgParams[1]+'px'});

                });

            },300);

        }

        indexPageBackgroundPositionMain();

        $(window).resize(function(){

            indexPageBackgroundPositionMain();

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
    indexPageBackgroundPosition();

});

$(window).load(function(){

    /* prety show for index-page */

        setTimeout(function(){
            $('.index-page').addClass('loaded');
        }, 100)

    /* /prety show for index-page */

});

$(window).resize(function(){

});