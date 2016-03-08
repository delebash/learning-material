/**
 * Created by Daniel on 3/6/2016.
 */
;(function($) {
    'use strict';

    $('[data-ripple]').on('click', rip);
    $('[data-ripple]').on('touchstart', rip);

    function rip(e) {
        var self, ripple, size, x, y;

        x = y = 0;
        self = $(this);
        ripple = self.find('.ripple__effect');

        if(ripple.length === 0) {
            self.append('<div class="ripple__effect"></div>');
            ripple = self.find('.ripple__effect');
        }

        if(ripple.width() === 0) {
          //  debugger;
           // var diameter = Math.max(ripple.clientWidth, ripple.clientHeight);
            size = self.width() > self.height() ? self.width() : self.height();
            ripple.css({ width: size, height: size });
        }

        x = e.offsetX - ripple.width() / 2;
        y = e.offsetY - ripple.width() / 2;

        ripple.css({ top: y, left: x });

        ripple.addClass('animate');

        ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
            $(this).removeClass('animate');
        });
    }
})(jQuery);