var socket = io();


// let matrix = generate(15,45,8,15,40,20,5)


var side = 10;


function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');
}
let a
function nkarell(matrix) {
    console.log(a, "drawrwef")
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                if (a == false) {

                    fill("acacac")
                }
                else { fill("orange") }
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("white");
            }
            else if (matrix[y][x] == 6) {
                fill("black");
            }
            rect(x * side, y * side, side, side);


        }
    }

}

socket.on('message', function (ev) {
    console.log("connected clients " + ev.data);
    a = ev.data
});

socket.on('message2', function (ev) {
    console.log("connected ytjrtyj " + ev.data);
    a = ev.data
});

setInterval(
    function () {
        socket.on('send matrix', nkarell)
    }, 1000
)




function finish() {
    socket.emit("barev")
}

function addGrass(matrix) {
    socket.emit("ev")
}

function addGrassEater() {
    socket.emit("vuy")
}

function night() {
    socket.emit("vuyy")
}

function light() {
    socket.emit("vayy")
}