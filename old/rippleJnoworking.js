var lg = console.log.bind(console);
document.addEventListener('click', function (e) {

    if (!event.target.classList.contains('button')) {
        return;
    }
    var rippleBtn = event.target,
        ripple = rippleBtn.querySelector('.ripple'), diameter;

    ripple.classList.remove('animate');
    diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight);
    ripple.style.width = diameter + 'px';
    ripple.style.height = diameter + 'px';

    // calculate the click center
    ripple.style.top = (event.offsetY - diameter / 2) + 'px';
    ripple.style.left = (event.offsetX - diameter / 2) + 'px';

    ripple.classList.add('animate');
});
