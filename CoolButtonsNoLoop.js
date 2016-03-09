// document.addEventListener('click', function (event) {
//
//     // if (event.target.classList.contains('ripple-effect')) {
//     //     console.log('ripple class found')
//     //     RipTarget = event.target;
//     // } else {
//     //     console.log('check parent for .ripple effect')
//     //     var RipTarget = event.target.closest('.ripple-effect');
//     //     if (!RipTarget) {
//     //         console.log('no ripple-effect in parent')
//     //         return;
//     //     }
//     // }
//
//     if (!event.target.classList.contains('ripple-effect')) {
//         return
//     }
//     var RipTarget = event.target;
//     var circle = RipTarget.querySelector('.ripple');
//
//     if (!circle) {
//         var rect = RipTarget.getBoundingClientRect();
//         var x = event.clientX - rect.left;
//         var y = event.clientY - rect.top;
//         var circle = document.createElement("div");
//         circle.className = 'ripple animate';
//         circle.style.top = y + "px";
//         circle.style.left = x + "px";
//
//         RipTarget.appendChild(circle);
//         // ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
//         //     circle.addEventListener(eventName, function () {
//         //         RipTarget.removeChild(circle);
//         //     });
//         // });
//     }
//     circle.classList.remove('animate');
//     circle.classList.add("animate");
// });


document.addEventListener('click', function (e) {
    if (!e.target.matches('.ripple-effect')) {
        return
    }else {
        //check to see if parent has ripple-effect
        var clickEl = e.target.closest('.ripple-effect');
        // if still null then element does not have ripple-effect
        if (!clickEl) {
            return
        }
    }

        // we now have valid element with ripple-effect
        // determine circle animation diameter
        var rect = clickEl.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var circle = document.createElement("div");

        circle.style.top = y + "px";
        circle.style.left = x + "px";
        circle.className = "ripple animate";
        clickEl.appendChild(circle);

    //clean up after animation completes remove div element
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            circle.addEventListener(eventName, function () {
                clickEl.removeChild(circle);
            });
        })
  });


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


