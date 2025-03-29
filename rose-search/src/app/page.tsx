/**
 * Home Page Component
 * 
 * This is the main landing page for ROSE search engine featuring a centered layout
 * with the ROSE logo and search bar.
 */
import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Subtle rose-colored top border accent */}
      <div className="h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
      
      {/* Main content area with centered search */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Enhanced logo with refined styling */}
          <Logo size="large" className="mb-8" />
          
          {/* Enhanced search bar with subtle shadows and animations */}
          <SearchBar />
          
          {/* Footer links */}
          <div className="mt-8 flex gap-6 text-sm text-neutral-500">
            <Link href="/about" className="hover:text-rose-400 transition-colors">
              About ROSE
            </Link>
            <Link href="/privacy" className="hover:text-rose-400 transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}