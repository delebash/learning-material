document.addEventListener('click', function(event) {

    if (!event.target.classList.contains('js-ripple')) {
        return;
    }

    var rippleBtn = event.target,
        ink = rippleBtn.querySelector('.ink'), diameter;

    if (!ink) {
        // first time clicked => create a new ink element
        ink = document.createElement('i');
        ink.classList.add('ink');

        diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight);
        ink.style.width = diameter + 'px';
        ink.style.height = diameter + 'px';

        // when the animation ends remove el (bind for all vendor prefixes)
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function(eventName){
            ink.addEventListener(eventName, function(){
                ink.parentNode.removeChild(ink)
            });
        });

        rippleBtn.insertBefore(ink, rippleBtn.firstChild);
    } else {
        diameter = ink.clientWidth;
    }

    // calculate the click center
    ink.style.top = (event.offsetY - diameter/2) + 'px';
    ink.style.left = (event.offsetX - diameter/2) + 'px';

    ink.classList.remove('is-animating');
    ink.width = ink.clientWidth + 'px';
    ink.classList.add('is-animating');
});/**
 * Created by Daniel on 3/5/2016.
 */
