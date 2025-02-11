document.addEventListener('DOMContentLoaded', () => {
    const toggleLanguageButton = document.getElementById('toggleLanguage');
    toggleLanguageButton.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-ru]');
        elements.forEach(el => {
            const ruText = el.getAttribute('data-ru');
            const enText = el.getAttribute('data-en');

            if (el.children.length === 0) {
                el.textContent = el.textContent === ruText ? enText : ruText;
            } else {
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = node.textContent === ruText ? enText : ruText;
                    }
                });
            }
        });
        
        toggleLanguageButton.textContent = toggleLanguageButton.textContent === 'EN' ? 'RU' : 'EN';
    });
});
