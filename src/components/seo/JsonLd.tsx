import { SITE_CONFIG } from "@/lib/site-config";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.domain}/images/om-sai-aqua-logo.png`,
    telephone: [SITE_CONFIG.phonePrimaryRaw, SITE_CONFIG.phoneSecondaryRaw],
    url: SITE_CONFIG.domain,
    description:
      "Om Sai Aqua provides 20-litre drinking water can delivery, RO + UV alkaline water supply for homes, offices, and bulk events in Vishrantwadi, Dhanori Road, Pune.",
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.line1,
      addressLocality: SITE_CONFIG.address.area,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5714",
      longitude: "73.8797",
    },
    areaServed: SITE_CONFIG.primaryCoverage.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Pune`,
    })),
    priceRange: "₹₹",
    openingHours: "Mo-Su 07:00-21:00",
    sameAs: [SITE_CONFIG.domain],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drinking Water Supply Services",
      itemListElement: SITE_CONFIG.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
