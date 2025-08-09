import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Palette, Zap } from 'lucide-react';

const Residential: React.FC = () => {
  return (
    <SiteLayout>
      <SEO 
        title="Residential Painting Services Vancouver - Home Painters | Atcon"
        description="Professional interior & exterior residential painting in Vancouver. House painters with 30+ years experience. Licensed, insured, A+ BBB rated. Free estimates."
        keywords="residential painting Vancouver, house painters BC, interior painting, exterior painting, home painting contractors Vancouver, house painting cost"
        canonical="https://www.atcondecor.com/services/residential"
        schema={{
          "@type": ["Service"],
          "name": "Residential Painting Services",
          "description": "Professional residential interior and exterior painting services",
          "serviceType": "Residential Painting",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Atcon Decorating Limited"
          }
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vancouver's Premier Residential Painting Specialists
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your home with our expert interior and exterior painting services. Over 30 years of experience creating beautiful living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Residential Painting</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your home is your most important investment. Our residential painting services enhance both its beauty and value, using premium materials and time-tested techniques.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From color consultation to final cleanup, we handle every detail with the care and professionalism your home deserves.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-green rounded-full mr-4"></span>
                  <span className="font-medium">Interior & exterior painting</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-green rounded-full mr-4"></span>
                  <span className="font-medium">Color consultation & design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-green rounded-full mr-4"></span>
                  <span className="font-medium">Surface preparation & repair</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-green rounded-full mr-4"></span>
                  <span className="font-medium">Premium paint & materials</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/08f2ec7c-7b90-4ddb-a0cf-e9ac3af8d0ee.png"
                alt="Beautiful luxury residential home with pool showcasing professional exterior painting services in Vancouver"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/b6a92a5c-9ee9-4d9d-9f58-7870b3883e31.png"
                alt="Modern bedroom interior with panoramic windows and elegant house exterior showcasing comprehensive residential painting services"
                className="w-full rounded-lg shadow-large"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Interior & Exterior Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether refreshing a single room or painting your entire home, we bring the same level of craftsmanship to every project.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team understands the unique challenges of Vancouver's climate and selects paints and techniques specifically suited to our local conditions.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Specialized Location Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide tailored residential painting services throughout the Lower Mainland, with specialized expertise for different communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exterior Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/734e0650-82d1-4bdb-a46b-8a62ee5224fc.png"
                  alt="Beautiful beige and white house exterior with pool showcasing professional residential painting services in Vancouver"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Exterior Painting</h3>
                <p className="text-muted-foreground mb-6">
                  Protect and beautify your home's exterior with weather-resistant paints designed for our coastal climate.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Weather-resistant coating systems
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Moisture and mold prevention
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mr-3"></span>
                    Heritage home expertise
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interior Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/45560c96-35bd-4b63-a2a3-68f44344d481.png"
                  alt="Elegant living room interior with fireplace showcasing professional interior painting services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Interior Painting</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your living spaces with expert interior painting, from single rooms to whole-home makeovers.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Low-VOC and eco-friendly paints
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Custom color consultation
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mr-3"></span>
                    Minimal disruption service
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Homeowners Choose Atcon</h2>
            <p className="text-xl text-muted-foreground">
              Three decades of experience transforming homes across the Lower Mainland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-trust-green" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind our work with comprehensive warranties and satisfaction guarantees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-trust-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Color Expertise</h3>
              <p className="text-muted-foreground">
                Professional color consultation to help you choose the perfect palette for your home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent-warm" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Efficient Service</h3>
              <p className="text-muted-foreground">
                Streamlined processes and professional crews ensure timely project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Home Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to enhance your home's beauty and value? Contact us for a free consultation and discover why we're Vancouver's trusted residential painting specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline-dark" size="xl">
                View Our Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Residential;