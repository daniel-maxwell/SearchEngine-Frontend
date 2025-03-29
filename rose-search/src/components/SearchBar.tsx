'use client'; // Directive to indicate this is a client component with interactivity

/**
 * SearchBar Component
 * 
 * Provides the main search interface for the application.
 * Features a rounded input field with a search button that
 * redirects users to the search results page with their query.
 * 
 * Uses client-side state management to track user input
 * and Next.js router for programmatic navigation.
 */
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  /**
   * Handles search form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative w-full">
        {/* Search input with enhanced styling */}
        <input
          type="text"
          className={`w-full px-5 py-4 rounded-full border ${
            isFocused 
              ? 'border-rose-200 shadow-md' 
              : 'border-neutral-200 shadow-sm hover:shadow-md'
          } outline-none transition-all duration-200 text-neutral-800 placeholder-neutral-400`}
          placeholder="Search the web..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Search query"
        />
        
        {/* Search button with rose accent */}
        <button 
          type="submit" 
          className={`absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full ${
            query.trim() 
              ? 'bg-rose-300 text-white hover:bg-rose-400'
              : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'
          } transition-colors duration-200`}
          onClick={() => router.push(`https://www.google.com/search?q=${encodeURIComponent(query)}`)}
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}