// destructuring

const [current, imgs, opacity] = [
    document.querySelector('#current'),
    document.querySelectorAll('.imgs img'),
    0.75
];


// Set first image opacity

imgs[0].style.opacity = opacity;

// imgs.forEach(img =>
//     img.addEventListener('click', e => (current.src = e.target.src))
// );

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity

    imgs.forEach(img => img.style.opacity = 1);

    // Change current image to source of clicked image

    current.src = e.target.src;

    // Add Fade in class
    current.classList.add('fade-in');

    // Set time out - to remove a class after a half a sec it is clicked

    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to var

    e.target.style.opacity = opacity;

}