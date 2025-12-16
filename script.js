// Smooth scroll and interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Copy citation to clipboard
    const citationBox = document.querySelector('.citation-box');
    if (citationBox) {
        citationBox.style.cursor = 'pointer';
        citationBox.title = '点击复制引用';
        citationBox.addEventListener('click', function() {
            const citationText = this.querySelector('code').textContent;
            navigator.clipboard.writeText(citationText).then(() => {
                const originalBg = this.style.background;
                this.style.background = '#d1fae5';
                setTimeout(() => {
                    this.style.background = originalBg;
                }, 1000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        });
    }

    // Add smooth hover effects to cards
    const cards = document.querySelectorAll('.highlight-card, .feature-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

