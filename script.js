document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
