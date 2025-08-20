import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'uz', label: 'UZ', name: 'Uzbek' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--text-secondary)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
          e.currentTarget.style.color = 'var(--accent-primary)';
          setIsOpen(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 mt-1 w-32 rounded-lg shadow-lg transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        style={{ 
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-primary)'
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {languages?.map((language) => (
          <button
            key={language.code}
            className="w-full px-3 py-2 text-left text-sm transition-all duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center justify-between"
            style={{
              color: i18n.language === language.code ? 'var(--accent-primary)' : 'var(--text-secondary)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              if (i18n.language !== language.code) {
                e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = i18n.language === language.code ? 'var(--accent-primary)' : 'var(--text-secondary)';
            }}
            onClick={() => changeLanguage(language.code)}
          >
            <span>{language.name}</span>
            {i18n.language === language.code && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
