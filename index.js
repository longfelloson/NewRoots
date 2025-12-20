$(document).ready(function () {
    // List of images
    var images = [
        "./assets/backgroundSlideOne.png",
        "./assets/backgroundSlideTwo.png",
        "./assets/backgroundSlideThree.png",
    ];

    var currentIndex = 0;
    var header = $("header");

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;

        // Preload image to avoid flickering
        var img = new Image();
        img.onload = function () {
            header.css("background-image", "url('" + images[currentIndex] + "')");
        }
        img.src = images[currentIndex];
    }

    // Initial background
    header.css("background-image", "url('" + images[currentIndex] + "')");

    // Change background every 5 seconds
    setInterval(changeBackground, 10000);
});