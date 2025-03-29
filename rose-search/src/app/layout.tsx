/**
 * Root Layout Component
 * 
 * Provides the overall HTML structure and global elements that
 * is shared across all pages in the application.
 */
import './globals.css';
import { Inter } from 'next/font/google';

// Initialize the Inter font with specific subsets
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'ROSE - Relevance Only Search Engine',
  description: 'A minimalist search engine focused solely on relevance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-neutral-800 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}