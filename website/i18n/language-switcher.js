// Language Switcher Component for Scanium
// Provides UI for language selection and handles switching logic

const SUPPORTED_LANGUAGES = {
  'en': { name: 'English', nativeName: 'English' },
  'de': { name: 'German', nativeName: 'Deutsch' },
  'es': { name: 'Spanish', nativeName: 'Español' },
  'fr': { name: 'French', nativeName: 'Français' },
  'it': { name: 'Italian', nativeName: 'Italiano' },
  'pt-BR': { name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)' }
};

class LanguageSwitcher {
  constructor() {
    this.currentLang = this.detectCurrentLanguage();
    this.init();
  }

  // Detect current language from URL path
  detectCurrentLanguage() {
    const path = window.location.pathname;

    // Check if we're in a language subdirectory
    const match = path.match(/\/(de|es|fr|it|pt-BR)\//);
    if (match) {
      return match[1];
    }

    // Check if path starts with language code
    if (path.startsWith('/de/') || path.startsWith('/de')) return 'de';
    if (path.startsWith('/es/') || path.startsWith('/es')) return 'es';
    if (path.startsWith('/fr/') || path.startsWith('/fr')) return 'fr';
    if (path.startsWith('/it/') || path.startsWith('/it')) return 'it';
    if (path.startsWith('/pt-BR/') || path.startsWith('/pt-BR')) return 'pt-BR';

    // Default to English
    return 'en';
  }

  // Initialize the language switcher
  init() {
    console.log('[Language Switcher] Initializing, current lang:', this.currentLang);
    this.createSwitcherHTML();
    this.attachEventListeners();
    console.log('[Language Switcher] Initialization complete');
  }

  // Create the HTML structure for the language switcher
  createSwitcherHTML() {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('id', 'languageSwitcher');

    const currentLangInfo = SUPPORTED_LANGUAGES[this.currentLang];

    switcher.innerHTML = `
      <button class="language-switcher__button" aria-label="Select language" aria-expanded="false">
        <span class="language-switcher__current">${currentLangInfo.nativeName}</span>
        <svg class="language-switcher__icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="language-switcher__dropdown" role="menu">
        ${Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => `
          <a
            href="#"
            class="language-switcher__option ${code === this.currentLang ? 'active' : ''}"
            data-lang="${code}"
            role="menuitem"
          >
            ${lang.nativeName}
          </a>
        `).join('')}
      </div>
    `;

    // Find the header and append the switcher
    const header = document.querySelector('.site-header .container');
    console.log('[Language Switcher] Header element found:', !!header);

    if (header) {
      console.log('[Language Switcher] Appending to header');
      header.appendChild(switcher);
    } else {
      // Fallback: append to body if header not found
      console.log('[Language Switcher] Header not found, appending to body as fallback');
      document.body.insertBefore(switcher, document.body.firstChild);
    }
  }

  // Attach event listeners
  attachEventListeners() {
    const button = document.querySelector('.language-switcher__button');
    const dropdown = document.querySelector('.language-switcher__dropdown');
    const options = document.querySelectorAll('.language-switcher__option');

    if (!button || !dropdown) return;

    // Toggle dropdown on button click
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('show');
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Handle language selection
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = option.getAttribute('data-lang');
        if (selectedLang !== this.currentLang) {
          this.switchLanguage(selectedLang);
        }
      });
    });

    // Keyboard navigation
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  }

  // Switch to a different language
  switchLanguage(newLang) {
    // Mark this as a manual selection to prevent auto-redirect
    localStorage.setItem('scanium-lang-manual', 'true');
    localStorage.setItem('scanium-lang', newLang);

    // Get current path
    let path = window.location.pathname;

    // Remove current language from path if present
    path = path.replace(/^\/(de|es|fr|it|pt-BR)\//, '/');

    // Remove /website/ prefix if present
    const isWebsiteSubdir = path.startsWith('/website/');
    if (isWebsiteSubdir) {
      path = path.replace('/website/', '/');
    }

    // Construct new URL
    let newPath;
    if (newLang === 'en') {
      // English is at root /website/
      newPath = isWebsiteSubdir ? `/website${path}` : path;
    } else {
      // Other languages are in subdirectories
      if (isWebsiteSubdir) {
        newPath = `/website/${newLang}${path}`;
      } else {
        newPath = `/${newLang}${path}`;
      }
    }

    // Handle index.html default
    if (newPath.endsWith('/')) {
      newPath += 'index.html';
    }

    // Redirect to new language
    window.location.href = newPath;
  }
}

// Initialize language switcher when DOM is loaded
console.log('[Language Switcher] Script loaded, readyState:', document.readyState);

if (document.readyState === 'loading') {
  console.log('[Language Switcher] Waiting for DOMContentLoaded...');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('[Language Switcher] DOMContentLoaded fired, initializing...');
    new LanguageSwitcher();
  });
} else {
  console.log('[Language Switcher] DOM already ready, initializing immediately...');
  new LanguageSwitcher();
}
