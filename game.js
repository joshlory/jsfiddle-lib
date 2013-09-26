var keys = {};
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;  
});

function Sprite(element) {
    this.element = element;
}
Object.defineProperties(Sprite.prototype, {
    top : {
        get : function() {
            return parseFloat(this.element.style.top) || 0;
        },
        set : function(value) {
            this.element.style.top = value + "px";
        }
    },
    left : {
        get : function() {
            return parseFloat(this.element.style.left) || 0;
        },
        set : function(value) {
            this.element.style.left = value + "px";
        }
    },
    bottom : {
        get : function() {
            return parseFloat(this.element.style.top) + this.element.offsetHeight || this.element.offsetHeight;
        },
        set : function(value) {
            this.element.style.top = value - this.element.offsetHeight + "px";
        }
    },
    right : {
        get : function() {
            return parseFloat(this.element.style.left) + this.element.offsetWidth || this.element.offsetWidth;
        },
        set : function(value) {
            this.element.style.left = value - this.element.offsetWidth + "px";
        }
    }
});

var platforms = [];
function createPlatform(x, y, width, height) {
    var div = document.createElement("div");
    div.className = "platform";
    document.body.appendChild(div);
    div.style.left = x;
    div.style.top = y;
    div.style.width = width;
    div.style.height = height;
    platforms.push(new Sprite(div));
}
