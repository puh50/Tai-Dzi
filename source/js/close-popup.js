const closeButton = document.querySelectorAll('.close');

closeButton.forEach((button) => {
    button.addEventListener('click', () => {
        const popup = button.parentElement;
        const radio = document.querySelector('input[type="radio"]:checked');

        popup.style.display = 'none';
        radio.checked = false;
    });
})
