import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';

const Gallery: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
      title: "Modern Exterior Transformation",
      description: "Complete exterior makeover with premium weather-resistant paint in North Vancouver"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
      title: "Elegant Living Room Refresh",
      description: "Sophisticated interior painting with custom color consultation in Burnaby"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1600&auto=format&fit=crop",
      title: "Kitchen Cabinet Refinishing",
      description: "Complete cabinet transformation with durable finish in Langley"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      title: "Contemporary Office Space",
      description: "Professional commercial painting for modern workspace in Vancouver"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      title: "Retail Store Enhancement",
      description: "Commercial painting project for high-traffic retail environment"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556909114-6c25c2f1c6c1?q=80&w=1600&auto=format&fit=crop",
      title: "Luxury Kitchen Upgrade",
      description: "Premium cabinet painting with custom hardware integration"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1556037757-8a0698ab1dcc?q=80&w=1600&auto=format&fit=crop",
      title: "Heritage Home Restoration",
      description: "Careful restoration of character home exterior in West Vancouver"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1200&auto=format&fit=crop",
      title: "Multi-Story Residential",
      description: "Large-scale residential painting project with coordinated color scheme"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
      title: "Master Bedroom Suite",
      description: "Serene bedroom transformation with premium paint finishes"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1600&auto=format&fit=crop",
      title: "Gourmet Kitchen Makeover",
      description: "High-end kitchen cabinet refinishing with durability guarantee"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      title: "Corporate Headquarters",
      description: "Professional painting services for multi-floor office building"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
      title: "Coastal Home Exterior",
      description: "Weather-resistant exterior painting designed for coastal conditions"
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              A Showcase of Our Finished Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our portfolio of completed projects across the Lower Mainland. Each project represents our commitment to excellence and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-background shadow-soft hover:shadow-large transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-warm transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Project Categories</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in a wide range of painting services to meet every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-trust-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential</h3>
              <p className="text-muted-foreground">
                Interior and exterior painting for homes of all sizes, from condos to luxury estates.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial</h3>
              <p className="text-muted-foreground">
                Professional painting services for offices, retail spaces, and industrial buildings.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialty</h3>
              <p className="text-muted-foreground">
                Cabinet refinishing, decorative finishes, and custom color consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Add Your Project to Our Gallery?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let us transform your space with the same level of craftsmanship and attention to detail you see in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/process">
              <Button variant="outline-dark" size="xl">
                View Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Gallery;