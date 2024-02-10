const switchToggle = document.querySelector('.switch input[type="checkbox"]');
const body = document.body;

function toggleDarkTheme() {
    const isDark = switchToggle.checked;
    body.classList.toggle('dark', isDark);
    localStorage.setItem('darkTheme', isDark ? 'on' : 'off');
}

function initDarkTheme() {
  switchToggle.addEventListener('change', toggleDarkTheme);

  window.addEventListener('load', () => {
    const isDark = localStorage.getItem('darkTheme') === 'on';
    body.classList.toggle('dark', isDark);
    switchToggle.checked = isDark;
  });
}

export {initDarkTheme};
