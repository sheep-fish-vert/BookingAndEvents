 /* plugin */ 

 /* plugin */
$(document).ready(function(){
    

  console.log($('.main').find('#artist-conteiner').length);
 
  console.log($('.main').find('#artist-list').length);
  
  if( $('.main').find('#artist-conteiner').length == 1 ){
      
      var wall = new Freewall("#artist-conteiner");
      wall.reset({
        selector: '.box',
        animate: true,
        cellW: 256,
        cellH: 256,
        draggable: true,
        onResize: function() {
            wall.fitWidth();
        },
        onBlockMove: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
      
  }
  
  if( $('.main').find('#artist-list').length == 1 ){
      console.log('tyt');
      var wall = new Freewall("#artist-list");
      wall.reset({
        selector: '.box',
        animate: true,
        cellW: 560,
        cellH: 100,
        fixSize: 0,
        gutterX: 20,
        gutterY: 10,
        draggable: true,
        onResize: function() {
            wall.fitWidth();
        },
        onBlockMove: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
      
  }
  
});

$(window).load(function(){

});

$(window).resize(function(){

});