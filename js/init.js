$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready

  // breakpoint and up  
  $(window).resize(function () {
    if ($(window).width() >= 980) {

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      // hide the menu when the mouse leaves the dropdown
      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });

      // do something here
    }
  });



  $('.list-group-item').click(function () {
    $('.list-group-item').addClass('az-notactive');
    $(this).removeClass('az-notactive');
    $(this).addClass('az-active');
  });


  $('#a-selector').click(function () {
    $('.location-list').addClass('az-dnone');
    $('.a').removeClass('az-dnone');
    $('.a').addClass('az-active');
  });

  $('#b-selector').click(function () {
    $('.location-list').addClass('az-dnone');
    $('.b').removeClass('az-dnone');
    $('.b').addClass('az-active');
  });

  $('#all-selector').click(function () {
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

  $('.trending-carousel').slick({
    slidesToShow: 1,
  });

  $(function () {
    // init zeynepjs
    var zeynep = $('.zeynep').zeynep({
      onClosed: function () {
        // enable main wrapper element clicks on any its children element
        $("body main").attr("style", "");

        console.log('the side menu is closed.');
      },
      onOpened: function () {
        // disable main wrapper element clicks on any its children element
        $("body main").attr("style", "pointer-events: none;");

        console.log('the side menu is opened.');
      }
    });

    // handle zeynep overlay click
    $(".zeynep-overlay").click(function () {
      zeynep.close();
    });

    // open side menu if the button is clicked
    $(".btn-menu").click(function () {
      if ($("html").hasClass("zeynep-opened")) {
        zeynep.close();
      } else {
        zeynep.open();
      }
    });
  });

  function openSearch() {
    document.getElementById("#searchbox").style.height = "100%";
  }

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    $("button").click(function () {
      $("p").css("color", "red");
    });
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  function openNav1() {
    document.getElementById("myNav1").style.width = "70%";
    $("button").click(function () {
    });
  }

  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }

  $(".search-toggler").click(function () {
    $("body").css("overflow", "hidden");
  });

  $(".search-close").click(function () {
    $("body").css("overflow", "auto");
  });

  $(".nav-toggler").click(function () {
    $("body").css("overflow", "hidden");
  });

  $(".nav-close").click(function () {
    $("body").css("overflow", "auto");
  });

  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function switchVisible() {
    if (document.getElementById('oneItem')) {

      if (document.getElementById('oneItem').style.display == 'none') {
        document.getElementById('oneItem').style.display = 'flex';
        document.getElementById('twoItem').style.display = 'none';
      }
      else {
        document.getElementById('oneItem').style.display = 'none';
        document.getElementById('twoItem').style.display = 'flex';
      }
    }
  }


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    $("button").click(function () {
      $("p").css("color", "red");
    });
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  $("#p1").elevateZoom()({
    zoomType: "inner",
    cursor: "crosshair"
  })

  $("#sizelist li a").click(function () {
    $("#sizelist li").not($(this).parent()).toggle();
  });

  $("#colorOption span a").click(function () {
    $("#colorOption span").not($(this).parent()).toggle();
  });
});

