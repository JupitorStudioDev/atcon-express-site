import React, { useState } from 'react';
import SiteLayout from '@/layouts/SiteLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Clock } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project_type: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real Laravel app, this would submit to /leads endpoint
    console.log('Lead submitted:', formData);
    alert('Thank you! We\'ll contact you shortly.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SiteLayout>
      <SEO 
        title="Contact Atcon Decorating - Free Painting Quotes Vancouver"
        description="Get a free painting quote from Vancouver's trusted contractors. 30+ years experience, A+ BBB rating. Serving Vancouver, North Vancouver & Lower Mainland."
        keywords="contact Atcon Decorating, free painting quote Vancouver, painting contractors North Vancouver, painting estimate BC"
        canonical="https://atcon-decorating.lovable.app/contact"
        schema={{
          "@type": ["LocalBusiness", "ContactPage"],
          "telephone": "+1-604-720-4315",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-604-720-4315",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Atcon Decorating for a Free Quote
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your space? Get in touch with Vancouver's premier painting contractors today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're here to help with all your painting needs. Contact us today for a free, no-obligation estimate.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      813 Old Lillooet Rd<br />
                      North Vancouver, BC V7J 2H6
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+16047204315" className="text-muted-foreground hover:text-accent-warm transition-colors">
                      (604) 720-4315
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted/30 border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-large">
                <GoogleMap 
                  address="813 Old Lillooet Rd, North Vancouver, BC V7J 2H6"
                  className="w-full h-64"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Request Your Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project_type">Project Type</Label>
                    <Select onValueChange={(value) => handleInputChange('project_type', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Residential Interior">Residential Interior</SelectItem>
                        <SelectItem value="Residential Exterior">Residential Exterior</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                        <SelectItem value="Cabinet Painting">Cabinet Painting</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Brief Project Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your painting project..."
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-medium">Free estimates</span> • No obligations • 
                    <span className="font-medium"> Quick response</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Serving the Greater Vancouver Area</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From North Vancouver to Langley, we bring our expertise to homes and businesses throughout the Lower Mainland.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              'North Vancouver', 'Vancouver', 'Burnaby', 'Langley',
              'Richmond', 'Surrey', 'Coquitlam', 'West Vancouver'
            ].map((city) => (
              <span key={city} className="bg-muted px-4 py-2 rounded-full font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;