$(document).ready(function(){
  $("#t1").draggable();
  $("#error").draggable();

  $("#t2").click(function(){
    	$("#video").show();
    	 });

  // $("#pup").hover(function(){
  $("#pup").click(function(){
      $("#t1").hide();
        });

      $("error").hover(function(){
              $(this).hide();
              });

              // $("#t3").hover(function(){
              //   $("#t2").css("color", "red");
              //   });

                $("#t3").hover(function(){
                          $("#t2").append(" and your ghost");
                          });

  // alert("hello world");
})


// $(document).ready(function(){
//   alert("hihihihi");
// })
