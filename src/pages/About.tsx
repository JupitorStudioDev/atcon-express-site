import React from 'react';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Over 30 Years of Painting Excellence in North Vancouver
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 1992, Atcon Decorating has been the trusted choice for premium painting services across Vancouver and the Lower Mainland.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1992, Atcon Decorating Limited began with a simple mission: to provide the highest quality painting services with unmatched attention to detail. What started as a small local business has grown into one of the Lower Mainland's most trusted painting contractors.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founder's commitment to excellence established the "Atcon Standard" – a meticulous approach to every project that ensures lasting results and complete customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to serve homeowners and businesses throughout Vancouver, North Vancouver, Burnaby, Langley, and surrounding areas with the same dedication to quality that built our reputation.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9e291e33-dcd0-41d3-966e-68516806bf4e.png"
                alt="Beautiful modern living room showcasing professional interior painting with dramatic blue accent wall and natural lighting"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              We believe that exceptional painting is about more than just applying paint – it's about transforming spaces and exceeding expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We use only premium materials and proven techniques to ensure every project stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  On-time completion, clear communication, and consistent results you can count on.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Service</h3>
                <p className="text-muted-foreground">
                  Exceptional customer service from initial consultation through project completion and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Serving the Lower Mainland</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're proud to serve homeowners and businesses throughout Metro Vancouver and surrounding communities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'North Vancouver', 'Vancouver', 'Burnaby', 'Langley',
                'Richmond', 'Surrey', 'Coquitlam', 'West Vancouver'
              ].map((city) => (
                <div key={city} className="bg-background rounded-lg p-4 shadow-soft">
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">Our Credentials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">A+</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Better Business Bureau</h3>
                <p className="text-muted-foreground">A+ Rating since 2003</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">WorkSafeBC</h3>
                <p className="text-muted-foreground">Full WCB Coverage</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Full Liability Insurance</p>
              </div>
            </div>

            <div className="mt-12">
              <Button variant="cta" size="lg">
                Get Your Free Estimate Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;