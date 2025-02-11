document.addEventListener('DOMContentLoaded', () => {
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    toggleLanguageButton.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-ru]');
        elements.forEach(el => {
            const ruText = el.getAttribute('data-ru');
            const enText = el.getAttribute('data-en');

            if (el.textContent.includes(ruText) || el.textContent.includes(enText)) {
                el.textContent = el.textContent.includes(ruText) ? enText : ruText;
            }
        });
        
        toggleLanguageButton.textContent = toggleLanguageButton.textContent === 'EN' ? 'RU' : 'EN';
    });
});
