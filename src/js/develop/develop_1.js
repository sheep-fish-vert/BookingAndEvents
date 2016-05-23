
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

                    console.log(circleHeight, textHeight, titleTop);
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


$(document).ready(function(){

    indexPageSize();

});

$(window).load(function(){

});

$(window).resize(function(){

});