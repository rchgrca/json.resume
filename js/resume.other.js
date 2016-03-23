String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var oSection = {
    "about":"user",
    "work-experience":"building",
    "skills":"code",
    "education":"mortar-board",
    "interests":"heart"
}

window.onload = function () {
  var toggleFloatingMenu = function() {
    $( '.js-floating-nav' ).toggleClass( 'is-visible' );
    $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );
  };

  $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );
  $( "[rel=tooltip]" ).tooltip();
  $( '.js-floating-nav-trigger' ).on( 'click', function(e) {
    e.preventDefault();
    toggleFloatingMenu();
  });
  $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );
}
