$(document).ready(function() {

	var menuButton = $('.menu__toggle'),
		menuMobile = $('.menu__list'),
		menuMobile = $('.menu__list'),
		menuLink = $('.menu__list__link'),
		menuMobileOpen = 'menu__list--open',
		menuIcon = $('.menu__toggle .fa'),
		iconOpen = 'fa-bars',
		iconClose = 'fa-times';

	function screenWidthCheck() {
		if ( menuIcon.hasClass(iconOpen) ) {
			menuIcon.removeClass(iconOpen);
			menuIcon.addClass(iconClose);
		} else {
			menuIcon.removeClass(iconClose);
			menuIcon.addClass(iconOpen);
		}
	};

	menuButton.on('click', function(e) {
		e.preventDefault();
		menuMobile.toggleClass(menuMobileOpen);
		screenWidthCheck();	
	});

	menuLink.on('click', function() {
		menuMobile.removeClass(menuMobileOpen);
		screenWidthCheck();
	});

	$(window).resize(function(){
		var w = $(window).width();
			if(w > 768 ) {
			    menuMobile.removeAttr('style');
			    menuMobile.removeClass(menuMobileOpen);

			    if ( menuIcon.hasClass(iconClose) ) {
					menuIcon.removeClass(iconClose);
					menuIcon.addClass(iconOpen);
				}
			}
	});

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({highlightSelector:"nav a"
	});

	$('#portfolio-projects').mixItUp();

});