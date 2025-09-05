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
        this.scrollAmount = 260;
        this.autoScrollInterval = null;
        this.scrollSpeed = 2; // pixels per frame
        this.isScrolling = false;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => {
            this.prev();
            this.resetAutoScroll();
        });
        this.nextBtn.addEventListener('click', () => {
            this.next();
            this.resetAutoScroll();
        });
        
        this.startContinuousScroll();
        
        this.container.addEventListener('mouseenter', () => this.pauseAutoScroll());
        this.container.addEventListener('mouseleave', () => this.startContinuousScroll());
    }
    
    prev() {
        this.scrollContainer.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
    
    next() {
        this.scrollContainer.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
    
    startContinuousScroll() {
        if (this.isScrolling) return;
        this.isScrolling = true;
        
        const scroll = () => {
            if (!this.isScrolling) return;
            
            const maxScroll = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth;
            
            if (this.scrollContainer.scrollLeft >= maxScroll) {
                this.scrollContainer.scrollLeft = 0;
            } else {
                this.scrollContainer.scrollLeft += this.scrollSpeed;
            }
            
            requestAnimationFrame(scroll);
        };
        
        requestAnimationFrame(scroll);
    }
    
    pauseAutoScroll() {
        this.isScrolling = false;
    }
    
    resetAutoScroll() {
        this.pauseAutoScroll();
        setTimeout(() => this.startContinuousScroll(), 1000);
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    const roomSection = document.querySelector('.room-section-wrapper');
    
    if (roomSection) {
        const carousel = new Carousel(roomSection);
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                carousel.pauseAutoScroll();
            } else {
                carousel.startContinuousScroll();
            }
        });
    }
});