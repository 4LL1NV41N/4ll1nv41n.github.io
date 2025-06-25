const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const themeToggle = document.getElementById('theme-toggle');

settingsBtn.addEventListener('click', () => {
  settingsPanel.style.display = 'block';
});

closeSettingsBtn.addEventListener('click', () => {
  settingsPanel.style.display = 'none';
});

document.addEventListener('click', (e) => {
  if (!settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
    settingsPanel.style.display = 'none';
  }
});

themeToggle.addEventListener('change', () => {
  const theme = themeToggle.value;
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  themeToggle.value = savedTheme;
  document.body.classList.add(savedTheme);
}

document.getElementById('settings-btn').addEventListener('click', function() {
  document.getElementById('settings-panel').style.display = 'block';
});

document.getElementById('close-settings-btn').addEventListener('click', function() {
  document.getElementById('settings-panel').style.display = 'none';
});
