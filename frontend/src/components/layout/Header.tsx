'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              {/* Chicken Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 chicken-gradient rounded-full flex items-center justify-center group-hover:animate-bounce-gentle transition-all duration-200">
                <span className="text-white text-lg md:text-xl font-bold">🐔</span>
              </div>
              {/* Floating sparkle effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-display font-bold">
                <span className="golden-text">Chickatarian</span>
              </h1>
              <p className="text-xs text-neutral-600 -mt-1">Your Daily Chicken Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Newsletter CTA - Desktop */}
            <Link
              href="/newsletter"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white chicken-gradient rounded-lg hover:shadow-md transition-all duration-200 group"
            >
              📧 Daily Cluck
              <span className="ml-1 group-hover:animate-wiggle">✨</span>
            </Link>

            {/* Chat Button */}
            <Link
              href="/chat"
              className={clsx(
                'flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200',
                pathname === '/chat'
                  ? 'bg-primary-400 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              )}
              title="Chat with ChickBot"
            >
              💬
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={clsx('w-5 h-5 transition-transform duration-200', isMobileMenuOpen && 'rotate-90')}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="pt-4 border-t border-neutral-200">
            <Navigation isMobile onLinkClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Mobile Newsletter CTA */}
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <Link
                href="/newsletter"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white chicken-gradient rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                📧 Subscribe to Daily Cluck
                <span className="ml-2 group-hover:animate-wiggle">✨</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar (Optional - shows current chicken price) */}
      <div className="hidden md:block bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-center py-2 text-sm text-neutral-600">
            <span className="flex items-center space-x-4">
              <span>🐔 Avg. Price Today: <strong className="text-primary-600">$3.49/lb</strong></span>
              <span className="text-neutral-400">|</span>
              <span>📈 <strong className="text-green-600">+2.3%</strong> vs yesterday</span>
              <span className="text-neutral-400">|</span>
              <span>🔥 Poll: <Link href="/polls" className="text-primary-600 hover:underline">Best Spicy Chicken?</Link></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;