
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
<<<<<<< HEAD

=======
	tabChangig();
>>>>>>> 378b9d3ec5defad45c333c43596be2568f634a25
});

$(window).load(function(){

});

$(window).resize(function(){

});