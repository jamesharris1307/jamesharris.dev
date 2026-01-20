const moon_button = document.getElementById('Moon_Button');
const sun_button = document.getElementById('Sun_Button');
const root = document.documentElement;

/* ------ Defining the Dark Mode Function w/ colour variables ------ */
function setDark() {
    root.style.setProperty('--bg-main', '#0f0f0f');
    root.style.setProperty('--bg-alt', '#151515');
    root.style.setProperty('--bg-sidebar', '#121212');
    root.style.setProperty('--text-main', '#eaeaea');
    root.style.setProperty('--border-color', '#222');
    localStorage.setItem('theme', 'dark');
}

/* ------ Defining the Light Mode Function w/ colour variables ------ */
function setLight() {
    root.style.setProperty('--bg-main', '#f4f4f4');
    root.style.setProperty('--bg-alt', '#ffffff');
    root.style.setProperty('--bg-sidebar', '#e0e0e0');
    root.style.setProperty('--text-main', '#1a1a1a');
    root.style.setProperty('--border-color', '#ccc');
    localStorage.setItem('theme', 'light');
}

moon_button.addEventListener('click', setDark);
sun_button.addEventListener('click', setLight);

/* ------ If Saved theme in Local Storage use; else default to dark mode ------ */
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    setLight();
} else {
    setDark();
}