/**
 * Home Page Component
 * 
 * This is the main landing page for ROSE search engine featuring a centered layout
 * with the ROSE logo and search bar. The design follows minimalist principles
 * to focus user attention on the search functionality.
 */
import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    // Main container with full viewport height and centered content
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Content wrapper with maximum width constraint for larger screens */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        {/* ROSE logo displayed prominently above search */}
        <Logo />
        
        {/* Primary search interface component */}
        <SearchBar />
        
        {/* Footer navigation area with "About" link */}
        <div className="text-sm text-gray-500 mt-8">
          <Link href="/about" className="hover:underline">About ROSE</Link>
        </div>
      </div>
    </main>
  );
}