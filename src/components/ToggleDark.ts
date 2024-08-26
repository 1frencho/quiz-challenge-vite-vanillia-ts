export const toggleDarkMode = (toggle: HTMLInputElement | null) => {
  if (!toggle) return;
  if (toggle.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('screenMode', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('screenMode', 'light');
  }
};

export const toggleDarkModeOnLoad = (toggle: HTMLInputElement | null) => {
  if (!toggle) return;
  if (localStorage.getItem('screenMode') === 'dark') {
    toggle.checked = true;
    toggleDarkMode(toggle);
  }
  toggle.addEventListener('change', () => {
    toggleDarkMode(toggle);
  });
};
