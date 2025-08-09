import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { Button } from '@/components/ui/button';
import { Home, Building2, Palette } from 'lucide-react';

const Gallery: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/241c467e-6c7b-49fb-8dae-5dea3a423373.png",
      title: "Contemporary Space with Exposed Beams",
      description: "Modern living space with exposed structural beam staining and coordinated white ceiling finish work"
    },
    {
      id: 2,
      image: "/lovable-uploads/5b04c838-1a5b-439d-8d32-3871c6530349.png",
      title: "Modern Bedroom with Panoramic Views",
      description: "Contemporary wall finishes with panoramic window trim work and coffered ceiling details"
    },
    {
      id: 3,
      image: "/lovable-uploads/6e13568a-1d8e-4447-8afa-5eed2b29c8df.png",
      title: "Curved Staircase & Baluster Finishing",
      description: "Elegant curved staircase with custom white baluster work and detailed trim under skylight"
    },
    {
      id: 4,
      image: "/lovable-uploads/e68df65e-026d-4343-83d6-e2819b59f0bd.png",
      title: "Children's Room with Custom Accents",
      description: "Custom orange accent wall with decorative border trim and coordinated navy blue window seat"
    },
    {
      id: 5,
      image: "/lovable-uploads/3f14c301-6d9d-42e6-9cd2-45b68c82a0d5.png",
      title: "Formal Living Room Restoration",
      description: "Traditional blue-grey walls with intricate white crown molding and fireplace surround refinishing"
    },
    {
      id: 6,
      image: "/lovable-uploads/41c04dc9-2bdf-40d7-ac3a-ae3665e9fc63.png",
      title: "Luxury Home Exterior Transformation",
      description: "Complete exterior makeover with premium beige stucco finish and white trim detailing around pool area"
    },
    {
      id: 7,
      image: "/lovable-uploads/3aab5b56-8613-4f9b-b5f6-ab17ea770df8.png",
      title: "Living Room with Fireplace Feature",
      description: "Warm beige interior walls with custom fireplace mantel staining and hardwood floor coordination"
    },
    {
      id: 8,
      image: "/lovable-uploads/2f3f5893-c27e-499e-9efd-bcbd4aeefddc.png",
      title: "Contemporary Open Concept Design",
      description: "Modern grey and white color scheme with exposed beam staining and stone fireplace coordination"
    },
    {
      id: 9,
      image: "/lovable-uploads/1047fd62-332c-4731-af00-b9a8b51fc870.png",
      title: "Estate Home Exterior Renovation",
      description: "Large luxury home exterior with coordinated earth-tone palette and white window trim detailing"
    },
    {
      id: 10,
      image: "/lovable-uploads/eb300f3f-4267-47a9-99bd-6fe04b17711e.png",
      title: "Grand Foyer with Curved Staircase",
      description: "Elegant curved staircase with rich wood stain finish and coordinated white column and trim work"
    },
    {
      id: 11,
      image: "/lovable-uploads/277c64a6-eade-4e3c-80f3-45c3eb53eef7.png",
      title: "Heritage Kitchen Cabinet Refinishing",
      description: "Professional cabinet refinishing with classic white paint finish, featuring brick island accent and exposed beam ceiling work"
    },
    {
      id: 12,
      image: "/lovable-uploads/d82d4900-7740-426b-afaf-4070602ea763.png",
      title: "Custom Home Bar & Entertainment Center",
      description: "Professional entertainment center cabinet finishing with natural wood stain and built-in storage solutions"
    },
    {
      id: 13,
      image: "/lovable-uploads/a93d5aa7-9fc9-4ec1-9430-a52e01ab6620.png",
      title: "Ornate Ceiling & Archway Details",
      description: "Detailed architectural work featuring yellow coffered ceiling with white trim and decorative archways"
    },
    {
      id: 14,
      image: "/lovable-uploads/fb9517cd-6f30-4c0b-abc2-ead5682880fa.png",
      title: "Game Room with Coffered Ceiling",
      description: "Recreation room with white coffered ceiling and coordinated wall finish for entertainment space"
    },
    {
      id: 15,
      image: "/lovable-uploads/77ca8e0a-4cea-4338-bd00-70562d8175a3.png",
      title: "Formal Entry with Mahogany Millwork",
      description: "Rich mahogany millwork staining with detailed column work and coordinated floor-to-ceiling wood finishing"
    },
    {
      id: 16,
      image: "/lovable-uploads/fc84d3eb-3bbc-45a7-bf12-e532c00e2903.png",
      title: "Executive Hallway with Rich Navy Walls",
      description: "Sophisticated dark navy walls with pristine white baseboards and crown molding, featuring polished concrete floors"
    },
    {
      id: 17,
      image: "/lovable-uploads/e70231c5-5905-4e10-b312-28c8c2c09b8c.png",
      title: "Retail Space with Accent Wall",
      description: "Warm beige accent wall with deep navy built-in shelving and industrial ceiling coordination"
    },
    {
      id: 18,
      image: "/lovable-uploads/08df8968-6e2f-42c3-ab45-7b8f96da23bb.png",
      title: "Contemporary Kitchen with Two-Tone Finish",
      description: "Crisp white upper walls with gray lower island and white subway tile backsplash coordination"
    },
    {
      id: 19,
      image: "/lovable-uploads/8dd8b3d4-57b1-4895-9b5c-34c2a7bb5268.png",
      title: "Traditional Living Room with Wainscoting",
      description: "Elegant taupe walls with detailed white wainscoting panels and coffered ceiling with rich wood beams"
    },
    {
      id: 20,
      image: "/lovable-uploads/6e040a21-99a9-4283-a280-8110deef2f68.png",
      title: "Corporate Office with Warm Tones",
      description: "Professional warm beige walls with white trim and coordinated flooring for modern office environment"
    },
    {
      id: 21,
      image: "/lovable-uploads/00f7b82f-ba77-478e-9cfc-ac61baad5e96.png",
      title: "Modern Office with Industrial Details",
      description: "Neutral grey walls with white trim work, exposed ceiling piping and ductwork coordination in industrial finish"
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