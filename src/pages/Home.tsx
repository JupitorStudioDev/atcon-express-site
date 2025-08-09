import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-painting.jpg';

const Home: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/59f049d3-31d2-47b7-9e4e-086684a6471d.png"
            alt="Modern commercial interior showcasing professional painting services in Vancouver"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Painters in Vancouver & the Lower Mainland Since 1992
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">
              Transforming homes and businesses with premium painting services. 
              Your trusted partner for exceptional results that last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button variant="cta-warm" size="xl" className="text-lg">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-dark" size="xl" className="text-lg text-white/90 border-white/40">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                30+ Years Experience
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-trust-blue rounded-full mr-2"></span>
                A+ BBB Rating
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-trust-green rounded-full mr-2"></span>
                Licensed & Insured
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-accent-warm rounded-full mr-2"></span>
                Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Painting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From residential interiors to commercial exteriors, we deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/79e457e7-9675-4218-a33d-6ebfa073ec2a.png"
                  alt="Beautiful residential home with pool showcasing professional exterior painting services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Residential Painting</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your home with our expert interior and exterior painting services. Premium materials and meticulous attention to detail.
                </p>
                <Link to="/services/residential">
                  <Button variant="outline-dark" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/e995e663-3a41-4d24-9eb0-1b3b23102722.png"
                  alt="Commercial painting services for businesses in Metro Vancouver"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Commercial Painting</h3>
                <p className="text-muted-foreground mb-4">
                  Professional painting solutions for offices, retail spaces, and industrial buildings. Minimal disruption, maximum impact.
                </p>
                <Link to="/services/commercial">
                  <Button variant="outline-dark" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cabinet Painting */}
            <Card className="group hover:shadow-large transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/9e60cc9f-0363-4c1c-8aba-321ab79f9ec9.png"
                  alt="Beautiful white kitchen cabinets with custom details showcasing professional cabinet painting services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Cabinet Painting</h3>
                <p className="text-muted-foreground mb-4">
                  Refresh your kitchen with our specialized cabinet painting and refinishing services. Like new, at a fraction of the cost.
                </p>
                <Link to="/services/cabinet-painting">
                  <Button variant="outline-dark" size="sm">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Atcon Standard Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Atcon Standard</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our meticulous process ensures every project meets our exacting standards. From initial consultation to final walkthrough, we're committed to delivering results that exceed your expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over three decades of experience serving Vancouver and the Lower Mainland, we've refined our approach to deliver consistent, superior results on every project.
              </p>
              <Link to="/process">
                <Button variant="cta" size="lg">
                  See Our Process
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/584c5ed9-5222-4b19-bde3-02f8e87d5f54.png"
                alt="Professional contractor and client celebrating successful completion of painting project in beautifully finished room"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality and craftsmanship that sets us apart in every project we complete.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/277c64a6-eade-4e3c-80f3-45c3eb53eef7.png"
                alt="Heritage Kitchen Cabinet Refinishing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/3f14c301-6d9d-42e6-9cd2-45b68c82a0d5.png"
                alt="Formal Living Room Restoration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/41c04dc9-2bdf-40d7-ac3a-ae3665e9fc63.png"
                alt="Luxury Home Exterior Transformation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2f3f5893-c27e-499e-9efd-bcbd4aeefddc.png"
                alt="Contemporary Open Concept Design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/eb300f3f-4267-47a9-99bd-6fe04b17711e.png"
                alt="Grand Foyer with Curved Staircase"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/77ca8e0a-4cea-4338-bd00-70562d8175a3.png"
                alt="Formal Entry with Mahogany Millwork"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="cta" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by homeowners and businesses across the Lower Mainland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex text-accent-warm mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Exceptional work from start to finish. The team was professional, clean, and delivered exactly what they promised. Our home looks amazing!"
                </p>
                <div className="font-semibold">Sarah & Mike Johnson</div>
                <div className="text-sm text-muted-foreground">North Vancouver</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex text-accent-warm mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Atcon painted our office building and the results exceeded our expectations. Professional, efficient, and minimal disruption to our business."
                </p>
                <div className="font-semibold">David Chen</div>
                <div className="text-sm text-muted-foreground">Burnaby Business Owner</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex text-accent-warm mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Our kitchen cabinet transformation is incredible. Atcon's attention to detail and craftsmanship is unmatched. Highly recommended!"
                </p>
                <div className="font-semibold">Lisa Rodriguez</div>
                <div className="text-sm text-muted-foreground">Langley</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;