canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

cx = 10;
cy = 50;
cw = 150;
ch = 100;

bgi = "car-parking-lot-road-markings-numbering-spaces-empty-pedestrian-crossing-top-view-d-render-153672294.jpg"
cri = "A4Du7jl-green-car-top-view-clipart.png"

function yufs() {

}

function adder() {
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = bgi;
    cr = new Image();
    cr.onload = uploadcr;
    cr.src = cri;
}

function uploadcr() {
    ctx.drawImage(cr, cx, cy, cw, ch)
}

function uploadbg() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
    }

    if (keyPressed == "38") {
        up();
    }

    if (keyPressed == "39") {
        right();
    }

    if (keyPressed == "40") {
        down();
    }
}

function left() {
    if (cx >= 0) {
        cx = cx - 5;
        uploadbg.bg();
        uploadbg.cr();

    }
}

function right() {
    if (cx <= 1195) {
        cx = cx + 5;
        uploadbg.bg();
        uploadbg.cr();

    }
}

function up() {
    if (cy >= 0) {
        cy = cy - 5;
        uploadbg.bg();
        uploadbg.cr();

    }
}

function down() {
    if (cy <= 595) {
        cy = cy + 5;
        uploadbg.bg();
        uploadbg.cr();

    }
}