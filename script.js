document.addEventListener("DOMContentLoaded", function () {
    function startSlideshow(slideshowClass) {
        let slideIndex = 0;
        let slides = document.querySelectorAll(`.${slideshowClass} .slide`);

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";
        }

        showSlides();

        setInterval(showSlides, 3000); // Change image every 3 seconds
    }

    // Start both slideshows independently
    startSlideshow("slideshow-container"); // Home Slideshow
    startSlideshow("events-slideshow");    
    startSlideshow("campus-slideshow");    
});

// Move toggleDropdown OUTSIDE of DOMContentLoaded
window.toggleDropdown = function (id) {
    console.log("Toggling:", id);  
    var content = document.getElementById(id);
    if (content) {
        content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
    } else {
        console.error("Element not found:", id);
    }
};
