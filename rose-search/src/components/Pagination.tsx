'use client';

/**
 * Pagination Component
 * 
 * Provides navigation controls between pages of search results.
 * Shows current page, total pages, and buttons for next/previous pages.
 * 
 */
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

export function Pagination({ currentPage, totalPages, query }: PaginationProps) {
  const router = useRouter();
  
  const getPageUrl = (page: number) => {
    return `/search?q=${encodeURIComponent(query)}&page=${page}`;
  };

  const getPageNumbers = () => {
    // Pagination logic
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    let pages = [1];
    
    if (currentPage < 5) {
      pages = [1, 2, 3, 4, 5, 0, totalPages];
    } else if (currentPage > totalPages - 4) {
      pages = [1, 0, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, 0, currentPage - 1, currentPage, currentPage + 1, 0, totalPages, ];
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="pt-10 pb-8" aria-label="Pagination">
      {/* Page navigation with rose accent for current page */}
      <div className="flex justify-center text-sm">
        <div className="inline-flex shadow-sm -space-x-px rounded-xl overflow-hidden">
          {/* Previous page button */}
          {currentPage > 1 && (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="px-4 py-2 border border-neutral-200 bg-neutral-50 text-neutral-400 hover:bg-neutral-50 transition-colors"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          )}
          
          {/* Page numbers */}
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {page !== 0 ? (
                <Link
                  href={getPageUrl(page)}
                  className={`px-4 py-2 border border-neutral-200 ${
                    currentPage === page
                      ? 'bg-rose-300 text-white border-neutral-200'
                      : 'bg-[#f5f5f5] text-neutral-600 hover:bg-neutral-50'
                  } transition-colors`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </Link>
              ) : (
                <span className="px-4 py-2 border border-neutral-200 bg-[#f5f5f5] text-neutral-600">
                  …
                </span>
              )}
            </React.Fragment>
          ))}
          
          {/* Next page button */}
          {currentPage < totalPages && (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-4 py-2 border border-neutral-200 bg-[#f5f5f5] text-neutral-400 hover:bg-neutral-50 transition-colors"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}