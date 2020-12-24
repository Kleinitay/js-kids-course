class GameElement {
    positionX = 0;
    positionY = 0;
    
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
}

class Spaceship extends GameElement{
    constructor(x, y, size, speed) {
        super(x, y);
        this.size = size;
        this.blowenUp = false;
        this.speed = speed;
    }

    draw(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        if (this.blowenUp) {
            ctx.strokeStyle = "#FF0000"; // RGB
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX - this.size, this.positionY);
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX - this.size, this.positionY + this.size);
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX - this.size, this.positionY - this.size);
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX + this.size, this.positionY + this.size);
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX + this.size, this.positionY - this.size);
            ctx.moveTo(this.positionX, this.positionY);
            ctx.lineTo(this.positionX + this.size, this.positionY);
        } else {
            ctx.lineWidth = 2;
            ctx.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI);
            ctx.moveTo(this.positionX - this.size - 20, this.positionY);
            ctx.lineTo(this.positionX + this.size + 20, this.positionY);
        }
        ctx.stroke();
    }

    moveRight() {
        this.positionX += this.speed;
    }

    blowup() {
        this.blowenUp = true;
    }
}

class Cannon extends GameElement{
    constructor(x, y) {
        super(x, y);
    }

    draw(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.positionX, this.positionY);
        ctx.lineTo(this.positionX + 20, this.positionY - 20);
        ctx.lineTo(this.positionX + 40, this.positionY);
        ctx.lineTo(this.positionX, this.positionY);
        ctx.stroke();
    }
}

class Missile extends GameElement {
    constructor(x, y, speed) {
        super(x, y);
        this.speed = speed;
    }

    draw(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.positionX, this.positionY);
        ctx.lineTo(this.positionX + 10, this.positionY - 10);
        ctx.lineTo(this.positionX + 20, this.positionY);
        ctx.lineTo(this.positionX, this.positionY);
        ctx.stroke();
    }

    moveUp() {
        this.positionY = this.positionY - this.speed;
    }
}

class TheBigGame {
    spaceships = [];
    missiles = [];
    cannon = undefined;

    constructor(canvas) {
        this.canvas = canvas;
    }

    startGame() {
        const spaceship = new Spaceship(100, 200, 20, 3);
        const cannon = new Cannon(this.canvas.width / 2, this.canvas.height);
        const missile = new Missile(this.canvas.width / 2, this.canvas.height, 5);

        spaceship.draw(this.canvas);
        cannon.draw(this.canvas);
        missile.draw(this.canvas);

        const self = this; // this -> TheBigGame
        setInterval(function () {
            // here this is the function
            let ctx = self.canvas.getContext("2d");
            ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
            spaceship.moveRight();
            missile.moveUp();
            spaceship.draw(self.canvas);
            missile.draw(self.canvas);
            cannon.draw(self.canvas);
        }, 20);
    }
}

function startTheBigGame() {
    if (hasTheBigGameStarted) {
        return;
    }
    
    const canvas = document.getElementById('myCanvas');
    const theBigGame = new TheBigGame(canvas);
    theBigGame.startGame();
    hasTheBigGameStarted = true;
}

let hasTheBigGameStarted = false;

