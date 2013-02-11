(function ($, undefined) {
  "use strict";

  test( 'environment test', function () {
    expect( 2 );
    ok( $, 'test jQuery availability' );
    ok( $.ui, 'test jQuery UI availability' );
  });

  test( 'structure - detached', function () {
    var widget = $('<input/>').scrollspinner();

    ok( widget.parent(), 'unattached widget has a parent' );
    ok( widget.parent().is('span.ui-scrollspinner'),
      'detached input wrapped');
  });

  test( 'structure - attached', function () {
    var widget = $('#widget').scrollspinner();

    ok( widget.parent().is('span.ui-scrollspinner'),
      'attached input wrapped' );

  });

} (jQuery));
