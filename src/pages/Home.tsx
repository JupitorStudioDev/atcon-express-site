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
            src="/lovable-uploads/9c558693-8cca-465b-8b2b-b73f1e8b620b.png"
            alt="Professional house painting services in Vancouver"
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
                src="/lovable-uploads/f790be10-5fb0-4de8-adf4-dedf94f1c9b6.png"
                alt="Modern Exterior Transformation in North Vancouver"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6d0b7a1d-be14-4d72-9a06-2fdeb2b5eda4.png"
                alt="Elegant Living Room Refresh in Burnaby"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/91183b86-b56c-438e-a863-a2b24d318150.png"
                alt="Kitchen Cabinet Refinishing in Langley"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/950aec6e-1e45-4168-9204-45ae250db699.png"
                alt="Heritage Home Restoration in West Vancouver"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/27e1e541-0c6b-457b-b974-b80c9e47fd6e.png"
                alt="Corporate Headquarters painting project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/49f47bc8-a1a4-4c22-868f-dd6b3b88405b.png"
                alt="Staircase & Railing Refinishing project"
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