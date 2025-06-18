import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Daily Digest', href: '/digest' },
      { label: 'Chat with ChickBot', href: '/chat' },
      { label: 'Polls & Voting', href: '/polls' },
      { label: 'Meme Gallery', href: '/memes' },
    ],
    community: [
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Submit a Meme', href: '/memes/submit' },
      { label: 'Suggest a Poll', href: '/polls/suggest' },
      { label: 'Chicken Reviews', href: '/reviews' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/chickatarian', icon: '🐦' },
    { label: 'Instagram', href: 'https://instagram.com/chickatarian', icon: '📸' },
    { label: 'TikTok', href: 'https://tiktok.com/@chickatarian', icon: '🎵' },
    { label: 'Reddit', href: 'https://reddit.com/r/chickatarian', icon: '🤖' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 chicken-gradient rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                <span className="text-white text-xl font-bold">🐔</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Chickatarian</h3>
                <p className="text-sm text-neutral-400">Your Daily Chicken Hub</p>
              </div>
            </Link>
            
            <p className="text-sm text-neutral-400 mb-6 max-w-sm">
              Everything chicken, every day. From prices to polls, memes to meals - we're your one-stop destination for all things poultry.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-200 group"
                  title={social.label}
                >
                  <span className="text-lg group-hover:animate-bounce-gentle">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-neutral-800 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2">Daily Cluck Newsletter</h5>
              <p className="text-sm text-neutral-400 mb-3">
                Get chicken news, prices & memes delivered daily.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white chicken-gradient rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                Subscribe Now
                <span className="ml-2 group-hover:animate-wiggle">📧</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-neutral-400">
              © {currentYear} Chickatarian. All rights reserved. Made with 🧡 for chicken lovers.
            </div>

            {/* Fun Stats */}
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <span className="flex items-center space-x-1">
                <span>🐔</span>
                <span>1,247 Chickens Celebrated Today</span>
              </span>
              <span className="hidden sm:block text-neutral-600">|</span>
              <span className="flex items-center space-x-1">
                <span>😂</span>
                <span>523 Memes Shared</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Easter Egg - Animated Chicken */}
      <div className="hidden lg:block absolute bottom-4 right-4">
        <div className="text-2xl animate-bounce cursor-pointer" title="Cluck cluck! 🐔">
          🐔
        </div>
      </div>
    </footer>
  );
};

export default Footer;