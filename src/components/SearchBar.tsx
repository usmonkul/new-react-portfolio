import { useState, useEffect, useRef, useMemo } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'section' | 'project' | 'skill' | 'contact';
  href: string;
  icon: string;
}

const SearchBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search results data
  const allResults: SearchResult[] = [
    {
      id: 'home',
      title: 'Home',
      description: 'Welcome section and introduction',
      type: 'section',
      href: '#home',
      icon: '🏠'
    },
    {
      id: 'about',
      title: 'About me',
      description: 'Learn more about my background and experience',
      type: 'section',
      href: '#about',
      icon: '👨‍💻'
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'View my latest work and projects',
      type: 'section',
      href: '#projects',
      icon: '🚀'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Technical skills and expertise',
      type: 'section',
      href: '#about',
      icon: '⚡'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch for collaboration',
      type: 'section',
      href: '#contact',
      icon: '📧'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Professional work experience and career',
      type: 'section',
      href: '#experience',
      icon: '💼'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Collection of my work and achievements',
      type: 'project',
      href: '#projects',
      icon: '📁'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'React, TypeScript, and modern web technologies',
      type: 'skill',
      href: '#skills',
      icon: '🎨'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Node.js, databases, and server technologies',
      type: 'skill',
      href: '#skills',
      icon: '⚙️'
    },
    {
      id: 'email',
      title: 'Email Contact',
      description: 'Send me an email message',
      type: 'contact',
      href: '#contact',
      icon: '✉️'
    }
  ];

  // Filter results based on search query
  const filteredResults = useMemo(() => {
    if (searchQuery.trim() === '') {
      return allResults.slice(0, 6); // Show top 6 when no query
    }
    return allResults.filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
        setSelectedIndex(0);
      }

      // Arrow navigation when search is open
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => {
            const newIndex = prev < filteredResults.length - 1 ? prev + 1 : prev;
            console.log('Arrow Down:', { prev, newIndex, total: filteredResults.length });
            return newIndex;
          });
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => {
            const newIndex = prev > 0 ? prev - 1 : prev;
            console.log('Arrow Up:', { prev, newIndex, total: filteredResults.length });
            return newIndex;
          });
        }
        if (e.key === 'Enter' && filteredResults[selectedIndex]) {
          e.preventDefault();
          handleResultClick(filteredResults[selectedIndex]);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Ensure selectedIndex is valid when filteredResults change
  useEffect(() => {
    if (selectedIndex >= filteredResults.length && filteredResults.length > 0) {
      setSelectedIndex(filteredResults.length - 1);
    }
  }, [filteredResults, selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    // Navigate to the href
    const element = document.querySelector(result.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close search
    setIsOpen(false);
    setSearchQuery('');
    setSelectedIndex(0);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'section': return 'var(--accent-primary)';
      case 'project': return 'var(--accent-secondary)';
      case 'skill': return 'var(--accent-tertiary)';
      case 'contact': return 'var(--accent-primary)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-3 py-1 rounded-lg text-sm transition-all duration-200"
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--text-secondary)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
          e.currentTarget.style.color = 'var(--accent-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
      >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd 
          className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs rounded font-mono"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border-primary)'
          }}
        >
          ⌘K
        </kbd>
      </button>

      {/* Search Popup Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsOpen(false)}
        >
          {/* Search Modal */}
          <div
            className="w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b" style={{ borderColor: 'var(--border-primary)' }}>
              <svg
                className="w-5 h-5 mr-3"
                style={{ color: 'var(--text-muted)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-lg"
                style={{ color: 'var(--text-primary)' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 p-1 rounded hover:bg-gray-100"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="py-2">
                  {filteredResults?.map((result, index) => (
                    <button
                      key={result.id}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 transition-all duration-150 `}
                      style={{
                        backgroundColor: index === selectedIndex ? 'var(--bg-tertiary)' : 'transparent',
                        borderLeft: index === selectedIndex ? '3px solid var(--accent-primary)' : 'none'
                      }}
                      onClick={() => handleResultClick(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <span className="text-2xl">{result.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div 
                          className="font-medium text-sm"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {result.title}
                        </div>
                        <div 
                          className="text-sm truncate"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {result.description}
                        </div>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: getTypeColor(result.type)
                        }}
                      >
                        {result.type}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <div 
                    className="text-lg mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    No results found
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Try searching for "projects", "skills", or "contact"
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div 
              className="px-4 py-3 border-t text-xs flex items-center justify-between"
              style={{ 
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-muted)'
              }}
            >
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 text-xs rounded bg-white/10 font-mono">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 text-xs rounded bg-white/10 font-mono">↵</kbd>
                  <span>Select</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 text-xs rounded bg-white/10 font-mono">esc</kbd>
                  <span>Close</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
