/* ----------------------------------
    Shrewd
    Version: 2.0
    Author: BootEx
 ---------------------------------- */
 (function ($) {
    "use strict";

 




    //======= MAGNIDIC POPUP JS  ========//
    $('.work-item').magnificPopup({
        type:'inline'
    });


      
    //======= ISOTOP FILTERING JS  ========//
    $(window).on('load',function() { 
        var grid_container = $('.portfolio-container'),
            grid_item = $('.grid-item');
            

         grid_container.imagesLoaded(function () {
            grid_container.isotope({
                itemSelector: '.grid-item',
                   layoutMode: 'masonry'
            });
        });

        $('.portfolio-filter li').on('click', function (e) {
            $('.portfolio-filter li.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            grid_container.isotope({
                filter: selector
            });
            return false;
            e.preventDefault();
        });
    });
    


    



    
})(jQuery); //end