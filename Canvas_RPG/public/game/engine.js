// přejmenovat pak na player_engine.js, nebo udělat lsoužku na obj a tam hodit player třídu - NEBO INPUT HANDLER
// pak to segmentovat

class Engine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.player = null;
        this.keys = {};
        
        // Nastavení velikosti canvasu
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Event listenery pro klávesy
        this.setupKeyboardListeners();
        
        // Spuštění game loopu
        this.gameLoop();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupKeyboardListeners() {
        // Sledování stisknutých kláves
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            // Speciální případ pro Shift
            if (e.key === 'Shift' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                this.keys['shift'] = true;
            }
        });
        
        window.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            this.keys[key] = false;
            // Speciální případ pro Shift
            if (e.key === 'Shift' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                this.keys['shift'] = false;
            }
        });
    }
    
    createPlayer(x, y, name) {
        // Prozatím bez sprite - vytvoříme jednoduchý obdélník
        const sprite = null; // TODO: načíst sprite obrázek
        this.player = new Player(x, y, name, sprite, this.ctx);
    }
    
    handleInput() {
        if (!this.player) return;
        
        const direction = { x: 0, y: 0 };
        
        // WASD nebo šipky
        if (this.keys['w'] || this.keys['arrowup']) {
            direction.y = -1;
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            direction.y = 1;
        }
        if (this.keys['a'] || this.keys['arrowleft']) {
            direction.x = -1;
        }
        if (this.keys['d'] || this.keys['arrowright']) {
            direction.x = 1;
        }

        // Sprint - pouze když je Shift stisknutý
        if (this.keys['shift']) {
            this.player.startSprint();
        } else {
            this.player.stopSprint();
        }
        
        // Pokud je nějaký směr, pohyb hráče
        if (direction.x !== 0 || direction.y !== 0) {
            this.player.move(direction);
        }
    }
    
    update() {
        this.handleInput();
        if (this.player) {
            this.player.update();
        }
    }
    
    render() {
        // Vymazání canvasu
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Vykreslení hráče
        if (this.player) {
            this.player.draw();
        }
    }
    
    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }
}

