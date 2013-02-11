(function ($, undefined) {
  "use strict";

  $.widget('ui.scrollspinner', {
    options: {},
    _create: function () {
      this.element.wrap('<span class="ui-scrollspinner"></span>');
    },
    _destroy: function () {
    },
    _setOption: function (key, value) {
      switch (key) {
        
      }

      this._super("_setOption", key, value);
    }
  });

} (jQuery));
