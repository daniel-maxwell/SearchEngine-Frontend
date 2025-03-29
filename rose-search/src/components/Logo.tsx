/**
 * Logo Component
 * 
 * Displays the ROSE brand logo.
 */
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Logo({ size = 'medium', className = '' }: LogoProps) {
  // Size classes dictionary
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-5xl',
    large: 'text-8xl',
  };
  
  return (
    <div className={`font-medium ${sizeClasses[size]} ${className}`}>
      {/* Gradient effect with letter spacing */}
      <div className="tracking-tighter font-[catull] text-center bg-gradient-to-r from-rose-400 via-rose-350 to-rose-300 bg-clip-text text-transparent animate-gradient-x">
        <span>ROSE</span>
      </div>
      
      {/* Tagline */}
      {size === 'large' && (
        <div className="text-sm text-neutral-400 text-center font-normal mt-1">
          Relevance-Only Search Engine
        </div>
      )}
    </div>
  );
}