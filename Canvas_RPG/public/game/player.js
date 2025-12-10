class Player {
    constructor(x, y, name, sprite, ctx) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.sprite = sprite;
        this.ctx = ctx;
        this.width = 32;
        this.height = 32;
        this.baseSpeed = 2;
        this.sprintSpeed = 4;
        this.speed = this.baseSpeed;
    }

    draw() {
        if (this.sprite) {
            this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        } else {
            // Placeholder - jednoduchý obdélník, dokud není sprite
            this.ctx.fillStyle = '#00ff00';
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
            
            // Okraj
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }

    update() {
        this.draw();
    }

    move(direction) {
        this.x += direction.x * this.speed;
        this.y += direction.y * this.speed;
    }

    startSprint() {
        this.speed = this.sprintSpeed;
    }

    stopSprint() {
        this.speed = this.baseSpeed;
    }
}