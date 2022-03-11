const MAP = document.getElementById("player_map");
const IMAGES_MAP = document.getElementById("images_map");
const CLOCK = setInterval(clock,20);
let LEVEL = 1;
function start() {
    g = new object(0,0,"./gold.png","images_map");
    p = new object(0,0,"./player.png","player_map");
    LCC();
}

function clock() {
    // map border
    if (p.x < 0) {
        p.x = 0;
    }
    if (p.x + 8 > 72) {
        p.x = 72 - 8;
    }
    if (p.y + 8 > 56) {
        p.y = 56 - 8;
    }
    if (p.y < 0) {
        p.y = 0;
    }
    // keyboard input
    window.addEventListener("keydown",function() {
        if (event.keyCode == 37) {
            p.SPDX = -8;
            event.keyCode = null;
        }
        if (event.keyCode == 39) {
            p.SPDX = 8;
            event.keyCode = null;
        }
        if (event.keyCode == 38) {
            p.SPDY = -8;
            event.keyCode = null;
        }
        if (event.keyCode == 40) {
            p.SPDY = 8;
            event.keyCode = null;
        }
    });
}

// player move
setInterval(function() {
    p.m();
    p.SPDX = 0;
    p.SPDY = 0;
},200);

function object(x,y,src,parent) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.SPDX = 0;
    this.SPDY = 0;
    this.img = document.createElement("IMG");
    this.img.src = this.src;
    this.img.setAttribute("position",'absolute');
    document.getElementById([parent]).appendChild(this.img);
    this.img.setAttribute("left",`${this.x}`);
    this.img.setAttribute("top",`${this.y}`);
    this.m = function() {
        this.img.style.top = `${this.y}px`;
        this.img.style.left = `${this.x}px`;
        this.x += this.SPDX;
        this.y += this.SPDY;
    };
}
// level clear & create (LCC)
function LCC() {
    switch (LEVEL) {
    case 6:
        p.x = 0;
        p.y = 0;
        g.x = 0;
    break;
    case 2:
        
    break;
    case 3:
        
    break;
    case 4:
        
    break;
    case 5:
        
    break;
    }
}