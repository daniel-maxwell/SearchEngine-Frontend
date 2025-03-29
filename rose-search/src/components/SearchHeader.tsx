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

export function SearchHeader({ initialQuery = '' }: { initialQuery: string }) {
  // State to track the current search query
  const [query, setQuery] = useState(initialQuery);
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
    <header className="sticky top-0 bg-white shadow-sm z-10 py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-4">
        {/* Logo with link to home page */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-rose-500">R</span>
          <span className="text-rose-400">O</span>
          <span className="text-rose-300">S</span>
          <span className="text-rose-200">E</span>
        </Link>
        
        {/* Search form */}
        <form onSubmit={handleSubmit} className="flex-1 max-w-2xl">
          <div className="relative">
            {/* Search input */}
            <input
              type="text"
              className="w-full p-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-transparent"
              placeholder="Refine your search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search query"
            />
            
            {/* Search button */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
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