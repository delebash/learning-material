document.addEventListener('click', function (event) {

    var time = 2000
    var RipTarget = event.target;
    var rect = RipTarget.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    //var w = event.clientWidth - rect.width;
    // var h= event.clientHeight- rect.height;
    var circle = document.createElement("div");


    circle.style.top = y + "px";
    circle.style.left = x + "px";
    circle.className = "ripple animate";
    RipTarget.appendChild(circle);

    setTimeout(function() {
        RipTarget.removeChild(circle);
    }, time);

    // ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
    //     self.addEventListener(eventName, function () {
    //         self.parentNode.removeChild(circle)
    //         //self.classList.remove('animate')
    //     });
    // })

});