window.setInterval(function(){

  var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

   $('body').css({
 'background-color' : randomColor,
});

}, 5000);
