$(function(){
  
    $(".dugme").on("click", function(){
      var dugmeId = $(this).attr("id");
      $('#n' + dugmeId).toggle();
      $(this).text(function(i, text){
            return text === "Read more" ? "Read less" : "Read more";
        })
    })
    
  });