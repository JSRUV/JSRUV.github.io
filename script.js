// Select the button
const toggleBtn = document.getElementById('theme-toggle');

// Listen for a click
toggleBtn.addEventListener('click', () => {
    // Toggle the .dark-theme class on the body
    document.body.classList.toggle('dark-theme');
    
    // Update button text
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
});
