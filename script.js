
var WIDTH = 1000,
    HEIGHT = 650,
    TWO_PI = Math.PI * 2;

ball = {
    x: 0,
    y: 200,

    update: function () {
        ball.x += 4;

        if (ball.x > 200) {
            ball.y += 3;
        }

        if (ball.x > WIDTH) {
            ball.x = 0;
            ball.y = 200;
        }
    },

    draw: function () {
        c.arc(ball.x, ball.y, 50, 0, TWO_PI, false);
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// When Element and Bitmap are of different sizes
// When there is the situation of having the element
// at a different size than the bitmap itself,
// for example, the element is scaled using CSS
//  or there is pixel-aspect ratio etc. you will have to address this.

// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect(), // abs. size of element
//         scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
//         scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
//     return {
//         x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
//         y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
//     }
// }

function showBigCursor(event) {
    var pos = getMousePos(canvas, event);
    c.fillStyle = "white";
    c.beginPath();
    c.arc(pos.x, pos.y, 50, 0, TWO_PI, false);
    c.fill();
}

function main() {
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    c = canvas.getContext("2d");
    document.body.appendChild(canvas);
    document.onmousemove = showBigCursor;

    setInterval(function () {
        update();
        draw();
    }, 30);
}

function update() {
    ball.update();
}

function draw() {
    c.fillStyle = "rgba(0, 0, 0, 0.08)";
    c.fillRect(0, 0, WIDTH, HEIGHT);

    c.fillStyle = "white";
    c.beginPath();
    ball.draw();
    c.fill();
}

main();
