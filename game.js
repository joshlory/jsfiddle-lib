var player = {};
Object.defineProperties(player, {
    top : {
        get : function() {
            return parseFloat(ball.style.top);
        },
        set : function(value) {
            ball.style.top = value + "px";
        }
    },
    left : {
        get : function() {
            return parseFloat(ball.style.left);
        },
        set : function(value) {
            ball.style.left = value + "px";
        }
    }
});
