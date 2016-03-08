//        //
//        //  var my = $('.ripple');
//        //  my.removeClass('animate');
//        //  var x = parseInt(my.pageX - $(my).offset().left) - (my.width() / 2);
//        //  var y = parseInt(my.pageY - $(my).offset().top) - (my.height() / 2);
//        // // ripple.css({top: y, left: x}).addClass('animate');
//        //
//
// var box = document.getElementById('box');
// var ripple = box.getElementsByClassName('ripple')[0];
//        // var ripple = document.querySelectorAll('ripple');
//    box.addEventListener('click', function (e) {
//        //var ripple = document.getElementsByClassName('.ripple');
//        //  ripple.classList.remove('animate');
//        //  var x = parseInt(e.pageX - this.offsetWidth) - (ripple.clientWidth / 2);
//        //  var y = parseInt(e.pageY - this.offsetHeight) - (ripple.clientHeight / 2);
//        // ripple.style.top = y;
//        // ripple.style.left = x;
//        ripple.classList.add('animate');
//     });
/**
 * Created by Daniel on 3/5/2016.
 */
// Much of the following math was mercilessly stolen from Dennis Gaebel's excellent Codrops article: http://tympanus.net/codrops/2015/09/14/creating-material-design-ripple-effects-svg/

// See also: Codrops Licensing
// http://tympanus.net/codrops/licensing/

var box = document.getElementById('box'),
    $ripple = document.getElementsByClassName('ripple')[0];

box.addEventListener('click', function(e) {
    $ripple.style.top = e.offsetY - 10;
    $ripple.style.left = e.offsetX - 10;

    var x = e.offsetX,
        y = e.offsetY,
        w = e.target.offsetWidth,
        h = e.target.offsetHeight,
        offsetX = Math.abs((w / 2) - x),
        offsetY = Math.abs((h / 2) - y),
        deltaX = (w / 2) + offsetX,
        deltaY = (h / 2) + offsetY,
        scale = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    $ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(' + scale / 10 + ')', opacity: 0 }
    ], {
        duration: 750,
        easing: 'ease-out'
    })
});