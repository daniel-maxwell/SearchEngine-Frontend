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
  // State to track the current search query input
  const [query, setQuery] = useState('');
  const router = useRouter();

  /**
   * Handles the search form submission
   * Prevents default form behavior and navigates to search results
   * if the query is not empty
   * 
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Encode the query for URL safety and navigate to results page
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative w-full">
        {/* Search input field styled with rounded corners and focus states */}
        <input
          type="text"
          className="w-full p-4 pl-5 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
          placeholder="Search the web..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search query"
        />
        
        {/* Search button positioned absolutely within the input */}
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
          aria-label="Search"
        >
          {/* SVG search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}