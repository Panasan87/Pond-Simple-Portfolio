const toggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
});
