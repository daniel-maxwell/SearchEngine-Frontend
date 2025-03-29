'use client';

/**
 * Pagination Component
 * 
 * Provides navigation controls between pages of search results.
 * Shows current page, total pages, and buttons for next/previous pages.
 * 
 */
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

export function Pagination({ currentPage, totalPages, query }: PaginationProps) {
  const router = useRouter();
  
  /**
   * Creates the URL for a specific page number
   * while preserving the search query
   * 
   * @param {number} page - The page number to navigate to
   * @returns {string} The URL for the specified page
   */
  const getPageUrl = (page: number) => {
    return `/search?q=${encodeURIComponent(query)}&page=${page}`;
  };

  /**
   * Generates a range of page numbers to display,
   * showing pages around the current page
   * 
   * @returns {number[]} Array of page numbers to display
   */
  const getPageNumbers = () => {
    // For smaller page counts, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // For larger page counts, show pages around current page with ellipsis
    let pages: (number | string)[] = [1];
    
    // Logic to determine which page numbers to show
    if (currentPage < 5) {
      pages = [...pages, 2, 3, 4, 5, '...', totalPages];
    } else if (currentPage > totalPages - 4) {
      pages = [...pages, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [
        ...pages,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
      ];
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center py-8" aria-label="Pagination">
      <ul className="flex items-center gap-1">
        {/* Previous page button */}
        {currentPage > 1 && (
          <li>
            <Link 
              href={getPageUrl(currentPage - 1)}
              className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
              aria-label="Go to previous page"
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
        )}
        
        {/* Page number buttons */}
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {typeof page === 'number' ? (
              <Link
                href={getPageUrl(page)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === page
                    ? 'bg-rose-500 text-white font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </Link>
            ) : (
              // Ellipsis for skipped pages
              <span className="px-3 py-2 text-gray-500">...</span>
            )}
          </li>
        ))}
        
        {/* Next page button */}
        {currentPage < totalPages && (
          <li>
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
              aria-label="Go to next page"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}