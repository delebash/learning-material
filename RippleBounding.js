
//WORKING CLEANER WAY
document.addEventListener('click', function (event) {

    if (event.target.classList.contains('ripple')) {
        console.log('ripple class found')
        clickedEl = event.target;
    } else {
        console.log('check parent for .ripple ')
        var clickedEl = event.target.closest('.ripple');
        if (!clickedEl) {
            console.log('no ripple-effect in parent')
            return;
        }
    }


    var rect = clickedEl.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var circle = document.createElement("div");

    circle.style.top = y + "px";
    circle.style.left = x + "px";
    circle.classList.add("ripple","animate");
    clickedEl.appendChild(circle);
    ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
        circle.addEventListener(eventName, function () {
            //     clickedEl.removeChild(circle);
        });
    });
});



