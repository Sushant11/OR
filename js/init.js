$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up  
$(window).resize(function(){
	if ($(window).width() >= 980){	

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

        // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
		// do something here
	}	
});
    
        

$('.list-group-item').click(function() {
    $('.list-group-item').addClass('az-notactive');
    $(this).removeClass('az-notactive');
    $(this).addClass('az-active');
});
    
    
    $('#a-selector').click(function() {
    $('.location-list').addClass('az-dnone');
    $('.a').removeClass('az-dnone');
    $('.a').addClass('az-active');
});
    
    $('#b-selector').click(function() {
    $('.location-list').addClass('az-dnone');
    $('.b').removeClass('az-dnone');
    $('.b').addClass('az-active');
});
    
     $('#all-selector').click(function() {
         $('.location-list').removeClass('az-dnone');
    $('.location-list').addClass('az-active');

});
//   $('#prod-1').click(function() {
//    $('.swiper-slide').addClass('az-notactive');
//    $('.prod1').removeClass('az-notactive');
//    $('.prod1').addClass('az-active');
//});
//    
//    $('#b-selector').click(function() {
//    $('.location-list').addClass('az-notactive');
//    $('.b').removeClass('az-notactive');
//    $('.b').addClass('az-active');
//}); 
    // select all thumbnails
const galleryThumbnail = document.querySelectorAll(".thumbnails-list li");
// select featured
const galleryFeatured = document.querySelector(".product-gallery-featured img");

// loop all items
galleryThumbnail.forEach((item) => {
  item.addEventListener("mouseover", function () {
    let image = item.children[0].src;
    galleryFeatured.src = image;
  });
});

// show popover
$(".main-questions").popover('show');
});

