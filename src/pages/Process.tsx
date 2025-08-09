import React from 'react';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Process: React.FC = () => {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                The Atcon Standard: Our Meticulous Painting Process
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Every project follows our proven 6-step process, ensuring exceptional results that exceed your expectations.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/584c5ed9-5222-4b19-bde3-02f8e87d5f54.png"
                alt="Professional contractor and client celebrating successful completion of painting project in beautifully finished room"
                className="w-full rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">Initial Consultation</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We begin with a comprehensive consultation to understand your vision, assess your space, and discuss your specific needs and preferences.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Detailed project assessment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Color consultation and selection
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Timeline and budget discussion
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/758f1a56-6dda-4841-beb7-95b1e347cce1.png"
                  alt="Professional consultation with painting contractor showing color samples and design options"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/503739e7-c856-4e81-ad34-48f0b28f11a6.png"
                  alt="Professional consultation meeting with detailed estimate documents and laptop"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Detailed Estimate</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We provide a comprehensive, written estimate that breaks down all costs and timelines, ensuring complete transparency.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Itemized cost breakdown
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Material specifications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clear project timeline
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-trust-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Surface Preparation</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Proper preparation is the foundation of a lasting paint job. We meticulously prepare all surfaces to ensure optimal paint adhesion.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Thorough cleaning and degreasing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Crack filling and surface repairs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sanding and priming as needed
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/93bf773e-721a-4766-beca-3bb0c03a55df.png"
                  alt="Professional painter preparing wall surface with proper tools and equipment"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/8adb6490-aca0-4821-b980-d288d8f92032.png"
                  alt="Professional painter applying paint with roller in protected room environment"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-2xl font-bold">Professional Application</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Our skilled painters apply premium paints using proven techniques, ensuring smooth, even coverage and lasting beauty.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Premium paint products only
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multiple coat application
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Precise edge work and detailing
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <h3 className="text-2xl font-bold">Quality Control</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We conduct thorough quality inspections throughout the project, ensuring every detail meets our exacting standards.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Daily progress inspections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Touch-up and detail work
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-warm rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Pre-completion review
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/b232f126-78f3-4784-9bef-acdb72f412d8.png"
                  alt="Professional quality control inspection with contractor and painter reviewing work progress"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/b5b6e4a0-458e-41cb-ae76-b7de9f7e2002.png"
                  alt="Professional final walkthrough with contractor and client reviewing completed painting project in finished room"
                  className="w-full rounded-lg shadow-large"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">6</span>
                  </div>
                  <h3 className="text-2xl font-bold">Final Walkthrough</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We complete every project with a comprehensive walkthrough, ensuring your complete satisfaction before we consider the job done.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Complete site cleanup
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Client satisfaction review
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-trust-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Warranty information provided
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Atcon Standard</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our proven process has delivered exceptional results for over 30 years. Let us transform your space with the same meticulous attention to detail.
          </p>
          <Button variant="cta" size="xl">
            Start Your Project Today
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Process;