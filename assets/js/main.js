/*------------------------------------------------------------------
Project:    Construction
Version:    1.0
Last change:    1/12/2018
Assigned to:    Micky Theme 
Primary use:    Micky Theme 
-------------------------------------------------------------------*/

/*------------------------------------------------------------------

[Table of contents]

  01. Main slider
  02. Counter Up
  03. Testimonials
  04. Venobox
  05. Our Team Slider
  06. Add icon to submenu
  07. Menu Mobile
  08. Related  Slider
  09. Blogs Slider
  10. Masonry
  11. Go to element
  12. Questions toggle
  13. Clients Slider
  14. Fixed header
  15. Search header
  16. Isotope
  17. Menu filter
  18. Preloading
  19. Wow

  -------------------------------------------------------------------*/
  (function($) {
    "use strict";
    $(document).ready( function() {

    /* [ Add icon to submenu ]
    --------------------------------------*/ 
    $( '.sub-menu' ).each(function() {
      $( this ).parent().addClass( 'has-child' ).find( '> a' ).append( '<span class="arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span>' );
    });
    $( '.main-menu .arrow' ).on( 'click' , function ( e ) {
      e.preventDefault();
      $( this ).toggleClass( 'change' );
      $( this ).parents().eq(1).find( '>.sub-menu' ).slideToggle();
    } );

    /*  [ Main Slider ]
    - - - - - - - - - - - - - - - - - - - - */
    $('.main-slider-area .owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      items:1,
      nav:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000 ,
      smartSpeed: 1000,
      navText: ['<i class="fa fa-angle-right" aria-hidden="true"></i>','<i class="fa fa-angle-left" aria-hidden="true"></i>'],
    });
    /*  [ Testimonials ]
    - - - - - - - - - - - - - - - - - - - - */
    $('.testimonials-area .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:true,
      items:1,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });
    /*  [ Isotopy ]
    - - - - - - - - - - - - - - - - - - - - */
    $( ".content-filter" ).isotope({
      itemSelector: '.filter-item',
      layoutMode: 'masonry'
    });

    $( ".menu-filter a" ).on( "click",function() {
      $( ".menu-filter a" ).removeClass( "active" );
      $( this ).addClass( "active" );
      var selector = $( this ).attr( 'href' );
      $( ".content-filter" ).isotope({
        filter : selector,
      });
      return false;
    } );

    /*  [ Counter ]
    - - - - - - - - - - - - - - - - - - - - */
    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });
    /*  [ Our Team Slider ]
    - - - - - - - - - - - - - - - - - - - - */
    $('.our-team-area .owl-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:false,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
      }
    });


  });
  })(jQuery);