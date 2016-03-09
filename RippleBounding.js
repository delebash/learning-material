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

    var rip, diameter;
    rip = clickedEl.querySelector('.ripple__effect');

    if (!rip) {
        // first time clicked => create a new ink element
        rip = document.createElement('div');
        rip.classList.add('ripple__effect');
        clickedEl.appendChild(rip);
        // when the animation ends remove el (bind for all vendor prefixes)
        ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function (eventName) {
            rip.addEventListener(eventName, function () {
              //  rip.classList.remove('animate')
            });
        });
    }


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
//End
    if(rip.style.width === "") {
        //Set width and height
       // var circle = document.createElement("div");
    }
    var rect = clickedEl.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    rip.style.top = y + "px";
    rip.style.left = x + "px";

    rip.classList.remove('animate');
    rip.width = rip.clientWidth + 'px';
    rip.classList.add('animate')




    // var rip, diameter;
    // rip = clickedEl.querySelector('.ripple__effect');
    //
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
});

/**
 * Created by Daniel on 3/9/2016.
 */
