// Copy Event:
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI, my contet is copyright');
});

// Mouse moving event:

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(`x position: ${e.offsetX} - y position: ${e.offsetY}`);
    box.textContent = `x pos: ${e.offsetX} - y pos: ${e.offsetY}`;
});

// Wheel event (Scroll)

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});

// Find all the possible events: https://developer.mozilla.org/en-US/docs/Web/API/Element