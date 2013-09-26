var keys = {};
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;  
});

var player = {};
Object.defineProperties(player, {
    top : {
        get : function() {
            return parseFloat(ball.style.top) || 0;
        },
        set : function(value) {
            ball.style.top = value + "px";
        }
    },
    left : {
        get : function() {
            return parseFloat(ball.style.left) || 0;
        },
        set : function(value) {
            ball.style.left = value + "px";
        }
    }
});
