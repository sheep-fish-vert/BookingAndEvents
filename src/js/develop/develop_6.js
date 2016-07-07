
function tabChangig(){
	$('.exp-tab').on('click', function(){
		$('.exp-tab').removeClass('active-tab');
		$(this).addClass('active-tab');
		var tabNum = $(this).data('tab');
		console.log(tabNum);
		$('.tab-content').hide();
		var index = $('.tab-content').eq(tabNum-1).show();
	})
}

function navigationMove(){
	var position = $(window).scrollTop();
	var height = $('.header-events').height();

	$(window).scroll(function(){
		setWindowPosition();
		console.log(position);
		console.log(height);
		if(position > height){
			$('header .wrapper').css({
				// 'background':'url("../images/events-header-bg-2.png") no-repeat',
				// 'background-size':'cover',
				// 'background-position':'50%',
				// 'z-index':'9999'
				'opacity':'0.9'
			});
		}else{ 
			$('header .wrapper').css({
			// 'background':'url("../images/events-header-bg.jpg") no-repeat',
			// 'background-size':'cover',
			// 'background-position':'50%',
			// 'z-index':'9999'	
			'opacity':'1'
			}); 
		}
	})

	function setWindowPosition(){
		position = $(window).scrollTop();
		
	}
}

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
					//'background': 'rgba(255, 255, 255, 0)' 
				}
			}
		}	
	});

	tabChangig();
	navigationMove()

});

$(window).load(function(){

});

$(window).resize(function(){

});