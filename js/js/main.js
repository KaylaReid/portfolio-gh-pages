/* ----------------------------------
	Shrewd
	Version: 2.0
	Author: BootEx
 ---------------------------------- */

(function ($) {
    "use strict";

	//======= EASTER EGG =======//
	console.log("✨ ⚡ ✨ Cheers fellow Dev Witch or Wizard! There's some 'extra' magic hidden on this page. Take a closer look at Gryffindor or Ravenclaw for some change in Decor! ✨ ⚡ ✨")

	//======= SITE LOADER ========//
    $(window).on('load',function() { 
	    $("#loaderInner").fadeOut(); 
	    $("#loader").delay(400).fadeOut("slow"); 
	});    


	//======= STICK HEADER ========//
	$(window).on('scroll', function() {
        if ($(window).scrollTop() >= 75) {
            $("body").addClass("fixed-header");
        }
        else {
            return $("body").removeClass("fixed-header");
        }
    });
		


	//======= NAVBAR SMOOTH SCROLL========//
	$('.navbar-collapse ul li a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 600);
        $(".navbar-collapse").collapse("hide");
        e.preventDefault();
    });


	
	$('body').scrollspy({target:".navbar-collapse",offset:70})



	//======= PARALLAX BG ========//
	// $('.header-area').parallax("40%", 0.2);
	// $('.review-bg').parallax("10%", -0.04);



	//======= TYPED JS ========//
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 20,
        backDelay: 2500,
        loop: true,
        cursorChar:'',
        contentType: 'html',
	});


	//======= MAGNIFIC POPUP JS  ========//
	$('.work-item').magnificPopup({
		type:'inline'
    });

	// ====== COLOR THEME CHANGE ======//

	// Gryffindor
	$("b").click(function(){
		if($("b span").hasClass("gryffindor")){
			$(".main-menu").removeClass("ravenclaw-select")
			$(".main-menu").addClass("gryffindor-select")
			$(".about-section-title").removeClass("ravenclaw-section-title")
			$(".about-section-title").addClass("gryffindor-section-title")
			$(".tech-section-title").removeClass("ravenclaw-section-title")
			$(".tech-section-title").addClass("gryffindor-section-title")
			$(".resume-section-title").removeClass("ravenclaw-section-title")
			$(".resume-section-title").addClass("gryffindor-section-title")
			$(".portfolio-section-title").removeClass("ravenclaw-section-title")
			$(".portfolio-section-title").addClass("gryffindor-section-title")
			$(".contact-section-title").removeClass("ravenclaw-section-title")
			$(".contact-section-title").addClass("gryffindor-section-title")
			$(".welcome").removeClass("raven-welcome")
			$(".welcome").addClass("gryff-welcome")
			$(".logo").removeClass("raven-logo")
			$(".logo").addClass("gryff-logo")
			$(".top-social").removeClass("raven-links")
			$(".top-social").addClass("gryff-links")
			$(".social-links").removeClass("raven-links")
			$(".social-links").addClass("gryff-links")
			$(".aboutme-filter").removeClass("raven-filter")
			$(".aboutme-filter").addClass("gryff-filter")
			$(".technology-filter").removeClass("raven-filter")
			$(".technology-filter").addClass("gryff-filter")
			$(".portfolio-filter").removeClass("raven-filter")
			$(".portfolio-filter").addClass("gryff-filter")
			$(".con-info").removeClass("raven-con")
			$(".con-info").addClass("gryff-con")
			$(".resumes").removeClass("raven-resume")
			$(".resumes").addClass("gryff-resume")
			$(".resume-section-btn div a").removeClass("raven-resume-btn")
			$(".resume-section-btn div a").addClass("gryff-resume-btn")
			$(".about-resume-btn div a").removeClass("raven-resume-btn")
			$(".about-resume-btn div a").addClass("gryff-resume-btn")
			$(".work-inner").removeClass("raven-port-inner")
			$(".work-inner").addClass("gryff-port-inner")
			$(".footer-area").removeClass("raven-footer")
			$(".footer-area").addClass("gryff-footer")
			$(".portfolio-container").addClass("gryff-portfolio")
			$(".project-links").removeClass("raven-port-links")
			$(".project-links").addClass("gryff-port-links")
			$(".work-popup").removeClass("raven-port-close")
			$(".work-popup").addClass("gryff-port-close")
			console.log('✨ALOHAMORA✨')
			console.log('There may be some more "Magic" to find, but you wont have to look far!')
			console.log('You can also "return" if you so choose.')
		}
	})

	// Ravenclaw
	$("b").click(function(){
		if($("b span").hasClass("ravenclaw")){
			$(".main-menu").removeClass("gryffindor-select")
			$(".main-menu").addClass("ravenclaw-select")
			$(".about-section-title").removeClass("gryffindor-section-title")
			$(".about-section-title").addClass("ravenclaw-section-title")
			$(".tech-section-title").removeClass("gryffindor-section-title")
			$(".tech-section-title").addClass("ravenclaw-section-title")
			$(".resume-section-title").removeClass("gryffindor-section-title")
			$(".resume-section-title").addClass("ravenclaw-section-title")
			$(".portfolio-section-title").removeClass("gryffindor-section-title")
			$(".portfolio-section-title").addClass("ravenclaw-section-title")
			$(".contact-section-title").removeClass("gryffindor-section-title")
			$(".contact-section-title").addClass("ravenclaw-section-title")
			$(".welcome").removeClass("gryff-welcome")
			$(".welcome").addClass("raven-welcome")
			$(".logo").removeClass("gryff-logo")
			$(".logo").addClass("raven-logo")
			$(".top-social").removeClass("gryff-links")
			$(".top-social").addClass("raven-links")
			$(".social-links").removeClass("gryff-links")
			$(".social-links").addClass("raven-links")
			$(".aboutme-filter").removeClass("gryff-filter")
			$(".aboutme-filter").addClass("raven-filter")
			$(".technology-filter").removeClass("gryff-filter")
			$(".technology-filter").addClass("raven-filter")
			$(".portfolio-filter").removeClass("gryff-filter")
			$(".portfolio-filter").addClass("raven-filter")
			$(".con-info").removeClass("gryff-con")
			$(".con-info").addClass("raven-con")
			$(".resumes").removeClass("gryff-resume")
			$(".resumes").addClass("raven-resume")
			$(".resume-section-btn div a").removeClass("gryff-resume-btn")
			$(".resume-section-btn div a").addClass("raven-resume-btn")
			$(".about-resume-btn div a").removeClass("gryff-resume-btn")
			$(".about-resume-btn div a").addClass("raven-resume-btn")
			$(".work-inner").removeClass("gryff-port-inner")
			$(".work-inner").addClass("raven-port-inner")
			$(".footer-area").removeClass("gryff-footer")
			$(".footer-area").addClass("raven-footer")
			$(".project-links").removeClass("gryff-port-links")
			$(".project-links").addClass("raven-port-links")
			$(".work-popup").removeClass("gryff-port-close")
			$(".work-popup").addClass("raven-port-close")
			console.log("✨ALOHAMORA✨")
			console.log('There may be some more "Magic" to find, but you wont have to look far!')
			console.log('You can also "return" if you so choose.')
		}
	})

	// Remove
	$(".return").click(function(){
		$(".main-menu").removeClass("gryffindor-select")
		$(".main-menu").removeClass("ravenclaw-select")
		$(".about-section-title").removeClass("gryffindor-section-title")
		$(".about-section-title").removeClass("ravenclaw-section-title")
		$(".tech-section-title").removeClass("gryffindor-section-title")
		$(".tech-section-title").removeClass("ravenclaw-section-title")
		$(".resume-section-title").removeClass("gryffindor-section-title")
		$(".resume-section-title").removeClass("ravenclaw-section-title")
		$(".portfolio-section-title").removeClass("gryffindor-section-title")
		$(".portfolio-section-title").removeClass("ravenclaw-section-title")
		$(".contact-section-title").removeClass("gryffindor-section-title")
		$(".contact-section-title").removeClass("ravenclaw-section-title")
		$(".welcome").removeClass("gryff-welcome")
		$(".welcome").removeClass("raven-welcome")
		$(".logo").removeClass("gryff-logo")
		$(".logo").removeClass("raven-logo")
		$(".top-social").removeClass("gryff-links")
		$(".top-social").removeClass("raven-links")
		$(".social-links").removeClass("gryff-links")
		$(".social-links").removeClass("raven-links")
		$(".aboutme-filter").removeClass("gryff-filter")
		$(".aboutme-filter").removeClass("raven-filter")
		$(".technology-filter").removeClass("gryff-filter")
		$(".technology-filter").removeClass("raven-filter")
		$(".portfolio-filter").removeClass("gryff-filter")
		$(".portfolio-filter").removeClass("raven-filter")
		$(".con-info").removeClass("gryff-con")
		$(".con-info").removeClass("raven-con")
		$(".resumes").removeClass("gryff-resume")
		$(".resumes").removeClass("raven-resume")
		$(".resume-section-btn div a").removeClass("gryff-resume-btn")
		$(".resume-section-btn div a").removeClass("raven-resume-btn")
		$(".about-resume-btn div a").removeClass("gryff-resume-btn")
		$(".about-resume-btn div a").removeClass("raven-resume-btn")
		$(".work-inner").removeClass("gryff-port-inner")
		$(".work-inner").removeClass("raven-port-inner")
		$(".footer-area").removeClass("gryff-footer")
		$(".footer-area").removeClass("raven-footer")
		$(".project-links").removeClass("gryff-port-links")
		$(".project-links").removeClass("raven-port-links")
		$(".work-popup").removeClass("gryff-port-close")
		$(".work-popup").removeClass("raven-port-close")
		console.log('✨FINITE INCANTATEM✨')
		console.log('Farewell!')
	})

  	
    //======= ISOTOP FILTERING JS/About Me  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.about-container'),
	    	grid_item = $('.about-grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.about-grid-item',
				   layoutMode: 'fitRows',
				   filter: '.about-career'
	        });
	    });

	    $('.aboutme-filter li').on('click', function (e) {
			$('.aboutme-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});
  	
    //======= ISOTOP FILTERING JS/Technology  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.technology-container'),
	    	grid_item = $('.new-grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.new-grid-item',
	       		layoutMode: 'fitRows'
	        });
	    });

	    $('.technology-filter li').on('click', function (e) {
			$('.technology-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});

    //======= ISOTOP FILTERING JS/Portfolio  ========//
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