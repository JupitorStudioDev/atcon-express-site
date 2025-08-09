import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Home, Building2, Palette } from 'lucide-react';

const Gallery: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/f790be10-5fb0-4de8-adf4-dedf94f1c9b6.png",
      title: "Modern Exterior Transformation",
      description: "Complete exterior makeover with premium weather-resistant paint in North Vancouver"
    },
    {
      id: 2,
      image: "/lovable-uploads/6d0b7a1d-be14-4d72-9a06-2fdeb2b5eda4.png",
      title: "Elegant Living Room Refresh",
      description: "Sophisticated interior painting with custom color consultation in Burnaby"
    },
    {
      id: 3,
      image: "/lovable-uploads/91183b86-b56c-438e-a863-a2b24d318150.png",
      title: "Kitchen Cabinet Refinishing",
      description: "Complete cabinet transformation with durable finish in Langley"
    },
    {
      id: 4,
      image: "/lovable-uploads/54fe58c0-ebed-4e15-9c47-75a5ff1e3e20.png",
      title: "Contemporary Office Space",
      description: "Professional commercial painting for modern workspace in Vancouver"
    },
    {
      id: 5,
      image: "/lovable-uploads/98f17076-bf3b-48a3-9b62-c42aa329f5da.png",
      title: "Retail Store Enhancement",
      description: "Commercial painting project for high-traffic retail environment"
    },
    {
      id: 6,
      image: "/lovable-uploads/2bb654cf-9ade-49f7-a1c5-be22562a9e9f.png",
      title: "Luxury Kitchen Upgrade",
      description: "Premium cabinet painting with custom hardware integration"
    },
    {
      id: 7,
      image: "/lovable-uploads/950aec6e-1e45-4168-9204-45ae250db699.png",
      title: "Heritage Home Restoration",
      description: "Careful restoration of character home exterior in West Vancouver"
    },
    {
      id: 8,
      image: "/lovable-uploads/e4e1e7a3-88f8-4e9a-8ad8-eb46fed5fc11.png",
      title: "Multi-Story Residential",
      description: "Large-scale residential painting project with coordinated color scheme"
    },
    {
      id: 9,
      image: "/lovable-uploads/c31d122c-eab4-4a9e-8082-5abf66b96784.png",
      title: "Master Bedroom Suite",
      description: "Serene bedroom transformation with premium paint finishes"
    },
    {
      id: 10,
      image: "/lovable-uploads/341f1932-6c4a-40e1-a444-4ebe375a00c6.png",
      title: "Gourmet Kitchen Makeover",
      description: "Modern kitchen refresh with bold cabinetry and refined finishes"
    },
    {
      id: 11,
      image: "/lovable-uploads/27e1e541-0c6b-457b-b974-b80c9e47fd6e.png",
      title: "Corporate Headquarters",
      description: "Multi-floor corporate office finished with precision, delivering a clean, modern, and professional workspace."
    },
    {
      id: 12,
      image: "/lovable-uploads/49f47bc8-a1a4-4c22-868f-dd6b3b88405b.png",
      title: "Staircase & Railing Refinishing",
      description: "Detailed painting and staining for architectural focal points"
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
              <div className="w-16 h-16 bg-muted/30 border border-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential</h3>
              <p className="text-muted-foreground">
                Interior and exterior painting for homes of all sizes, from condos to luxury estates.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-muted/30 border border-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commercial</h3>
              <p className="text-muted-foreground">
                Professional painting services for offices, retail spaces, and industrial buildings.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-muted/30 border border-border rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-foreground" />
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