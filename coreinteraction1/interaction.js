window.setInterval(function(){

    var randomH = Math.floor(Math.random() * 360);
  
     $('body').css({
   'background-color' : 'hsl(' + randomH + ', 100%, 70%)'
  });
  
  }, 1000);
  
  
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }