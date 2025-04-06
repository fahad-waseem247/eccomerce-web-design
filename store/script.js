// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Countdown Timer for Deals Section
function startCountdown() {
    const countdownElement = document.querySelector(".deals .countdown");
    let timeLeft = 86400; // 24 hours in seconds

    const countdown = setInterval(() => {
        const days = Math.floor(timeLeft / (24 * 60 * 60));
        const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        const seconds = timeLeft % 60;

        countdownElement.textContent = `Days: ${days} | Hours: ${hours} | Min: ${minutes} | Sec: ${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdownElement.textContent = "Deal Ended!";
        }

        timeLeft--;
    }, 1000);
}

startCountdown();

// Form Submission (Example for Send Quote and Newsletter)
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
});