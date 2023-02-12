document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-1', {
        type: 'loop',
        perMove: 1,
        mediaQuery: 'min',
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-2', {
        type: 'loop',
        perMove: 1,
        mediaQuery: 'min',
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-3', {
        type: 'loop',
        perMove: 1,
        speed: 400,
        mediaQuery: 'min',
        perPage: 1,
    }).mount();
});


