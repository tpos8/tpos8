const header = document.querySelector('.site-header');
const menu = document.querySelector('.mobile-menu');
const menuToggle = menu.querySelector('summary');
const mobile = matchMedia('(max-width: 820px)');

function updateHeader() {
  header.classList.toggle('is-scrolled', scrollY > 28);
}

updateHeader();
addEventListener('scroll', updateHeader, { passive: true });
addEventListener('pageshow', updateHeader);

mobile.addEventListener('change', () => {
  menu.open = false;
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || !menu.open) return;
  menu.open = false;
  menuToggle.focus();
});

document.addEventListener('click', event => {
  if (!menu.contains(event.target) || event.target.closest('a')) menu.open = false;
});

addEventListener('pagehide', () => {
  menu.open = false;
});

document.querySelector('#year').textContent = new Date().getFullYear();
