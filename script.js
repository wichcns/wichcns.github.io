
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

window.addEventListener('scroll', () => {
  const y = window.scrollY + 140;
  let current = 'home';
  sections.forEach(sec => {
    if (sec.offsetTop <= y) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
