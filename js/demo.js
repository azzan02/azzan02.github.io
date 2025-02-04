/*
Theme Name: Petri
Description: Responsive App Landing Page
Author: Bluminethemes
Theme URI: http://bluminethemes.com/preview/themeforest/html/petri/
Author URI: http://themeforest.net/user/Bluminethemes
Version: 1.0
*/

(function($) {
	"use strict";

	/* ------------------------------------------------------------------------ */
	/*	BOOTSTRAP FIX FOR WINPHONE 8 AND IE10
	/* ------------------------------------------------------------------------ */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

	function detectIE() {
		if ($.browser.msie && $.browser.version == 9) {
			return true;
		}
		if ($.browser.msie && $.browser.version == 8) {
			return true;
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}
	
	document.addEventListener("DOMContentLoaded", function () {
		// Filtering projects based on categories
		let filterButtons = document.querySelectorAll("#filter-button li");
		let projectBoxes = document.querySelectorAll(".project-box");
	
		filterButtons.forEach(button => {
			button.addEventListener("click", function () {
				let filterValue = this.getAttribute("data-filter");
	
				// Remove 'current' class from all buttons and add to the clicked one
				filterButtons.forEach(btn => btn.classList.remove("current"));
				this.classList.add("current");
	
				// Show/Hide project boxes based on filter
				projectBoxes.forEach(box => {
					if (filterValue === "*" || box.classList.contains(filterValue.substring(1))) {
						box.style.display = "block"; // Show matching projects
					} else {
						box.style.display = "none"; // Hide non-matching projects
					}
				});
			});
		});
	
		// Ensure all projects are visible on page load
		document.querySelector("[data-filter='*']").click();
	
		// Fancybox functionality (if used)
		if (typeof Fancybox !== "undefined") {
			Fancybox.bind("[data-fancybox]", {});
		}
	});
	

	//BEGIN DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {

		/* ------------------------------------------------------------------------ */
		/*	SMOOTH SCROLL
		/* ------------------------------------------------------------------------ */
		var scrollAnimationTime = 1000,
			scrollAnimation = 'easeInOutExpo';

		$('a.scrollto').bind('click.smoothscroll',function (event) {
			event.preventDefault();

			var target = this.hash;

			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, scrollAnimationTime, scrollAnimation, function () {
				window.location.hash = target;
			});

		});



		/**********************************************************/
        /* CUSTOMIZABLE SCROLLBAR                                 */
        /**********************************************************/
        // $("html").niceScroll({
        //     mousescrollstep: 40,
        //     cursorcolor: "#ff3030",
        //     zindex: 9999,
        //     cursorborder: "none",
        //     cursorwidth: "6px",
        //     cursorborderradius: "none",
        //     horizrailenabled:false
        // });

	});
	//END DOCUMENT.READY FUNCTION

	

})(jQuery);



// $(document).ready(function(){
// 	$('.link').hover(function() {
// 		$(this).addClass('transition');

// 	}, function() {
// 		$(this).removeClass('transition');
// 	});
// });