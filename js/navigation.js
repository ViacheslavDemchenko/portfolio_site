$(document).ready(function() {

	var navToggleButton = $('.menu__toggle');
	var navToggleIcon = $('.menu__toggle .fa');
	var navBlock = $('.menu__list');
	var navBlockOpen = $('menu__list--open');
	var navLink = $('.menu__list__link');
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times';

	// Мобильная навигация
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		if ( navToggleIcon.hasClass(iconNav) ){
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		} else {
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}
		
	});

	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {
			if ( navToggleIcon.hasClass(iconNav) ){
				navToggleIcon.removeClass(iconNav);
				navToggleIcon.addClass(iconClose);
			} else {
				navToggleIcon.removeClass(iconClose);
				navToggleIcon.addClass(iconNav);
			}
		}

		navBlock.removeClass(navBlockOpen);
		
	});

	$(window).resize(function(){
		let w = $(window).width();
			if(w > 768) {
			   navBlock.removeAttr('style');
			   navBlock.removeClass(navBlockOpen);
			}
	});

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({highlightSelector:"nav a"
	});


}); 