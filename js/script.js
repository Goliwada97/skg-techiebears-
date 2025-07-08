const words = ["Software", "Application", "Website"];
let idx = 0;
const animatedWord = document.getElementById("animated-word");

function loopWords() {
    if (!animatedWord) return; // Guard clause to prevent errors

    animatedWord.classList.remove("animate");
    setTimeout(() => {
        idx = (idx + 1) % words.length;
        animatedWord.textContent = words[idx];
        animatedWord.classList.add("animate");
    }, 100);
}

// Only set up the interval if the element exists
if (animatedWord) {
    setInterval(loopWords, 1000);
    // Initial animation
    animatedWord.classList.add("animate");
}

// section 2 start

ScrollReveal().reveal('.sr-left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: false
});

ScrollReveal().reveal('.sr-card', {
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    interval: 100,
    easing: 'ease-out',
    reset: false
});
// section 2 end

// services-page start
// faq-start
// FAQ Accordion Toggle
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-question').forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            b.querySelector('.faq-toggle').innerHTML = '<i class="fas fa-plus"></i>';
            b.parentElement.querySelector('.faq-answer').classList.remove('show');
        });
        if (!expanded) {
            this.setAttribute('aria-expanded', 'true');
            this.querySelector('.faq-toggle').innerHTML = '<i class="fas fa-minus"></i>';
            this.parentElement.querySelector('.faq-answer').classList.add('show');
        }
    });
});
// faq-end
// services-page end

// contact us start
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simple validation
    let valid = true;
    this.querySelectorAll('.form-control').forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '1.5px solid #f26522';
            valid = false;
        } else {
            input.style.border = 'none';
        }
    });
    if (valid) {
        alert('Thank you for contacting us!');
        this.reset();
    }
});
//contact us end
// mission & vision animation start
// Mission & Vision Animation on scroll
function animateMissionVision() {
    const cards = document.querySelectorAll('.mission-vision-card.animate-fade-in-up');
    const trigger = window.innerHeight * 0.92;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) {
            card.style.opacity = 1;
            card.style.animationPlayState = 'running';
        }
    });
}
window.addEventListener('scroll', animateMissionVision);
window.addEventListener('DOMContentLoaded', animateMissionVision);
// mission & vision animation end

// Technology start
// Animate progress bars from 0 to target values with ease
document.addEventListener("DOMContentLoaded", () => {
    // Target progress values
    const targets = {
        mobile: 85,
        web: 95,
        uiux: 78
    };

    const duration = 2000; // animation duration in ms
    const frameRate = 60; // frames per second
    const totalFrames = Math.round(duration / (1000 / frameRate));

    function animateProgress(idBar, idText, target) {
        let frame = 0;
        const bar = document.getElementById(idBar);
        const text = document.getElementById(idText);

        const animate = () => {
            frame++;
            const progress = easeOutCubic(frame / totalFrames) * target;
            const progressText = Math.min(Math.round(progress), target);

            bar.style.width = progressText + '%';
            bar.parentElement.setAttribute('aria-valuenow', progressText);
            text.textContent = progressText + '%';

            if (frame < totalFrames) {
                requestAnimationFrame(animate);
            }
        };

        // Easing function for smoother animation
        function easeOutCubic(t) {
            return (--t) * t * t + 1;
        }

        // Start animation with a slight delay
        setTimeout(() => {
            animate();
        }, 1500);
    }

    animateProgress('bar-mobile', 'progress-mobile', targets.mobile);
    animateProgress('bar-web', 'progress-web', targets.web);
    animateProgress('bar-uiux', 'progress-uiux', targets.uiux);
});
//technology end

// Enable dropdown on hover for all screens (Bootstrap fix for mobile)
document.querySelectorAll('.navbar-nav .dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) menu.classList.add('show');
    });
    dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) menu.classList.remove('show');
    });
});

// Dropdowns: hover for desktop, click for mobile/tablet
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 991.98) {
        document.querySelectorAll('.navbar-nav .dropdown').forEach(function (dropdown) {
            dropdown.addEventListener('click', function (e) {
                // Prevent default link behavior
                e.stopPropagation();
                // Close other open dropdowns
                document.querySelectorAll('.navbar-nav .dropdown .dropdown-menu.show').forEach(function (menu) {
                    if (menu !== dropdown.querySelector('.dropdown-menu')) {
                        menu.classList.remove('show');
                    }
                });
                // Toggle this dropdown
                var menu = this.querySelector('.dropdown-menu');
                if (menu) menu.classList.toggle('show');
            });
        });
        // Close dropdowns when clicking outside
        document.addEventListener('click', function () {
            document.querySelectorAll('.navbar-nav .dropdown .dropdown-menu.show').forEach(function (menu) {
                menu.classList.remove('show');
            });
        });
    }
});

