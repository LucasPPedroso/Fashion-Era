document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-1', {
        type: 'loop',
        clones: false,
        clonesStatus: false,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-2', {
        type: 'loop',
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-3', {
        type: 'loop',
        speed: 400,
    }).mount();
});

