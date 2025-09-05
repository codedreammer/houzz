// Simple JavaScript for Houzz clone

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Add mobile menu toggle logic here if needed
            console.log('Mobile menu clicked');
        });
    }

    // Form submission handlers
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const signupButtons = document.querySelectorAll('button[type="submit"], button');

    // Add form validation
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
    });

    // Button click handlers
    signupButtons.forEach(button => {
        if (button.textContent.includes('Sign Up') || button.textContent.includes('Join for Free')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const emailInput = this.parentElement.querySelector('input[type="email"]');
                
                if (emailInput && emailInput.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (emailRegex.test(emailInput.value)) {
                        alert('Thank you for signing up! This is a demo.');
                    } else {
                        alert('Please enter a valid email address.');
                        emailInput.focus();
                    }
                } else {
                    alert('Please enter your email address.');
                    if (emailInput) emailInput.focus();
                }
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});