import React from 'react';
import { Button } from '@/components/ui/button';

interface SiteLayoutProps {
  children: React.ReactNode;
  showSuccessMessage?: boolean;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, showSuccessMessage = false }) => {
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
              <Button variant="cta-warm" size="sm">
                Get a Free Quote
              </Button>
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
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

            {/* CTA Button */}
            <Button variant="cta" size="default" className="hidden lg:inline-flex">
              Get a Free Quote
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-5 h-0.5 bg-foreground"></span>
                <span className="w-5 h-0.5 bg-foreground"></span>
                <span className="w-5 h-0.5 bg-foreground"></span>
              </div>
            </button>
          </div>
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
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
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