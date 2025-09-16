const typingText = ["software developer", "software designer", "graphic designer", "database administrator", "UI/UX developer", "3D modeller"];
let typingIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

const typingElement = document.getElementById('typing');

function type() {
  if (charIndex < typingText[typingIndex].length) {
    typingElement.textContent += typingText[typingIndex][charIndex];
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingSpeed);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed);
  } else {
    typingIndex++;
    if (typingIndex >= typingText.length) {
      typingIndex = 0;
    }
    setTimeout(type, typingSpeed);
  }
}

type();

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}


const cursorShadow = document.querySelector('.cursor-shadow');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  cursorShadow.style.left = `${x}px`;
  cursorShadow.style.top = `${y}px`;
});

document.addEventListener('mouseover', () => {
  cursorShadow.style.transform = 'scale(1.2) translate(-50%, -50%)';
});

document.addEventListener('mouseout', () => {
  cursorShadow.style.transform = 'scale(1) translate(-50%, -50%)';
});

document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});