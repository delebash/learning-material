document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('ripple')) {
        var RipTarget = event.target.closest('.ripple');
        if (!RipTarget) {
            return;
        }
    }

    if (!RipTarget) {
        RipTarget = event.target;
    }

    var rip, diameter;
    rip = RipTarget.querySelector('.ripple__effect');

    if (!rip) {
        // first time clicked => create a new ink element
        rip = document.createElement('div');
        rip.classList.add('ripple__effect');
        RipTarget.appendChild(rip);
        // when the animation ends remove el (bind for all vendor prefixes)
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            rip.addEventListener(eventName, function () {
               // rip.parentNode.removeChild(rip)
                rip.classList.remove('animate')
            });
        });
    }

if(rip.style.width === ""){
            diameter = Math.max(RipTarget.clientWidth, RipTarget.clientHeight);
            rip.style.width = diameter + 'px';
            rip.style.height = diameter + 'px';
    } else {
        diameter = rip.clientWidth;
    }

    // calculate the click center
    rip.style.top = (event.offsetY - diameter / 2) + 'px';
    rip.style.left = (event.offsetX - diameter / 2) + 'px';


    rip.classList.remove('animate');
    rip.width = rip.clientWidth + 'px';
    rip.classList.add('animate');
    
    
});
