document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('ripple')) {
        var clickedEl = event.target.closest('.ripple');
        if (!clickedEl) {
            return;
        }
    }

    if (!clickedEl) {
        clickedEl = event.target;
    }
    var circle;
    circle = clickedEl.querySelector('.ripple__effect');

    if (!circle) {
        // first time clicked => create a new ink element
        circle = document.createElement('div');
        circle.classList.add('ripple__effect');
        clickedEl.appendChild(circle);
        // when the animation ends remove el (bind for all vendor prefixes)
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            circle.addEventListener(eventName, function () {
                circle.classList.remove('animate')
            });
        });
    }

   

        var rect = clickedEl.getBoundingClientRect();
      var x = event.clientX - rect.left;
         var y = event.clientY - rect.top;
        //  var w = event.client - rect.width;
       //  var h = event.clientY - rect.height;
       // circle.style.width = w;
        //circle.style.height = h;

        circle.style.top = y + "px";
        circle.style.left = x + "px";
    console.log(rect)
    console.log(x)
    console.log(y)
    // console.log()
    // console.log()
        circle.classList.remove('animate');
        circle.classList.add('animate');
    
});
//
// var rip, diameter;
// rip = clickedEl.querySelector('.ripple__effect');

// if (!rip) {
//     // first time clicked => create a new ink element
//     rip = document.createElement('div');
//     rip.classList.add('ripple__effect');
//     clickedEl.appendChild(rip);
//     // when the animation ends remove el (bind for all vendor prefixes)
//     ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
//         rip.addEventListener(eventName, function () {
//             rip.classList.remove('animate')
//         });
//     });
// }
//
// if(rip.style.width === ""){
//     diameter = Math.max(clickedEl.clientWidth, clickedEl.clientHeight);
//     rip.style.width = diameter + 'px';
//     rip.style.height = diameter + 'px';
// } else {
//     diameter = rip.clientWidth;
// }
//
// // calculate the click center
// rip.style.top = (event.offsetY - diameter / 2) + 'px';
// rip.style.left = (event.offsetX - diameter / 2) + 'px';
//
// rip.classList.remove('animate');
// rip.width = rip.clientWidth + 'px';
// rip.classList.add('animate');


