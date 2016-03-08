
var box = document.getElementById('box');
var ripple = box.getElementsByClassName('ripple')[0];
box.addEventListener('click', function(e) {
        ripple.classList.remove('animate');
        var top = this.offsetTop;
        var left = this.offsetLeft;
        var x = parseInt(e.pageX - left) - (this.clientWidth / 2);
        var y = parseInt(e.pageY - top) - (this.clientWidth / 2);
        ripple.style.top = e.offsetY - 10;
        ripple.style.left = e.offsetX - 10;
        ripple.setAttribute("top"," y")
        ripple.setAttribute("left"," x")
        ripple.classList.add('animate');


        // var x = e.pageX,
        //     y = e.pageY;
        //
        // x = x - me.offset().left;
        // y = y - me.offset().top;
        // ripple.css({
        //         left: x - 2,
        //         top: y - 2
        // });
        // e.stopPropagation()
    }
);