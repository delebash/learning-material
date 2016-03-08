$.fn.extend({
    rippleBtn: function() {

        function aniEnd(obj, fn) {
            $(obj).on("animationend", fn);
        }

        return this.each(function() {

            var me = $(this);

            me.on("mousedown", function(e) {

                var x = e.pageX,
                    y = e.pageY;

                x = x - me.offset().left;
                y = y - me.offset().top;

                var ripple = $("<span class='ripple'></span>");
                ripple.css({
                    left: x - 2,
                    top: y - 2
                });
                me.append(ripple);
                aniEnd(ripple, function() {
                    ripple.remove();
                });

            });

        });

    }
})

$(".btn").rippleBtn();




var box = document.getElementById('box');
ripple = box.getElementsByClassName('ripple')[0];
box.addEventListener('click', function(e) {
        ripple.classList.remove('animate');
        ripple.style.top = e.offsetY - 10;
        ripple.style.left = e.offsetX - 10;
        ripple.style.left = e.offsetX - 10;

        var x = e.offsetX,
            y = e.offsetY,
            w = e.target.offsetWidth,
            h = e.target.offsetHeight,
            offsetX = Math.abs((w / 2) - x),
            offsetY = Math.abs((h / 2) - y),
            deltaX = (w / 2) + offsetX,
            deltaY = (h / 2) + offsetY

        ripple.setAttribute("top"," y")
        ripple.setAttribute("left"," x")
        ripple.classList.add('animate');

        // e.stopPropagation()
    }
);


// $ripple.style.top = e.offsetY - 10;
// $ripple.style.left = e.offsetX - 10;

// var x = e.offsetX,
//     y = e.offsetY,
//     w = e.target.offsetWidth,
//     h = e.target.offsetHeight,
//     offsetX = Math.abs((w / 2) - x),
//     offsetY = Math.abs((h / 2) - y),
//     deltaX = (w / 2) + offsetX,
//     deltaY = (h / 2) + offsetY,



$(document).ready(function () {
    $('.box').on('click', function (e) {
        var ripple = $(this).find('.ripple');
        ripple.removeClass('animate');
        var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
        var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
        ripple.css({top: y, left: x}).addClass('animate');
    });
});



$.fn.extend({
    rippleBtn: function() {

        function aniEnd(obj, fn) {
            $(obj).on("animationend", fn);
        }

        return this.each(function() {

            var me = $(this);

            me.on("mousedown", function(e) {

                var x = e.pageX,
                    y = e.pageY;

                x = x - me.offset().left;
                y = y - me.offset().top;

                var ripple = $("<span class='ripple'></span>");
                ripple.css({
                    left: x - 2,
                    top: y - 2
                });
                me.append(ripple);
                aniEnd(ripple, function() {
                    ripple.remove();
                });

            });

        });

    }
})

$(".btn").rippleBtn();




$(document).ready(function () {
    $('.box').on('click', function (e) {
        var ripple = $(this).find('.ripple');
        ripple.removeClass('animate');
        var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
        var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
        ripple.css({top: y, left: x}).addClass('animate');
    });
});