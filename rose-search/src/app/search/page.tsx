/**
 * Search Results Page
 * 
 * Displays search results based on query parameters.
 * Features a header with a smaller search bar for refining searches,
 * list of results with pagination, and controls for navigating between pages.
 */

import { SearchHeader } from '@/components/SearchHeader';
import { SearchResults } from '@/components/SearchResults';
import { Pagination } from '@/components/Pagination';
import { getSearchResults } from '@/lib/search';

// Number of results to display per page (like Google)
const RESULTS_PER_PAGE = 10;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || '';
  const currentPage = Number(params.page || '1');
  

  // If no query is provided, display a message to the user
  if (!query) {
    return (
      <div className="min-h-screen flex flex-col">
        <SearchHeader initialQuery="" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-neutral-500">Please enter a search query</p>
        </div>
      </div>
    );
  }

  // Fetch search results based on query and current page
  const { results, totalResults, searchTime } = await getSearchResults(
    query,
    currentPage,
    RESULTS_PER_PAGE
  );

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Compact search header */}
      <SearchHeader initialQuery={query} />
      
      {/* Main content area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-5">
        {/* Search statistics with Google-like formatting */}
        <div className="text-sm text-neutral-500 mb-6">
          About {totalResults.toLocaleString()} results ({searchTime.toFixed(2)} seconds)
        </div>
        
        {/* Search results list */}
        <SearchResults results={results} />
        
        {/* Pagination controls */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            query={query} 
          />
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-4 border-t border-neutral-100 px-4">
        <div className="max-w-6xl mx-auto flex justify-between text-sm text-neutral-500">
          <div>© {new Date().getFullYear()} ROSE Search</div>
          <div className="flex gap-6">
            <a href="/about" className="hover:text-rose-400 transition-colors">About ROSE</a>
            <a href="/about" className="hover:text-rose-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}