document.getElementById('flipToLogin').addEventListener('click', function() {
    document.getElementById('card').classList.add('flipped');
});

document.getElementById('flipToRegister').addEventListener('click', function() {
    document.getElementById('card').classList.remove('flipped');
});
