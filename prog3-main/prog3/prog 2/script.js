function generate(matLen,gr,grEat,pr,wt,hun,lt) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < wt; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < hun; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < lt; i++) {
        let x = Math.floor(Math.random()*matLen)
        let y = Math.floor(Math.random()*matLen)
        if(matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }
    return matrix
}


let matrix = generate(15,45,8,15,40,20,5)


var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let waterArr = []
let hunterArr = []
let lightningArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }else if (matrix[y][x] == 4) {
                let gr = new Water(x, y)
                waterArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                let hun = new Hunter(x, y)
                hunterArr.push(hun)
            }
            else if (matrix[y][x] == 6) {
                let lt = new Lightning(x, y)
                lightningArr.push(lt)
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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

    for(var i in grassArr){
        grassArr[i].mul()
     }
     for(let i in grassEaterArr) {
         grassEaterArr[i].eat()
     }
     for(let i in predatorArr) {
        predatorArr[i].eat()
     }
        for(var i in waterArr){
            waterArr[i].eat()
         }
         for(var i in hunterArr){
            hunterArr[i].eat()
         }
         for(var i in lightningArr){
            lightningArr[i].eat()
         }
    }
