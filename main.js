// Apply 'show' class on scroll to trigger animations
const scrollAnimation = () => {
    document.querySelectorAll('.shoes, .jersey, .acc').forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < window.innerHeight - 50) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
};
window.addEventListener('scroll', scrollAnimation);

// Smooth scroll to sections when navbar links are clicked
document.querySelectorAll('.main-navbar li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Smooth scroll to the target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // adjust offset for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Add 'scrolled' class to navbar when scrolling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.main');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll to sections when navbar links are clicked
document.querySelectorAll('.main-navbar li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Scroll to top if "Home" is clicked
        if (targetId === "") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetSection = document.getElementById(targetId);
            
            // Smooth scroll to the target section
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // adjust offset for fixed navbar height
                    behavior: 'smooth'
                });
            }
        }
    });
});