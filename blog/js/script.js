$(".titleButton").click(function(){
  
  if($(".topnav").is(":visible")){
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".topnav").offset().top
  }, 2000);
  }
  else{
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".verticalNav").offset().top
  }, 2000);
    
  }
   
});
$(".blogScrollDown").click(function(){
    
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".returnHome").offset().top
    }, 2000);
});


$(".navbar-brand").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".homepage").offset().top
    }, 2000);
});

$(".1").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutMe").offset().top
    }, 2000);
});
$(".2").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".blogs").offset().top
    }, 2000);
});
$(".3").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});

// animate scroll down button in landing area
$(".blogScrollDown").hover(function(){

    $(".blogScrollDown img").animate({bottom:"-=15px"},500,"linear");
    $(".blogScrollDown img").animate({bottom:"+=15px"},500,"linear");
   
    
},function(){

});
// animate scroll down button in blogs
$(".titleButton").hover(function(){

    $(".titleButton img").animate({bottom:"-=15px"},500,"linear");
    $(".titleButton img").animate({bottom:"+=15px"},500,"linear");
   
    
},function(){

});

// index page learn more buttons and content toggle

for(let i = 0; i < 5;i++){
  $('.blogLearnMore'+ i).click(function(){
  

    if($('.learnMoreContent' + i).is(":visible")){
      
      
      $('.blogLearnMore' + i + ' p').text("Learn More");
      $('.learnMoreContent' + i).slideToggle();
    }
    else{
     
      $('.blogLearnMore' + i + ' p').text("Hide");
      $('.learnMoreContent'+ i).slideToggle();
    }
    
  })
}



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


//Sticky vertical navbar code below
if($('.verticalNav').is(":visible")){

    // Get the header
  var header = document.getElementsByClassName("verticalNav")[0];

  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  console.log(sticky);

  $window.on('scroll resize', function() {
    newScrollPosition();
    myFunction();
  });

  function newScrollPosition(){
    sticky = dw_getWindowDims();
  }

  // Get viewport size
  function dw_getWindowDims() {
      var doc = document, w = window;
      var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
              doc.documentElement: doc.body;
      
      var width = docEl.clientWidth;
      var height = docEl.clientHeight;
      
      // mobile zoomed in?
      if ( w.innerWidth && width > w.innerWidth ) {
          width = w.innerWidth;
          height = w.innerHeight;
      }
      
      return height;
  }
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("stickyNav");
    } else {
      header.classList.remove("stickyNav");
    }
  }


}

