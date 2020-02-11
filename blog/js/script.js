$(".titleButton").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".navbar").offset().top
    }, 2000);
})

$(".navbar-brand").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".homepage").offset().top
    }, 2000);
})

$(".1").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutMe").offset().top
    }, 2000);
})
$(".2").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".blogs").offset().top
    }, 2000);
})
$(".3").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
})

// animate scroll down button in landing area
$(".titleButton").hover(function(){

    $(".titleButton img").animate({bottom:"-=15px"},500,"linear");
    $(".titleButton img").animate({bottom:"+=15px"},500,"linear");
   
    
},function(){

});
// Detect which section is displayed in the screen
var $window = $(window);
var $animation_elements = $('.animation-element');

function check_if_in_view() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);


  $.each($animation_elements, function() {

    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      if($element.hasClass("aboutMe")){
        $(".1").addClass('in-view');

      }
      else if($element.hasClass("blogs")){
        $(".1").removeClass('in-view');
        $(".2").addClass('in-view');

      }
      else if($element.hasClass("contact")){
        $(".2").removeClass('in-view');
        $(".3").addClass('in-view');

      }


    
    } else {
      if($element.hasClass("aboutMe")){
        $(".1").removeClass('in-view');

      }
      else if($element.hasClass("blogs")){
        $(".2").removeClass('in-view');

      }
      else if($element.hasClass("contact")){
        $(".3").removeClass('in-view');

      }
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

