function slider(imageSrc) {
    document.querySelector('.select-image img').src = imageSrc;
}

document.addEventListener('DOMContentLoaded', function () {
    // Select all images within the '.thunbnails' section with the class '.thunbnail img'
    let thumbnailImages = document.querySelectorAll('.thunbnails .thunbnail img');

    // Add a click event listener to each thumbnail image
    thumbnailImages.forEach(function (image) {
        image.addEventListener('click', function () {
            // Call the slider function with the clicked image source
            slider(this.src);
        });
    });
});
