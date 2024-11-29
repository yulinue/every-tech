const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('menuButtonClose');

menuButton.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
});


const slider = document.getElementById('servicesSlider');
const controller = document.getElementById('sliderController');
const sliderItems = document.querySelectorAll('.services__slider-item');
const sliderWidth = sliderItems[0].offsetWidth + parseInt(getComputedStyle(slider).gap);
const totalItems = sliderItems.length;
const totalWidth = sliderWidth * totalItems;
const sliderLineWidth = document.querySelector('.services__slider-line').offsetWidth;
const controllerWidth = controller.offsetWidth;
const initialOffset = 41;
const maxLeft = sliderLineWidth - controllerWidth - initialOffset;
const maxTranslate = totalWidth - sliderLineWidth;

let isDragging = false;
let startX, startLeft;

// Обработчик нажатия
controller.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startLeft = controller.offsetLeft;
    controller.style.transition = 'none';
    slider.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const newLeft = Math.min(
        Math.max(startLeft + dx, initialOffset),
        maxLeft
    );

    controller.style.left = `${newLeft}px`;

    const translateX = ((newLeft - initialOffset) / maxLeft) * maxTranslate;
    slider.style.transform = `translateX(-${translateX}px)`;
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        controller.style.transition = 'left 0.2s ease-in-out';
        slider.style.transition = 'transform 0.5s ease-in-out';
    }
});

const modalClose = document.getElementById('closeModal');
const modalOpen = document.getElementById('openModal');
const modalOpenMobile = document.getElementById('openModalMobile');
const modalCloseAfter = document.getElementById('closeModalAfter');
const modalCloseBut = document.getElementById('closeModalBut');
const modal = document.getElementById('modalOverlay');

modalOpen.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modalOpenMobile.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

modalCloseAfter.addEventListener('click', () => {
    modal.style.display = 'none';
})

modalCloseBut.addEventListener('click', () => {
    modal.style.display = 'none';
})

const form = document.getElementById('modalForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const beforeSubmit = document.getElementById('beforeSubmit');
    const afterSubmit = document.getElementById('afterSubmit');
    beforeSubmit.style.display = 'none';
    afterSubmit.style.display = 'flex';
})