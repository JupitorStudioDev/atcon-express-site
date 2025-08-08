import React from 'react';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Commercial: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Expert Commercial Painting Services for Metro Vancouver Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional painting solutions that enhance your business image while minimizing operational disruption. Trusted by businesses for over 30 years.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Focus */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for Business</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Commercial spaces require specialized expertise, durable materials, and efficient project management. Our commercial painting services are designed to meet the unique demands of business environments.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that time is money. Our experienced teams work efficiently to minimize disruption while delivering superior results that enhance your professional image.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mr-4"></span>
                  <span className="font-medium">Flexible scheduling around business hours</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mr-4"></span>
                  <span className="font-medium">High-durability commercial-grade paints</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mr-4"></span>
                  <span className="font-medium">Project management & coordination</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mr-4"></span>
                  <span className="font-medium">Safety protocols & insurance coverage</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Professional commercial building painting project"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commercial painting expertise spans multiple business sectors, each with unique requirements and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Office Buildings</h3>
                <p className="text-muted-foreground text-sm">
                  Corporate offices, co-working spaces, and professional service buildings
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🛍️</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Retail Spaces</h3>
                <p className="text-muted-foreground text-sm">
                  Stores, showrooms, and customer-facing commercial environments
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🏭</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Industrial</h3>
                <p className="text-muted-foreground text-sm">
                  Warehouses, manufacturing facilities, and industrial complexes
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Hospitality</h3>
                <p className="text-muted-foreground text-sm">
                  Restaurants, hotels, and entertainment venues
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Healthcare</h3>
                <p className="text-muted-foreground text-sm">
                  Medical offices, clinics, and healthcare facilities
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-large transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Educational</h3>
                <p className="text-muted-foreground text-sm">
                  Schools, training centers, and educational institutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern office interior with professional painting"
                className="w-full rounded-lg shadow-large"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Specialized Commercial Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Beyond standard painting, we offer specialized commercial services including protective coatings, decorative finishes, and maintenance programs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Protective Coatings</span>
                    <span className="text-muted-foreground text-sm">Anti-graffiti, chemical-resistant, and weatherproofing solutions</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Maintenance Programs</span>
                    <span className="text-muted-foreground text-sm">Scheduled touch-ups and repainting to maintain professional appearance</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-trust-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium block">Emergency Services</span>
                    <span className="text-muted-foreground text-sm">Rapid response for urgent painting needs and damage repair</span>
                  </div>
                </div>
              </div>
              <Button variant="cta" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Commercial Painting Benefits</h2>
            <p className="text-xl text-muted-foreground">
              Professional painting is an investment in your business's image and property value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Property Value</h3>
              <p className="text-muted-foreground text-sm">Increases commercial property value and marketability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">👥</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Image</h3>
              <p className="text-muted-foreground text-sm">Enhances business credibility and customer perception</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Asset Protection</h3>
              <p className="text-muted-foreground text-sm">Protects building surfaces from weather and wear</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2">Productivity</h3>
              <p className="text-muted-foreground text-sm">Creates a pleasant, motivating work environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Business Image</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to make a professional impression? Contact us for a consultation and discover how our commercial painting services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Get a Quote
            </Button>
            <Button variant="outline-dark" size="xl">
              View Our Process
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Commercial;