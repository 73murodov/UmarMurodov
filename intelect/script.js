document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const revealSections = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on load

    // Image hover effect with JS animation
    const images = document.querySelectorAll(".image-gallery img");
    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "rotate(8deg) scale(1.1)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "rotate(0deg) scale(1)";
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach(container => {
        const video = container.querySelector("video");
        const playPauseBtn = container.querySelector(".play-pause-btn");

        container.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                container.classList.remove("paused");
            } else {
                video.pause();
                container.classList.add("paused");
            }
        });
    });
});
