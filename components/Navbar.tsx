import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { items, toggleDrawer } = useCart();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => `text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-primary after:transition-all ${isActive(path) ? 'text-primary after:w-full' : 'text-text-main/80 hover:text-primary after:w-0 hover:after:w-full'}`;

  return (
    <header className="w-full px-6 py-5 lg:px-12 flex items-center justify-between relative z-50 bg-background-light/80 backdrop-blur-md sticky top-0 transition-all duration-300 border-b border-primary/10">
      <div className="flex items-center gap-2">
        <Link to="/" className="group flex items-center gap-2">
          <div className="relative size-8 flex items-center justify-center">
            <svg className="absolute text-primary w-full h-full transform transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" opacity="0.2"></path>
              <path d="M50 20 Q65 20 75 35 T80 65 Q70 85 50 85 Q30 85 20 65 T25 35 Q35 20 50 20 Z"></path>
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-main">TerraMuse</h2>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        <Link to="/new-arrivals" className={navLinkClass('/new-arrivals')}>New Arrivals</Link>
        <Link to="/apparel" className={navLinkClass('/apparel')}>Apparel</Link>
        <Link to="/accessories" className={navLinkClass('/accessories')}>Accessories</Link>
        <Link to="/journal" className={navLinkClass('/journal')}>Journal</Link>
      </nav>

      {/* Utilities */}
      <div className="flex items-center gap-3 lg:gap-5">
        <button aria-label="Search" className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors text-text-main">
          <span className="material-symbols-outlined text-[22px]">search</span>
        </button>
        <button 
            onClick={toggleDrawer}
            aria-label="Shopping Bag" 
            className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors text-text-main relative"
        >
          <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
          {cartCount > 0 && <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full animate-bounce"></span>}
        </button>
        <button aria-label="Account" className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors text-text-main">
          <span className="material-symbols-outlined text-[22px]">person</span>
        </button>
        <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu" 
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors text-text-main"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background-light border-t border-primary/10 p-6 flex flex-col gap-4 shadow-xl md:hidden animate-fadeIn">
              <Link to="/new-arrivals" className="text-lg font-serif text-text-main" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
              <Link to="/apparel" className="text-lg font-serif text-text-main" onClick={() => setMobileMenuOpen(false)}>Apparel</Link>
              <Link to="/accessories" className="text-lg font-serif text-text-main" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
              <Link to="/journal" className="text-lg font-serif text-text-main" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
          </div>
      )}
    </header>
  );
};
