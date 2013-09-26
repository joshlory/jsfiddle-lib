var keys = {};
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;  
});

function Sprite(element) {
    Object.defineProperties(this, {
        top : {
            get : function() {
                return parseFloat(element.style.top) || 0;
            },
            set : function(value) {
                element.style.top = value + "px";
            }
        },
        left : {
            get : function() {
                return parseFloat(element.style.left) || 0;
            },
            set : function(value) {
                element.style.left = value + "px";
            }
        },
        bottom : {
            get : function() {
                return parseFloat(element.style.top) + element.offsetHeight || element.offsetHeight;
            },
            set : function(value) {
                element.style.top = value - element.offsetHeight + "px";
            }
        },
        right : {
            get : function() {
                return parseFloat(element.style.left) + element.offsetWidth || element.offsetWidth;
            },
            set : function(value) {
                element.style.left = value - element.offsetWidth + "px";
            }
        }
    });
}
