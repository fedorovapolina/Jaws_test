$(document).ready(function() {
  $('.modal').on('hide.bs.modal', function (e) {
       $('.loader').removeClass('visible');
        $(background).removeClass('loader-background');
  });

  $('.parallax-index').parallax({imageSrc: 'img/top-bg.jpg'});
  $('.parallax-adv').parallax({imageSrc: 'img/rectangle_2.png'});
  $('.parallax-seo').parallax({imageSrc: 'img/rectangle_2_720.png'});

  // uploader
  $('body').on('change', '#upload', function() {
      var filesArray = $(this)[0].files, fileNames = '';
      for (var key in filesArray) {
          if (filesArray.hasOwnProperty(key) && typeof filesArray[key].name != 'undefined') {
              fileNames = fileNames + ('<li>' + filesArray[key].name + '</li>');
          }
      }
      $('#uploadingFilesNames').html(fileNames);
  });


$('body').on('change', '#upload', function() {
      var filesArray = $(this)[0].files, fileNames = '';
      for (var key in filesArray) {
          if (filesArray.hasOwnProperty(key) && typeof filesArray[key].name != 'undefined') {
              fileNames = fileNames + ('<li>' + filesArray[key].name + '</li>');
          }
      }
      $('#uploadingFilesNames-mob').html(fileNames);
  });





  $('.action-link').on('click', function() {
      var self = $(this);
      $('.action-list > li').removeClass('active');
      self.parent().addClass('active');
      $('.action-right').html(self.next('.action-content').html());
  });
  $('.action-link').first().trigger('click');

  if ( $('#map').length ) {
    mapInit();
  }

  $('.call-mobile').on('click', function() {
    $('.call-mobile-popup').fadeIn();
    $('.call-mobile-close').css("z-index", "10");

  });

  $('.call-mobile-close').on('click', function() {
    $('.call-mobile-popup').fadeOut();
  });

  $('.open-menu-mobile').on('click', function() {
    $('.mobile-menu').addClass('active');
    $('body').addClass('overflow');
    $('.call-mobile').addClass('active');
    $('.email-mobile').addClass('active');
    $('.navbar-brand-top').css("display", "none");
  });

  $('.mobile-mobile-close').on('click', function() {
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('overflow');
    $('.call-mobile').removeClass('active');
    $('.email-mobile').removeClass('active');
    $('.navbar-brand-top').css("display", "block");
  });


});

$(window).scroll(function() {

  var scroll = $(this).scrollTop();

  if (scroll > 500) {
    $('.main-nav').addClass('dark');
  } else {
    $('.main-nav').removeClass('dark');
  }

});




function showModal(button){
   background = document.getElementById("background");
   $(background).addClass('loader-background');

   $('.loader').addClass('visible');

   modal = $(button).data('target');

   var image=$(modal).find('img');
   test =image.data('init');

   if(!test){
        src = image.data('src');
        image.attr('src',src);
        test=0;
        image.attr('data-init',1);
   }

  setTimeout(function(){
      $(modal).modal('show')
  },1000);
}


function mapInit() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        scrollwheel:  false,
        
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(50.395734, 30.636403), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "gamma": 1
                    }]
                    }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                    }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                    }, {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    }, {
                    "featureType": "poi.business",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                    }, {
                    "featureType": "poi.business",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                    }, {
                    "featureType": "poi.place_of_worship",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                    }, {
                    "featureType": "poi.place_of_worship",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                    }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                    }, {
                    "featureType": "water",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "saturation": 50
                    }, {
                        "gamma": 0
                    }, {
                        "hue": "#50a5d1"
                    }]
                    }, {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#333333"
                    }]
                    }, {
                    "featureType": "road.local",
                    "elementType": "labels.text",
                    "stylers": [{
                        "weight": 0.5
                    }, {
                        "color": "#333333"
                    }]
                    }, {
                    "featureType": "transit.station",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "gamma": 1
                    }, {
                        "saturation": 50
                    }]
                }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.395734, 30.636403),
        map: map,
        icon: 'img/Point_on_the_map.svg'
    });
}






/*Polina Fedorova*/

var click = true;
function toggleNav(){
    if (click == true){
        openNav();
        click = false;
    } else {
        closeNav();
        click = true;
    }
}
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("main").style.filter = "blur(5px)";

}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-250px";
    document.getElementById("main").style.filter= "none";
}