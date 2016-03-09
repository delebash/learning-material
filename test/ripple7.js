document.addEventListener('click', function(event) {

    console.log('  ')
    console.log('beginning')
    console.log('ink')
    console.log(ink)
    console.log('event target')
    console.log(event.target)

    if (!event.target.classList.contains('js-ripple')) {
        console.log('no rip')
        return;
    }

    var rippleBtn = event.target,
        ink = rippleBtn.querySelector('.ink'), diameter;

    if (!ink) {
        console.log('first click  1')
        // first time clicked => create a new ink element
        ink = document.createElement('i');
        ink.classList.add('ink');

        diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight);
        ink.style.width = diameter + 'px';
        ink.style.height = diameter + 'px';

        // when the animation ends remove el (bind for all vendor prefixes)
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function(eventName){
            ink.addEventListener(eventName, function(){
                console.log('remove node end')
                ink.parentNode.removeChild(ink)
            });
        });
        console.log('add node  1')
        rippleBtn.insertBefore(ink, rippleBtn.firstChild);
    } else {
        console.log('not first click')
        diameter = ink.clientWidth;
    }

    console.log('genral programs')
    // calculate the click center
    ink.style.top = (event.offsetY - diameter/2) + 'px';
    ink.style.left = (event.offsetX - diameter/2) + 'px';



    ink.classList.remove('is-animating');
    console.log('removed is-animating class')
    ink.width = ink.clientWidth + 'px';
    ink.classList.add('is-animating');
    console.log('added is-animating')
    console.log('ink')
    console.log(ink)
    console.log('end')
});