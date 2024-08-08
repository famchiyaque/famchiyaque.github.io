function openSettings() {
    
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = -100; // Adjust this value to your needs

        window.scrollTo({
            top: targetElement.offsetTop + offset,
            behavior: 'smooth'
        });
    });
});