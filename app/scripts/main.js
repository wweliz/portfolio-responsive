//////////////////////////////////////////////////////////////////////////
// MEDIA QUERY BREAKPOINTS ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Small screens -- max-width 640px, mobile-only styles
// @media only screen and (max-width: 40em) { }

// Medium screens -- min-width 641px and max-width 1024px
// @media only screen and (min-width: 40.063em) and (max-width: 64em) { }

// Large screens -- min-width 1025px and max-width 1440px
// @media only screen and (min-width: 64.063em) and (max-width: 90em) { }

// XLarge screens -- min-width 1441px and max-width 1920px
// @media only screen and (min-width: 90.063em) and (max-width: 120em) { }

// XXLarge screens -- min-width 1921px
// @media only screen and (min-width: 120.063em) { }

//////////////////////////////////////////////////////////////////////////
// FUNTION DEFINITIONS ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function addHeaderMargin() {
	var smallAndMed = window.matchMedia("screen and (max-width: 64em)")

	// if media query is at least Foundation screen size medium or bigger...
	if (smallAndMed.matches){
		$('.header').addClass('addMargin');;		
	}
	// if media query does not match...
	else{
		$('.header').removeClass('addMargin')
	}
};

function removeDotsLeft() {
	var smallScreen = window.matchMedia("screen and (max-width: 40em)")

	// if media query matches Foundation screen size small...
	if (smallScreen.matches){
				document.getElementsByClassName('header').className += "addPadding";

		$('.dots-left').hide();
	}
	// if media query does not match...
	else{
		$('.dots-left').show();
	}
};

//////////////////////////////////////////////////////////////////////////
// FUNTION CALLS /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// implement Foundation responsive framework
$(document).foundation();

addHeaderMargin();
removeDotsLeft();

// on window resize, call function 'removeDotsLeft'
window.addEventListener('resize', addHeaderMargin, removeDotsLeft);
