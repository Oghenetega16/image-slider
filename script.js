(function (){
    "use strict";

    const imageContainer = ['./images/image1.png', './images/image2.png', './images/image3.png', './images/image4.png'];
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    let currentImage = 0;

    next.addEventListener('click', () => {
        currentImage++;
        if (currentImage > (imageContainer.length - 1)) {
            currentImage = 0;
        }
        document.querySelector('#img').src = imageContainer[currentImage];
    });

    prev.addEventListener('click', () => {
        currentImage--;
        if (currentImage < 0) {
            currentImage = imageContainer.length - 1;
        }
        document.querySelector('#img').src = imageContainer[currentImage];
    });
}());
