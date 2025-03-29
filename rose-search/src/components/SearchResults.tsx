/**
 * SearchResults Component
 * 
 * Displays a list of search results with title, URL, and description.
 * Each result is styled to resemble major search engines' result format.
 */
import Link from 'next/link';

// Interface for a search result item
interface SearchResult {
  id: string;
  title: string;
  url: string;
  description: string;
}

export function SearchResults({ results }: { results: SearchResult[] }) {
  // If no results are found, show a message
  if (results.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-600">No results found. Try different keywords.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <div key={result.id} className="max-w-3xl">
          {/* URL display */}
          <div className="text-sm text-gray-600 truncate">{result.url}</div>
          
          {/* Result title with link */}
          <h2 className="text-xl font-medium mt-1">
            <Link 
              href={result.url} 
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title}
            </Link>
          </h2>
          
          {/* Result description */}
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">{result.description}</p>
        </div>
      ))}
    </div>
  );
}