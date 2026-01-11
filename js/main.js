const contact = document.querySelector('.contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.3
});
if(contact){
  observer.observe(contact);
}
const skills = document.querySelectorAll('.skill-item');
const radius = 150;
let angle = 0;

function rotateSkills() {
  const step = (2 * Math.PI) / skills.length;

  skills.forEach((skill, i) => {
    const x = Math.cos(angle + i * step) * radius;
    const y = Math.sin(angle + i * step) * radius;

    skill.style.transform = `
      translate(-50%, -50%)
      translate(${x}px, ${y}px)
    `;
  });

  angle += 0.01;
  requestAnimationFrame(rotateSkills);
}

rotateSkills();
document.querySelectorAll('.demo-link').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // важно: не кликаем карточку
    const url = btn.dataset.demo;
    if (url) {
      window.open(url, '_blank');
    }
  });
});