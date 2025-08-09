import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CabinetPainting: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Cabinet Painting & Refinishing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your kitchen with our specialized cabinet painting services. Get the look of new cabinets at a fraction of the replacement cost.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Cabinet Transformation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cabinet painting is a specialized skill that requires precision, patience, and the right techniques. Our cabinet refinishing process delivers a smooth, durable finish that looks like new cabinetry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From traditional wood cabinets to modern laminate, we have the expertise to transform any kitchen cabinet into a beautiful focal point for your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-accent-warm rounded-full mr-4"></span>
                  <span className="font-medium">Complete cabinet refinishing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-accent-warm rounded-full mr-4"></span>
                  <span className="font-medium">Hardware upgrades & installation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-accent-warm rounded-full mr-4"></span>
                  <span className="font-medium">Custom color matching</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-accent-warm rounded-full mr-4"></span>
                  <span className="font-medium">Durable finish guarantee</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/60677831-5aa0-4022-8125-91e8a98f1309.png"
                alt="Beautiful kitchen cabinet refinishing with white upper and dark lower cabinets"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1600&auto=format&fit=crop"
                alt="Modern kitchen with professionally painted cabinets"
                className="w-full rounded-lg shadow-large"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Cabinet Painting?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cabinet replacement can cost $15,000-$40,000 or more. Professional cabinet painting delivers stunning results for a fraction of that cost.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Cost Effective</span>
                    <span className="text-muted-foreground text-sm">Save 60-80% compared to full cabinet replacement</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Quick Turnaround</span>
                    <span className="text-muted-foreground text-sm">Complete transformation in days, not weeks</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Eco-Friendly</span>
                    <span className="text-muted-foreground text-sm">Reduces waste by reusing existing cabinet boxes</span>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Cabinet Painting Process</h2>
            <p className="text-xl text-muted-foreground">
              A meticulous 8-step process ensures professional results that last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-3">Assessment & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Evaluate cabinet condition and plan the optimal refinishing approach
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-3">Removal & Setup</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully remove doors and hardware, set up proper workspace
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-3">Deep Cleaning</h3>
                <p className="text-muted-foreground text-sm">
                  Thorough degreasing and cleaning to ensure proper paint adhesion
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-3">Sanding & Prep</h3>
                <p className="text-muted-foreground text-sm">
                  Careful sanding and surface preparation for optimal finish
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="font-semibold mb-3">Priming</h3>
                <p className="text-muted-foreground text-sm">
                  High-quality primer application for superior paint adhesion
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="font-semibold mb-3">Paint Application</h3>
                <p className="text-muted-foreground text-sm">
                  Multiple coats of premium paint with proper curing between coats
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">7</span>
                </div>
                <h3 className="font-semibold mb-3">Hardware Install</h3>
                <p className="text-muted-foreground text-sm">
                  Install new or refreshed hardware with precision alignment
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">8</span>
                </div>
                <h3 className="font-semibold mb-3">Final Assembly</h3>
                <p className="text-muted-foreground text-sm">
                  Careful reinstallation and final quality inspection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Popular Cabinet Colors</h2>
            <p className="text-xl text-muted-foreground">
              From classic whites to bold contemporary colors, we help you choose the perfect finish.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-white border-2 border-border rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Classic White</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Off-White</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Light Gray</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-600 rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Charcoal</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Navy Blue</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-800 rounded-lg mx-auto mb-3 shadow-soft"></div>
              <span className="text-sm font-medium">Forest Green</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Not sure about color? Our experts provide free color consultation to help you choose the perfect shade.
            </p>
            <Link to="/contact">
              <Button variant="outline-dark" size="lg">
                Schedule Color Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Give your kitchen a stunning makeover with our professional cabinet painting services. Get the kitchen of your dreams without the cost of full replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline-dark" size="xl">
                View Cabinet Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CabinetPainting;