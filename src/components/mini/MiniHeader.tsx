import { useState } from 'react';
import {
  Heart,
  MapPin,
  Menu,
  MessageSquare,
  ShoppingBag,
  User,
  X,
} from 'lucide-react';
import miniLogo from '../../assets/mini/logo.svg';

const navLinks = [
  { label: 'Models and Configurator', href: '#models' },
  { label: 'Purchasing a MINI', href: '#purchase' },
  { label: 'Service and Services', href: '#service' },
  { label: 'More about MINI', href: '#discover' },
  { label: 'MINI Business', href: '#business' },
  { label: 'Contact us', href: '#contact' },
];

export function MiniHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customerServiceOpen, setCustomerServiceOpen] = useState(false);

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-40 flex h-[72px] w-full items-center justify-between border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 sm:px-8 lg:px-12 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
      >
        {/* Left: Brand Logo + Primary Nav */}
        <div className="flex h-full items-center gap-6 lg:gap-10">
          <a
            href="#top"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
            aria-label="MINI Official Home"
          >
            <img
              src={miniLogo}
              alt="MINI Logo"
              className="h-[44px] w-auto max-w-[96px] object-contain"
            />
          </a>

          {/* Desktop Navigation: MINISansReg 15px (nav-link) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex h-full items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative flex h-full items-center px-3.5 mini-nav-link text-[#000000] transition-colors hover:text-[#666666] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Utility Icons & Mobile Menu Button */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Find a MINI Partner"
            title="Find a MINI Partner"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#000000] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
          >
            <MapPin className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="MyMINI Login"
            title="MyMINI Login"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#000000] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Basket"
            title="Basket"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#000000] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            title="Wishlist"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#000000] hover:bg-[#F7F7F7] transition-colors cursor-pointer"
          >
            <Heart className="h-5 w-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex xl:hidden h-11 w-11 items-center justify-center rounded-full text-[#000000] hover:bg-[#F7F7F7] cursor-pointer ml-1"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-50 flex flex-col bg-[#FFFFFF] p-6 xl:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#E5E7EB] pb-3 text-[17px] font-medium text-[#000000] hover:text-[#666666]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Floating Customer Service Tab on Right Edge */}
      <div className="fixed right-0 top-1/2 z-30 -translate-y-1/2">
        <button
          type="button"
          onClick={() => setCustomerServiceOpen((v) => !v)}
          aria-expanded={customerServiceOpen}
          aria-label="Open MINI Customer Service"
          className="flex items-center gap-2 rounded-l-full bg-[#000000] px-4 py-4 text-[#FFFFFF] shadow-xl hover:bg-neutral-800 transition-transform hover:-translate-x-1 cursor-pointer [writing-mode:vertical-rl] rotate-180"
        >
          <span className="mini-label-sm uppercase tracking-wider">
            MINI Customer Service
          </span>
          <MessageSquare className="h-4 w-4 rotate-90" />
        </button>

        {/* Support Slideout Surface */}
        {customerServiceOpen && (
          <div
            role="dialog"
            aria-label="Customer Support Contact"
            className="absolute right-0 top-full mt-2 w-80 rounded-[8px] border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <h3 className="mini-headline-sm font-bold text-[#000000]">MINI Assistance</h3>
              <button
                type="button"
                onClick={() => setCustomerServiceOpen(false)}
                aria-label="Close support dialog"
                className="rounded p-1 text-[#8E8E8E] hover:text-[#000000] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 space-y-3 mini-body-sm text-[#000000]">
              <p>Contact our dedicated advisors for offers, vehicle inventory, and test drives.</p>
              <div className="rounded-[4px] bg-[#F7F7F7] p-3 font-semibold text-[#000000] border border-[#E5E7EB]">
                📞 +48 22 278 12 00
              </div>
              <p className="mini-label-sm text-[#666666]">Mon - Fri: 8:00 - 18:00 CET</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
