const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sidebar.classList.toggle('-translate-x-full');
    sidebar.classList.toggle('translate-x-0');
    overlay.classList.toggle('opacity-0');
    overlay.classList.toggle('opacity-100');
    overlay.classList.toggle('pointer-events-none');
    overlay.classList.toggle('pointer-events-auto');
}

if (hamburgerBtn && overlay) {
    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// Carousel functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.scrollContainer = container.querySelector('.room-grid');
        this.prevBtn = container.querySelector('.carousel-nav--prev');
        this.nextBtn = container.querySelector('.carousel-nav--next');
        this.scrollAmount = 260; // card width + gap
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Update scroll amount on resize
        window.addEventListener('resize', () => {
            this.scrollAmount = window.innerWidth <= 768 ? 220 : 260;
        });
    }
    
    prev() {
        this.scrollContainer.scrollBy({
            left: -this.scrollAmount,
            behavior: 'smooth'
        });
    }
    
    next() {
        this.scrollContainer.scrollBy({
            left: this.scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    const roomSection = document.querySelector('.room-section-wrapper');
    
    if (roomSection) new Carousel(roomSection);
});