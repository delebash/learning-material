function rippleEffect(event) {

    var time = 2000;
    var self = this;
    var rect = self.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    //var w = event.clientWidth - rect.width;
    // var h= event.clientHeight- rect.height;
    var circle = document.createElement("div");

    circle.style.top = y + "px";
    circle.style.left = x + "px";
    circle.className = "ripple animate";
    self.appendChild(circle);
    setTimeout(function () {
        self.removeChild(circle);
    }, time);
}

var targets = document.getElementsByClassName("ripple-effect"),
    l = targets.length,
    i;

for (i = 0; i < l; i++) {
    targets[i].addEventListener('mousedown', rippleEffect, false);
}
