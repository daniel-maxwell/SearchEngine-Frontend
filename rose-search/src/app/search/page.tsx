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

// Number of results to display per page
const RESULTS_PER_PAGE = 10;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  // Extract and validate query parameters
  const query = searchParams.q || '';
  const currentPage = Number(searchParams.page || '1');
  
  // Early return for empty queries
  if (!query) {
    return (
      <div className="min-h-screen flex flex-col">
        <SearchHeader initialQuery="" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Please enter a search query</p>
        </div>
      </div>
    );
  }

  // Fetch search results (mock implementation for now)
  const { results, totalResults, searchTime } = await getSearchResults(
    query,
    currentPage,
    RESULTS_PER_PAGE
  );

  // Calculate total pages for pagination
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with smaller search bar for refining searches */}
      <SearchHeader initialQuery={query} />
      
      {/* Main content area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {/* Search statistics display */}
        <div className="text-sm text-gray-500 mb-4">
          About {totalResults.toLocaleString()} results ({searchTime.toFixed(2)} seconds)
        </div>
        
        {/* List of search results */}
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
    </div>
  );
}