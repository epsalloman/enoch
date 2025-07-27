// Contact Form Submission
document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const message = document.createElement('div');
        message.textContent = "✅ Thank you! Your message has been sent.";
        message.style.background = "#d1fae5";
        message.style.color = "#065f46";
        message.style.padding = "1rem";
        message.style.marginTop = "1rem";
        message.style.borderRadius = "8px";
        message.style.fontWeight = "600";
        message.style.textAlign = "center";
        message.style.animation = "fadeIn 0.3s ease-in-out";

        this.appendChild(message);

        setTimeout(() => message.remove(), 3000);
        this.reset();
    });
});
