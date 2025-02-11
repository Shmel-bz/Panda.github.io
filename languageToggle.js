document.addEventListener('DOMContentLoaded', () => {
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    toggleLanguageButton.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-ru]');
        elements.forEach(el => {
            if (el.textContent === el.getAttribute('data-ru')) {
                el.textContent = el.getAttribute('data-en');
            } else {
                el.textContent = el.getAttribute('data-ru');
            }
        });
        toggleLanguageButton.textContent = toggleLanguageButton.textContent === 'EN' ? 'RU' : 'EN';
    });
});
