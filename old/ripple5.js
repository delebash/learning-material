/**
 * Created by Daniel on 3/5/2016.
 */
// Much of the following math was mercilessly stolen from Dennis Gaebel's excellent Codrops article: http://tympanus.net/codrops/2015/09/14/creating-material-design-ripple-effects-svg/

// See also: Codrops Licensing
// http://tympanus.net/codrops/licensing/

var $button = document.getElementsByClassName('button'),
    $ripple = document.getElementsByClassName('ripple')[0];

$button.addEventListener('click', function(e) {
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
