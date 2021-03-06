//WORKING CLEANER WAY
document.addEventListener('click', function (event) {

    if (event.target.classList.contains('ripple-effect')) {
        console.log('ripple class found')
        clickedEl = event.target;
    } else {
        console.log('check parent for .ripple effect')
        var clickedEl = event.target.closest('.ripple-effect');
        if (!clickedEl) {
            console.log('no ripple-effect in parent')
            return;
        }
    }

    var rect = clickedEl.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var rip = clickedEl.querySelector('.ripple');

    if (!rip) {
        rip = document.createElement("div");
        rip.classList.add("ripple");
        clickedEl.appendChild(rip);
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            rip.addEventListener(eventName, function () {
                rip.classList.remove('animate')
            });
        });
    }
    rip.classList.remove('animate');
    rip.style.top = y + "px";
    rip.style.left = x + "px";
    rip.width = rip.clientWidth + 'px';
    rip.classList.add('animate')


});


// //WORKING ALT WAY
// document.addEventListener('click', function (event) {
//     if (!event.target.classList.contains('ripple-effect')) {
//         console.log('check parent for .ripple effect')
//         var RipTarget = event.target.closest('.ripple-effect');
//         if (!RipTarget) {
//             console.log('no ripple-effect in parent')
//             return;
//         }
//     }else{
//         RipTarget = event.target;
//         console.log('first click no ripple')
//     }
//
//     if (!RipTarget) {
//         console.log('not rip')
//
//     }
//
//     var rect = RipTarget.getBoundingClientRect();
//     var x = event.clientX - rect.left;
//     var y = event.clientY - rect.top;
//     //var w = event.clientWidth - rect.width;
//     // var h= event.clientHeight- rect.height;
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


