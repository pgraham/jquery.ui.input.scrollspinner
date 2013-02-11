(function ($, undefined) {
  "use strict";

  test( "environment test", function () {
    expect( 2 );
    ok( $, "test jQuery availability" );
    ok( $.ui, "test jQuery UI availability" );
  });

} (jQuery));
