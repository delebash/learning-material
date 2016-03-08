var rippleEffect = (function() {
    function rippleEffect(event) {
        var
            time = 2000
            ,self = this
            ,rect = self.getBoundingClientRect()
            ,x = event.clientX - rect.left
            ,y = event.clientY - rect.top
            ,circle = document.createElement("div")
            ;

        circle.style.top = y + "px";
        circle.style.left = x + "px";
        circle.className = "ripple animate";
        self.appendChild(circle);

        setTimeout(function() {
            self.removeChild(circle);
        }, time);
    }

    var targets = document.getElementsByClassName("ripple-effect")
        ,l = targets.length
        ,i;

    for (i=0; i<l; i++) {
        targets[i].addEventListener('mousedown', rippleEffect, false);
    }
}());
