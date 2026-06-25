// --- Dark / Light theme toggle ---
const toggleBtn = document.getElementById('theme-toggle');

const setToggleLabel = () => {
    toggleBtn.textContent = document.body.classList.contains('dark-theme')
        ? 'Light Mode'
        : 'Dark Mode';
};

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    setToggleLabel();
});

// --- Contact form: build a pre-filled mailto link ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = `Website inquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;

    window.location.href =
        `mailto:jrgatesf@gmail.com?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
});
