const dinosaur = document.getElementById('dinosaur');

let jumping = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !jumping) {
        jumping = true;
        jump();
    }
});

function jump() {
    let currentPosition = 0;
    const jumpInterval = setInterval(() => {
        currentPosition += 5;
        dinosaur.style.bottom = currentPosition + 'px';
        if (currentPosition >= 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                currentPosition -= 5;
                dinosaur.style.bottom = currentPosition + 'px';
                if (currentPosition <= 0) {
                    clearInterval(fallInterval);
                    jumping = false;
                }
            }, 20);
        }
    }, 20);
}

