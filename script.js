// Function to automatically change images every 2 seconds for each carousel
function startCarousel(carousel) {
    const images = carousel.getElementsByClassName("carousel-image");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    images[0].classList.add("active"); // Start with the first image visible
    setInterval(showNextImage, 2000); // Change image every 2 seconds
}

// Start the carousel for each product card
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(startCarousel);
});