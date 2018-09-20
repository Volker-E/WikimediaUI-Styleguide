/* eslint-disable vars-on-top, one-var */
if ( document.head && 'Promise' in window ) {
	var html = document.documentElement;

	if ( sessionStorage.getItem( 'fontsLoaded' ) ) {
		html.classList.add( 'fonts-loaded' );
	} else {
		var script = document.createElement( 'script' );
		script.src = './js/vendor/fontfaceobserver/fontfaceobserver.standalone.js';

		script.onload = function () {
			var serif = new FontFaceObserver( 'Charter' ); /* eslint-disable-line no-undef */

			Promise.all( [ /* eslint-disable-line no-undef */
				serif.load()
			] ).then( function () {
				html.classList.add( 'fonts-loaded' );
				sessionStorage.setItem( 'fontsLoaded', 1 );
			} );
		};
		document.head.appendChild( script );
	}
}

/*
 * Matomo (former Piwik) Embed Tracking Code
 * @see https://matomo.org/blog/2017/04/different-ways-embedding-piwik-tracking-code-faster-website-performance/
 */
var _paq = _paq || []; /* eslint-disable-line no-underscore-dangle, no-use-before-define */
_paq.push( [ 'setDomains', [ '*.design.wikimedia.org.' ] ] );
_paq.push( [ 'trackPageView' ] );
_paq.push( [ 'enableLinkTracking' ] );

function embedTrackingCode() {
	var u = 'https://piwik.wikimedia.org/',
		d = document,
		g = d.createElement( 'script' ),
		s = d.getElementsByTagName( 'script' )[ 0 ];
	_paq.push( [ 'setTrackerUrl', u + 'piwik.php' ] );
	_paq.push( [ 'setSiteId', '16' ] );
	g.defer = true;
	g.async = true;
	g.src = u + 'piwik.js';
	s.parentNode.insertBefore( g, s );
}

if ( window.addEventListener ) {
	window.addEventListener( 'load', embedTrackingCode, false );
} else if ( window.attachEvent ) {
	window.attachEvent( 'onload', embedTrackingCode );
} else {
	embedTrackingCode();
}

//# sourceMappingURL=wikimedia-design-style-guide.concat.js.map.json