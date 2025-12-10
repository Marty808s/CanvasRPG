// Inicializace hry po načtení stránky - MŮJ GAME LOOP
window.addEventListener('DOMContentLoaded', () => {
    // Vytvoření instance hry
    const engine = new Engine('gameCanvas');
    
    // Vytvoření hráče na středu obrazovky
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    engine.createPlayer(startX, startY, 'Player');
    
    console.log('Hra inicializována! Použijte WASD nebo šipky pro pohyb.');
});

