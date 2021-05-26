const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu')
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
scrollReveal.reveal('.home__title', {});
scrollReveal.reveal('.home__scroll', { delay: 200 })
scrollReveal.reveal('.home__img', {
    origin: 'right',
    delay: 400
})
scrollReveal.reveal('.about__img', { delay: 500 });
scrollReveal.reveal('.about__subtitle', { delay: 300 })
scrollReveal.reveal('.about__profession', {
    delay: 400
})
scrollReveal.reveal('.about__text', { delay: 500 });
scrollReveal.reveal('.about__social-icon', { delay: 600, interval: 200 });


scrollReveal.reveal('.skills__subtitle', {});
scrollReveal.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
scrollReveal.reveal('.skills__img', { delay: 400 });

scrollReveal.reveal('.portfolio__img', { interval: 200 });

scrollReveal.reveal('.contact__subtitle', {});
scrollReveal.reveal('.contact__text', { interval: 200 });
scrollReveal.reveal('.contact__input', { delay: 400 });
scrollReveal.reveal('.contact__button', { delay: 600 });;