 /* plugin */ 

 /* plugin */
 var wall;
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
  
  if( $('.main').find('#portfolio-conteiner').length == 1 ){

      var wall = new Freewall("#portfolio-conteiner");
      wall.reset({
        selector: '.box',
        animate: true,
        cellH: 400,
        cellW: 400,
        fixSize: 1,
        gutterX: 20,
        gutterY: 10,
       // draggable: true,
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