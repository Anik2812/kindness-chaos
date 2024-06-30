const game = new KindnessChaos();
const actDisplay = document.getElementById('act-display');
const generateBtn = document.getElementById('generate-btn');
const completeBtn = document.getElementById('complete-btn');
const scoreDisplay = document.getElementById('score-display');
let currentAct = null;

function updateActDisplay(text) {
    actDisplay.style.animation = 'none';
    actDisplay.offsetHeight; // Trigger reflow
    actDisplay.textContent = text;
    actDisplay.style.animation = 'fadeIn 0.5s ease forwards';
}

function updateScoreDisplay(score) {
    scoreDisplay.textContent = `Score: ${score}`;
    scoreDisplay.style.animation = 'pulse 0.5s ease';
}

generateBtn.addEventListener('click', () => {
    currentAct = game.generateRandomAct();
    updateActDisplay(currentAct.description);
    completeBtn.classList.remove('hidden');
    completeBtn.classList.add('visible');
});

completeBtn.addEventListener('click', () => {
    if (currentAct && game.completeAct(currentAct.id)) {
        updateScoreDisplay(game.getPlayerScore());
        updateActDisplay('Great job! Generate another act of kindness.');
        completeBtn.classList.remove('visible');
        completeBtn.classList.add('hidden');
        currentAct = null;
    }
});