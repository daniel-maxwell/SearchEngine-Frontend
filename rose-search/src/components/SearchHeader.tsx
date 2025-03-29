'use client';

/**
 * SearchHeader Component
 * 
 * A more compact header for the search results page.
 * Contains the ROSE logo and a smaller search bar for refining searches.
 * 
 * The logo links back to the home page.
 */
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Logo } from './Logo';

export function SearchHeader({ initialQuery = '' }: { initialQuery: string }) {
  // State to track the current search query
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  /**
   * Handles form submission to navigate to search results
   * with the updated query parameter
   * 
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="sticky top-0 bg-[#f5f5f5] z-10 py-3 border-b border-neutral-200 shadow-sm">
      {/* Subtle rose-colored top border accent */}
      <div className="h-0.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-4">
        {/* Logo with link to home page */}
        <Link href="/" className="flex-shrink-0">
          <Logo size="medium" />
        </Link>
        
      {/* Compact search form */}
      <form onSubmit={handleSubmit} className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              className={`w-full pl-4 pr-10 py-2.5 rounded-full border ${
                isFocused 
                  ? 'border-rose-200 shadow-sm' 
                  : 'border-neutral-200'
              } outline-none transition-all duration-200 text-neutral-800 placeholder-neutral-400`}
              placeholder="Search the web..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              aria-label="Search query"
            />
            
            {/* Search button */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-rose-300 text-white hover:bg-rose-400 transition-colors duration-200"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}