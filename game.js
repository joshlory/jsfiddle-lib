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
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.width = (width || 100) + "px";
    div.style.height = (height || 10) + "px";
    document.querySelector("#game").appendChild(div);
    platforms.push(new Sprite(div));
}

function makeDiv(x, y, text) {
    var div = document.createElement("div");
    div.innerHTML = text;
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.font = "11px sans-serif";
    div.className = "coordinates";
    document.body.appendChild(div);
}
function displayCoords() {
    var div;
    while (div = document.querySelector(".coordinates")) div.parentNode.removeChild(div);
    makeDiv(5, 5, "0, 0");
    makeDiv(window.innerWidth - 140, 5, "window.innerWidth = " + window.innerWidth);
    makeDiv(5, window.innerHeight - 25, "window.innerHeight = " + window.innerHeight);
}
window.addEventListener("load", displayCoords);
window.addEventListener("resize", displayCoords);
