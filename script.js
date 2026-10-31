// Formani yuborish bildirishnomasi
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    
    alert(`Rahmat, ${name}! Xabaringiz muvaffaqiyatli yuborildi.`);
    
    // Formani tozalash
    this.reset();
});

// Menyu bo'limlarini scroll qilganda faol holatni belgilash
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});