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

// Main SearchResults component
// Accepts an array of search results and displays them in a structured format
export function SearchResults({ results }: { results: SearchResult[] }) {
  if (results.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-neutral-600">No results found. Try different keywords.</p>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      {results.map((result) => (
        <div key={result.id} className="max-w-3xl">
          {/* URL display with breadcrumb-like format */}
          <div className="text-sm text-neutral-600 mb-1 truncate">
            {formatUrl(result.url)}
          </div>
          
          {/* Result title with link styling */}
          <h2 className="text-xl text-[#1a0dab] hover:underline font-normal leading-tight">
            <Link 
              href={result.url} 
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title}
            </Link>
          </h2>
          
          {/* Result description with proper line height */}
          <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
            {result.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Format URL for display
 */
function formatUrl(url: string): React.ReactNode {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    let path = urlObj.pathname;
    
    // Truncate path if too long
    if (path.length > 50) {
      const parts = path.split('/').filter(Boolean);
      if (parts.length > 3) {
        path = '/' + parts.slice(0, 2).join('/') + '/...';
      }
    }
    
    return (
      <>
        <span className="text-neutral-500">{domain}</span>
        <span className="text-neutral-400">{path}</span>
      </>
    );
  } catch (e) {
    return url;
  }
}