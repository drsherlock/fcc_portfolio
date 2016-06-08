$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$(".work-image").hover(function () {
  var sliderId= $(this).children('.slider').attr("id"); 
  var width = $(".work-image img").width();
  $('#'+sliderId).css("width", width);
  $('#'+sliderId).slideToggle("slow");
});
