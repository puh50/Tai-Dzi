const button = document.querySelector('.to-top');
let textContainer = document.querySelector('.main');

function scrollFunction() {
    textContainer = document.querySelector('.main');
    if (textContainer.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function toTop() {
    textContainer = document.querySelector('.main');
    textContainer.scroll({
        top: 0,
        behavior: "smooth"
    });
};

textContainer.addEventListener('scroll', scrollFunction);

if (button) {
    button.addEventListener('click', toTop);
}