import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenQuote: () => void;
}

export const BrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; lightTheme?: boolean }> = ({
  size = 'md',
  lightTheme = false,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center gap-3">
      {/* High-craft luxury vector emblem for ASTRA NOURWEEY */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#0c0c0e] via-[#16161a] to-[#050506] p-1.5 flex items-center justify-center shadow-xl shadow-black/40 border border-[#E5C158]/40 relative group`}
        aria-hidden="true"
      >
        {/* Ambient subtle gold backlight glow */}
        <div className="absolute inset-0 rounded-xl bg-[#E5C158]/10 blur-sm pointer-events-none" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="goldGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF7C8" />
              <stop offset="40%" stopColor="#F5D061" />
              <stop offset="75%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6305" />
            </linearGradient>
            <linearGradient id="goldGradAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F5D061" />
              <stop offset="100%" stopColor="#B3860B" />
            </linearGradient>
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5E4304" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Faceted Crest Diamond Contour */}
          <path
            d="M24 3L41 12V30L24 45L7 30V12L24 3Z"
            stroke="url(#shieldRim)"
            strokeWidth="1.5"
            fill="#09090b"
          />

          {/* Forward Aerodynamic Highway Wings (Left & Right) */}
          <path
            d="M10 16L24 26L38 16"
            stroke="url(#goldGradPrimary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 22L24 31L35 22"
            stroke="url(#goldGradPrimary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />

          {/* Astra Northern Compass / Star (Vertical Axis) */}
          <path
            d="M24 6L26.5 19L24 23L21.5 19L24 6Z"
            fill="url(#goldGradPrimary)"
          />
          <path
            d="M24 41L26 31L24 28L22 31L24 41Z"
            fill="url(#goldGradPrimary)"
            fillOpacity="0.75"
          />

          {/* Star Horizontal Wings */}
          <path
            d="M14 20L21 21.5L24 22L21 22.5L14 20Z"
            fill="url(#goldGradAccent)"
          />
          <path
            d="M34 20L27 21.5L24 22L27 22.5L34 20Z"
            fill="url(#goldGradAccent)"
          />

          {/* Central North Star Spark */}
          <circle cx="24" cy="22" r="2.2" fill="#FFFFFF" />
          <circle cx="24" cy="22" r="1.2" fill="#D4AF37" />
        </svg>
      </div>

      {/* Brand Lockup: ASTRA NOURWEEY with TRANSPORTS in small letters */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-lg md:text-xl ${
              lightTheme ? 'text-neutral-950' : 'text-white'
            }`}
          >
            ASTRA
          </span>
          <span className="text-gold-gradient font-black tracking-tight text-lg md:text-xl">
            NOURWEEY
          </span>
        </div>
        {/* TRANSPORTS in small letters as requested */}
        <span
          className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.32em] mt-0.5 leading-tight ${
            lightTheme ? 'text-[#8A6305]' : 'text-[#E5C158]'
          }`}
        >
          TRANSPORTS
        </span>
      </div>
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'inici', label: 'Inici' },
    { id: 'serveis', label: 'Serveis de Carretera' },
    { id: 'tarifes', label: 'Tarifes Orientatives' },
    { id: 'quisom', label: 'Qui Som' },
    { id: 'contacte', label: 'Contacte i Cotització' },
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/92 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl shadow-black/80'
          : 'bg-neutral-950/40 backdrop-blur-sm border-b border-neutral-800/40 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Bespoke Brand Emblem & Name */}
          <button
            onClick={() => handleNavClick('inici')}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] rounded-xl transition-opacity hover:opacity-95 cursor-pointer"
            aria-label="Astra Nourweey Transports Inici"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Single-line §2 Top Bar Contract) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
            aria-label="Navegació principal"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#F5D061] font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#AA7C11] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-[0.98] rounded-lg shadow-md shadow-[#E5C158]/20 transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
            >
              <span>Demanar Cotització</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-black bg-[#E5C158] rounded-md"
            >
              Cotització
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
              aria-label={mobileMenuOpen ? 'Tancar menú' : 'Obrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-900 text-[#F5D061] font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                )}
              </button>
            ))}
            <div className="pt-3 border-t border-neutral-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-[#FFF4B8] via-[#E5C158] to-[#D4AF37] rounded-lg shadow-lg"
              >
                <span>Demanar Cotització</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
