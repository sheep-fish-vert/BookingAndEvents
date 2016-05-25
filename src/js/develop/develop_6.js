


$(document).ready(function(){
	
	
	$(".fancybox-form").fancybox({
		//padding: [20, 120, 40, 120],
		openEffect  : 'fade',
		closeEffect : 'fade',
		autoResize:true,
		wrapCSS:'fancybox-form',
		'closeBtn' : true,
		fitToView:true,
		padding:'0',
		//minHeight: 600,
		fitToVie: true,
		autoCenter: true,
		helpers:{
			overlay: {
				css:{
					'background': 'rgba(255, 255, 255, 0)' 
				}
			}
		}	
	});

});

$(window).load(function(){

});

$(window).resize(function(){

});