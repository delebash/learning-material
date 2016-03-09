
//WORKING CLEANER WAY
// document.addEventListener('click', function (event) {
//
//     if (event.target.classList.contains('ripple-effect')) {
//         console.log('ripple class found')
//         RipTarget = event.target;
//     } else {
//         console.log('check parent for .ripple effect')
//         var RipTarget = event.target.closest('.ripple-effect');
//         if (!RipTarget) {
//             console.log('no ripple-effect in parent')
//             return;
//         }
//     }
//
//
//     var rect = RipTarget.getBoundingClientRect();
//     var x = event.clientX - rect.left;
//     var y = event.clientY - rect.top;
//     var circle = document.createElement("div");
//
//     circle.style.top = y + "px";
//     circle.style.left = x + "px";
//     circle.className = "ripple animate";
//     RipTarget.appendChild(circle);
//     ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
//         circle.addEventListener(eventName, function () {
//             RipTarget.removeChild(circle);
//         });
//     });
// });




//TEST SAMPLE

document.addEventListener('click', function (event) {

    console.log('    ')
    console.log('beginning')
    console.log('event.target')
console.log(event.target)
    if (event.target.classList.contains('ripple-effect')) {
        console.log('ripple class found')
        RipTarget = event.target;
    } else {
        //console.log('check parent for .ripple effect')
        // var RipTarget = event.target.closest('.ripple-effect');
        // if (!RipTarget) {
        //     console.log('no ripple-effect in parent')
        //     return;
        // }
        console.log('no ripple-effect')
            return;
    }

    var circle = RipTarget.querySelector('.circle');
    if (!circle) {
        console.log('first click  1')
        var rect = RipTarget.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        circle = document.createElement("div");
        circle.classList.add('circle');

        circle.style.top = y + "px";
        circle.style.left = x + "px";
      // circle.className = "ripple animate";
        // RipTarget.appendChild(circle);

        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            circle.addEventListener(eventName, function () {
                console.log('remove node')
                     RipTarget.removeChild(circle)
            });
        });

        RipTarget.appendChild(circle);
        circle.classList.remove('ripple');
        circle.classList.remove('animate');
        circle.classList.add('ripple');
        circle.classList.add('animate');

        console.log('end')
    }
});
