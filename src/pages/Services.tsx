import React from 'react';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Painting Services in Vancouver
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From residential homes to commercial buildings, we deliver exceptional painting services across the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556037757-8a0698ab1dcc?q=80&w=1600&auto=format&fit=crop"
                  alt="Professional residential painting services in Vancouver"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Residential Painting</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your home with our expert interior and exterior painting services. We use premium materials and meticulous techniques to ensure lasting beauty.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-green rounded-full mr-3"></span>
                    Interior & exterior painting
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-green rounded-full mr-3"></span>
                    Color consultation
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-green rounded-full mr-3"></span>
                    Surface preparation & repair
                  </div>
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Commercial painting services for businesses in Metro Vancouver"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Commercial Painting</h3>
                <p className="text-muted-foreground mb-6">
                  Professional painting solutions for offices, retail spaces, and industrial buildings. Minimal disruption, maximum impact for your business.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Office & retail painting
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Industrial coatings
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Scheduled maintenance
                  </div>
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Cabinet Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-6c25c2f1c6c1?q=80&w=1600&auto=format&fit=crop"
                  alt="Expert cabinet painting and refinishing services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Cabinet Painting</h3>
                <p className="text-muted-foreground mb-6">
                  Refresh your kitchen with our specialized cabinet painting and refinishing services. Get the look of new cabinets at a fraction of the cost.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Kitchen cabinet refinishing
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Custom color matching
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Hardware upgrades
                  </div>
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Atcon */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Atcon Decorating?</h2>
            <p className="text-xl text-muted-foreground">
              Over 30 years of experience delivering exceptional results across the Lower Mainland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">30+</span>
              </div>
              <h3 className="font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground text-sm">Serving Vancouver since 1992</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A+</span>
              </div>
              <h3 className="font-semibold mb-2">BBB Rating</h3>
              <p className="text-muted-foreground text-sm">Trusted since 2003</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground text-sm">Full liability coverage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">★</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground text-sm">Satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for your painting project. We'll help you choose the perfect colors and finish for your space.
          </p>
          <Button variant="cta" size="xl">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Services;