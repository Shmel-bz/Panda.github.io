document.addEventListener('DOMContentLoaded', () => {
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    toggleLanguageButton.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-ru]');
        elements.forEach(el => {
            if (el.childElementCount > 0) {
                el.childNodes.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE) {
                        const ruText = el.getAttribute('data-ru');
                        const enText = el.getAttribute('data-en');
                        child.textContent = (child.textContent === ruText) ? enText : ruText;
                    }
                });
            } else {
                const ruText = el.getAttribute('data-ru');
                const enText = el.getAttribute('data-en');
                el.textContent = (el.textContent === ruText) ? enText : ruText;
            }
        });
        
        toggleLanguageButton.textContent = (toggleLanguageButton.textContent === 'EN') ? 'RU' : 'EN';
    });
});
