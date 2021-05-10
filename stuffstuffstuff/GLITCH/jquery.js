window.setInterval(function(){

  var randomH = Math.floor(Math.random() * 360);

   $('body').css({
 'background-color' : 'hsl(' + randomH + ', 100%, 70%)'
});

}, 1000);


// window.setInterval(function(){
//
//   var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
//
//    $('body').css({
//  'background-color' : randomColor,
// });
//
// }, 30000);
