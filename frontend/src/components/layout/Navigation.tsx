'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: string;
  description?: string;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Daily Digest',
    href: '/digest',
    icon: '📰',
    description: 'Today\'s chicken news & prices',
  },
  {
    label: 'ChickBot',
    href: '/chat',
    icon: '🤖',
    description: 'AI chicken assistant',
  },
  {
    label: 'Polls',
    href: '/polls',
    icon: '🗳️',
    description: 'Vote on chicken debates',
    badge: 'Hot',
  },
  {
    label: 'Memes',
    href: '/memes',
    icon: '😂',
    description: 'Chicken meme gallery',
  },
  {
    label: 'Newsletter',
    href: '/newsletter',
    icon: '📧',
    description: 'The Daily Cluck',
  },
];

const Navigation: React.FC<NavigationProps> = ({ isMobile = false, onLinkClick }) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  if (isMobile) {
    return (
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={clsx(
                'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                isActive
                  ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-400'
                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
              )}
            >
              <span className="text-lg group-hover:animate-bounce-gentle">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-bold text-white spicy-gradient rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-neutral-500 mt-0.5">{item.description}</p>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    );
  }

  // Desktop Navigation
  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 group',
              isActive
                ? 'bg-primary-50 text-primary-700'
                : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
            )}
          >
            <span className="text-base group-hover:animate-bounce-gentle">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
            
            {item.badge && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold text-white spicy-gradient rounded-full animate-pulse">
                {item.badge}
              </span>
            )}
            
            {/* Hover tooltip */}
            {item.description && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {item.description}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-900"></div>
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;