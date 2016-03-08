//
// var box = document.getElementById('box');
// ripple = box.getElementsByClassName('ripple')[0];
// box.addEventListener('click', function(e) {
//         ripple.classList.remove('animate');
//         var top = this.offsetTop;
//         var left = this.offsetLeft;
//         var x = parseInt(e.pageX - left) - (this.clientWidth / 2);
//         var y = parseInt(e.pageY - top) - (this.clientWidth / 2);
//         ripple.style.top = e.offsetY - 10;
//         ripple.style.left = e.offsetX - 10;
//         ripple.classList.add('animate');
//
//         // e.stopPropagation()
//     }
// );

//
// var box = document.getElementById('box');
// ripple = box.getElementsByClassName('ripple')[0];
// box.addEventListener('click', function (e) {
//     ripple.classList.remove('animate');
//     var x = e.offsetX,
//     y = e.offsetY,
//     w = e.target.offsetWidth,
//     h = e.target.offsetHeight,
//     offsetX = Math.abs((w / 2) - x),
//     offsetY = Math.abs((h / 2) - y),
//     deltaX = (w / 2) + offsetX,
//     deltaY = (h / 2) + offsetY,
//
//     // var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
//    // var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
//    ripple.style.top(deltaX);
//     ripple.style.left(deltaY);
//     ripple.classList.add('animate')
// });