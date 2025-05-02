// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Валидация формы
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Введите корректный email.');
    return;
  }

  alert('Спасибо за сообщение!');
  form.reset();
});
