const buttonScrollLeft = document.querySelector(".button_left");
const buttonScrollRight = document.querySelector(".button_right");
const carusel = document.querySelector(".coaches_carousel");
const scrollStep = 120; // Шаг прокрутки

buttonScrollLeft.addEventListener('click', () => {
    carusel.scrollBy({
        left: -scrollStep,
        behavior: 'smooth' // Добавляем параметр для плавной прокрутки
    });
});

buttonScrollRight.addEventListener('click', () => {
    carusel.scrollBy({
        left: scrollStep,
        behavior: 'smooth' // Добавляем параметр для плавной прокрутки
    });
});