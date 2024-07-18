document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.button');

    signUpButton.addEventListener('click', function() {
        alert('Sign Up button clicked!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const heartOverlay = document.querySelector('.heart-overlay');

    imageContainer.addEventListener('dblclick', () => {
        heartOverlay.classList.add('active');
        setTimeout(() => {
            heartOverlay.classList.remove('active');
        }, 500);
    });
});