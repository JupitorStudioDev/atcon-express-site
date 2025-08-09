import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Atcon Decorating - Master Painters in Vancouver Since 1992",
  description = "Expert residential & commercial painting services in Vancouver and Lower Mainland. 30+ years experience, A+ BBB rating, licensed & insured. Free quotes.",
  keywords = "painting contractors Vancouver, residential painting, commercial painting, cabinet painting, North Vancouver painters, BBB A+ rated painters, licensed painters BC",
  canonical = "https://atcon-decorating.lovable.app/",
  ogImage = "https://atcon-decorating.lovable.app/maple-leaf-logo.svg",
  schema
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Atcon Decorating Limited",
    "image": "https://atcon-decorating.lovable.app/maple-leaf-logo.svg",
    "description": "Expert residential and commercial painting services in Vancouver and Lower Mainland since 1992.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "813 Old Lillooet Rd",
      "addressLocality": "North Vancouver",
      "addressRegion": "BC",
      "postalCode": "V7J 2H6",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.3263,
      "longitude": -123.0773
    },
    "telephone": "+1-604-720-4315",
    "url": "https://atcon-decorating.lovable.app",
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 49.3263,
        "longitude": -123.0773
      },
      "geoRadius": "50000"
    }
  };

  const finalSchema = schema ? { ...baseSchema, ...schema } : baseSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Atcon Decorating Limited" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Preload hero image for faster loading */}
      {canonical === "https://atcon-decorating.lovable.app/" && (
        <link rel="preload" as="image" href="/lovable-uploads/59f049d3-31d2-47b7-9e4e-086684a6471d.png" fetchPriority="high" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="Atcon Decorating" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;