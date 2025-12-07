// BeTeachy - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for decorative elements
    const decoLines = document.querySelectorAll('.deco-line');
    const decoStars = document.querySelectorAll('.deco-star');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        decoLines.forEach((line, index) => {
            const speed = (index + 1) * 10;
            line.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${-15 + index * 25}deg)`;
        });

        decoStars.forEach((star, index) => {
            const speed = (index + 1) * 5;
            star.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Add active class to current menu item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Lightbox functionality for preview cards
    const previewCards = document.querySelectorAll('.preview-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    previewCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

// Global function to close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Video popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const lessonCards = document.querySelectorAll('.lesson-card[data-video]');
    const videoPopup = document.getElementById('videoPopup');
    const videoFrame = document.getElementById('videoFrame');

    lessonCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            if (videoId && videoPopup && videoFrame) {
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                videoPopup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close video popup on background click
    if (videoPopup) {
        videoPopup.addEventListener('click', function(e) {
            if (e.target === videoPopup) {
                closeVideoPopup();
            }
        });
    }

    // Close video popup on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoPopup();
        }
    });
});

// Global function to close video popup
function closeVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoFrame = document.getElementById('videoFrame');
    if (videoPopup) {
        videoPopup.classList.remove('active');
        document.body.style.overflow = '';
        // Stop video playback
        if (videoFrame) {
            videoFrame.src = '';
        }
    }
}

