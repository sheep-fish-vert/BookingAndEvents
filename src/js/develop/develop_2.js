/* plugin */
var map;
function googleMap(mapWrap) {
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX, cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            scaleControl: false,
            scrollwheel: false,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var styles = [
            {
                stylers: [
                    { hue: "#00ffe6" },
                    { saturation: -120 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 80 },
                    { visibility: "simplified" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
        map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        map.setOptions({ styles: styles });
        var image = 'images/gmappin.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image
        });

        /*анимация при клике на маркер*/
        //marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        /*/анимация при клике на маркер*/

        /*По клику открываеться инфоблок*/
        google.maps.event.addListener(marker, 'click', function () {
            //infowindow.open(map,marker);
        });

    }
    initialize();
}

/* plugin */

var wall;

function changeViewport(){
    $(window).resize(function(){

        whatViewport();

    });
    
    function whatViewport(){
        var windowWidth = screen.width;
        var viewport = $("meta[name=viewport]");
        viewport.attr('content', 'width=device-width');
        if(windowWidth<=640){
            viewport.attr('content', 'width=640');
        }

    };

}

$(document).ready(function () {
       
    /* plugin wall */

        if ($('.main').find('#artist-conteiner').length == 1) {

            var wall = new Freewall("#artist-conteiner");
            wall.reset({
                selector: '.box',
                animate: true,
                cellW: 256,
                cellH: 256,
                draggable: true,
                onResize: function () {
                    wall.fitWidth();
                },
                onBlockMove: function () {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();

        }
        
        
        if ($('.main').find('.portfolio-conteiner').length == 1) {

            var wall = new Freewall(".portfolio-conteiner");
            var dna = $(".portfolio-conteiner .box ");
            
            /* setka */ 
            
                    
                    
                var dna11 = $(".portfolio-conteiner .size-1-1 ");
                var dna12 = $(".portfolio-conteiner .size-1-2 ");
                var dna13 = $(".portfolio-conteiner .size-1-3 ");
                var dna14 = $(".portfolio-conteiner .size-1-4 ");
                var dna21 = $(".portfolio-conteiner .size-2-1 ");
                var dna22 = $(".portfolio-conteiner .size-2-2 ");
                var dna23 = $(".portfolio-conteiner .size-2-3 ");
                var dna24 = $(".portfolio-conteiner .size-2-4 ");
                
            /* setka*/
            
            wall.reset({
                selector: '.box',
                animate: true,
                cellW: 420,
                cellH: 430,
                //draggable: true,
                onResize: function () {
                    
                    if($(window).width() < 992 ){
                        
                        wall.fixSize({
                            block: dna,
                            width: 420,
                            height: 430
                        });
                    } else{
                        
                        wall.fixSize({ block: dna11, width: 420, height: 420 });                        
                        wall.fixSize({ block: dna12, width: 420, height: 840 });                        
                        wall.fixSize({ block: dna13, width: 420, height: 1260 });
                        wall.fixSize({ block: dna14, width: 420, height: 1680 });
                        
                        wall.fixSize({ block: dna21, width: 840, height: 420 });                        
                        wall.fixSize({ block: dna22, width: 840, height: 840 });                        
                        wall.fixSize({ block: dna23, width: 840, height: 1260 });
                        wall.fixSize({ block: dna24, width: 840, height: 1680 });
                        
                    }
                    
                    wall.fitWidth();
                },
                onBlockMove: function () {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();

        }
     

if ($('.main').find('.artist-list').length == 1) {
            waterfall('.artist-list');
    }
  
    /* plugin wall */


    /* map */
        if ($('.main').find('#mapper').length == 1) {
            googleMap('mapper');

            if ($(window).width() < 768) {
                map.set('draggable', false);
            }
            else {
                map.set('draggable', true);
            };

        }
    /* map */

    /* slider clients */
        $('.conteiner-cli .slider-block .cont-slid').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 10000,
            dots: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });

        $('.arrow-prew').click(function () {
            $('.slick-prev').click();
        });

        $('.arrow-next').click(function () {
            $('.slick-next').click();
        });
    /* slider clients */


    /* fix name  band */

        if ($('.main').find('.str-box').length == 1) {
            if ($(window).width() > 1024) {
                $('.about-block p:first').css('padding-top', $('.super-title').height() + 110);
            } else {
                $('.about-block p:first').css('padding-top', 0);
            }
        }

    /* fix name */
    
    /* fix title up */
    
        if($('.main').find('.agency-wrap').length == 1){
            $('.agency-wrap').css('margin-top', -$('.agency-wrap .title').height() );
        }
    
    /* fix title up*/
   
    if ($('.main').find('.tour-list').length == 1) {
            waterfall('.tour-list');
    }
   
    
    
   
   /* agency */
        if ($('.main').find('.agency').length == 1) {
            $('.agency').slick({
            // slidesToShow: 4,
                centerMode: true,
                variableWidth: true,
             //   slidesToScroll: 1,
              //  autoplay: true,
                infinite: true,
             //   autoplaySpeed: 2000,
                dots: false
            });
        }
   /* agency */
   
   /* booking top */
        
        if ($('.main').find('.slider-bembi').length == 1) {
            $('.slider-bembi').slick({
                //slidesToShow: 1,
                //fade: true,
                centerMode: true,
                variableWidth: true,
                slidesToScroll: 1,
                adaptiveHeight: true,
               // autoplay: true,
                infinite: true,
               // autoplaySpeed: 10000,
                dots: true
            });
        }
   /* booking top */
   
   
    /* closed projects */
    
        if ($('.main').find('.close-project-slider').length == 1) {
            $('.close-project-slider').slick({
                 slidesToShow: 2,
               // centerMode: true,
               // variableWidth: true,
                slidesToScroll: 2,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 10000,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
   /* closed projects */
    

});

$(window).load(function () {
    changeViewport();
});

$(window).resize(function () {
/*
    if($(window).width() < 992 ){
        var dna = $(".portfolio-conteiner .box ");
        wall.unsetFilter();
        wall.fixSize({
            block: dna,
            width: 440,
            height: 440
        });
    }
   */ 
    /* map */
        if ($('.main').find('#mapper').length == 1) {
            if ($(window).width() < 768) {
                map.set('draggable', false);
            }
            else {
                map.set('draggable', true);
            };
        }
    /* map */

    /* fix name  band */

        if ($('.main').find('.str-box').length == 1) {
            if ($(window).width() > 1024) {
                $('.about-block p:first').css('padding-top', $('.super-title').height() + 110);
            } else {
                $('.about-block p:first').css('padding-top', 0);
            }
        }

    /* fix name */
    
    /* fix title up */
    
        if($('.main').find('.agency-wrap').length == 1){
            $('.agency-wrap').css('margin-top', -$('.agency-wrap .title').height() );
        }
    
    /* fix title up*/

});