import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface SiteLayoutProps {
  children: React.ReactNode;
  showSuccessMessage?: boolean;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, showSuccessMessage = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Trust Bar - Desktop Only */}
      <div className="hidden lg:block bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 text-sm font-medium text-muted-foreground">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                30+ Years' Experience
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-blue rounded-full mr-2"></span>
                A+ BBB Since 2003
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+16047204315" className="text-sm font-semibold text-foreground hover:text-accent-warm transition-colors">
                (604) 720-4315
              </a>
              <Link to="/contact">
                <Button variant="cta" size="sm">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message Bar */}
      {showSuccessMessage && (
        <div className="bg-success text-success-foreground">
          <div className="container mx-auto px-4 py-3 text-center font-medium">
            Thank you! We'll contact you shortly.
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/maple-leaf-logo.svg" alt="Atcon Decorating Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-foreground">Atcon Decorating</span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                About
              </a>
              <a href="/services" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                Our Services
              </a>
              <a href="/process" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                Our Process
              </a>
              <a href="/gallery" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                Project Gallery
              </a>
              <a href="/contact" className="text-sm font-medium text-foreground hover:text-accent-warm transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <img src="/maple-leaf-logo.svg" alt="Atcon Decorating Logo" className="w-8 h-8 object-contain" />
              <span className="text-lg font-bold text-foreground">Atcon Decorating</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-muted rounded-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="p-4">
            <div className="flex flex-col space-y-1">
              <a 
                href="/" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/services" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Services
              </a>
              <a 
                href="/process" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Process
              </a>
              <a 
                href="/gallery" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Project Gallery
              </a>
              <a 
                href="/contact" 
                className="text-sm font-medium text-foreground hover:text-accent-warm hover:bg-muted transition-colors py-3 px-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <a href="tel:+16047204315" className="text-sm font-semibold text-foreground hover:text-accent-warm transition-colors block mb-4">
                📞 (604) 720-4315
              </a>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="cta" size="sm" className="w-full">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/maple-leaf-logo.svg" alt="Atcon Decorating Logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-lg font-bold text-foreground">Atcon Decorating Limited</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>813 Old Lillooet Rd</p>
                <p>North Vancouver, BC V7J 2H6</p>
                <p className="font-medium text-foreground">(604) 720-4315</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <div className="space-y-2 text-sm">
                <a href="/" className="block text-muted-foreground hover:text-accent-warm transition-colors">Home</a>
                <a href="/about" className="block text-muted-foreground hover:text-accent-warm transition-colors">About</a>
                <a href="/services" className="block text-muted-foreground hover:text-accent-warm transition-colors">Our Services</a>
                <a href="/process" className="block text-muted-foreground hover:text-accent-warm transition-colors">Our Process</a>
                <a href="/gallery" className="block text-muted-foreground hover:text-accent-warm transition-colors">Project Gallery</a>
                <a href="/contact" className="block text-muted-foreground hover:text-accent-warm transition-colors">Contact</a>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Credentials</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-trust-blue rounded-full mr-2"></span>
                  A+ BBB since 2003
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                  WCB Coverage
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                  Liability Insurance
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Atcon Decorating Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;