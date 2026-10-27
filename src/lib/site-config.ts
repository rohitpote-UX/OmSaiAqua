export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  image: string;
  badge: string;
}

export const SITE_CONFIG = {
  name: "Om Sai Aqua",
  tagline: "Pure 20L Drinking Water Jar Supply & Delivery",
  owner: "Deepak Khatave",
  domain: "https://www.saiaqua.shop",
  logo: "/images/om-sai-aqua-logo.png",
  // Updated verified direct contact numbers per client instruction
  phonePrimary: "+91 8390612060",
  phonePrimaryRaw: "+918390612060",
  phoneSecondary: "+91 9689030301",
  phoneSecondaryRaw: "+919689030301",
  whatsappUrl: "https://wa.me/919689030301?text=Hello%20Om%20Sai%20Aqua,%20I%20would%20like%20to%20order%20drinking%20water%20jars.",
  address: {
    line1: "Anand Park, Dhanori Road",
    area: "Vishrantwadi",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411015",
    country: "India",
    full: "Anand Park, Dhanori Road, Vishrantwadi, Pune – 411015, Maharashtra",
  },
  operatingHours: "Monday to Sunday: 7:00 AM – 9:00 PM",
  primaryCoverage: [
    "Vishrantwadi Circle & Market",
    "Dhanori Road & Anand Park",
    "Mohanwadi & Pratik Nagar Vicinity",
    "Tingre Nagar (Adjacent Sectors)",
    "Kalas Road (Nearby Societies)",
    "Alandi Road (Bordering Pockets)",
  ],
  services: [
    {
      id: "home-delivery",
      title: "Home 20L Water Jar Delivery",
      tagline: "Doorstep Household Hydration",
      description:
        "Reliable doorstep delivery of thoroughly sanitized 20-litre drinking water jars for apartments, societies, and residences across Vishrantwadi and Dhanori Road.",
      specs: [
        "Sanitized food-grade 20L jars",
        "Direct apartment doorstep drop-off",
        "Flexible daily or alternate-day schedule",
        "Prompt local delivery coordination",
      ],
      image: "/images/home-delivery.jpg",
      badge: "Household",
    },
    {
      id: "office-supply",
      title: "Office & Commercial Supply",
      tagline: "Dependable Workplace Hydration",
      description:
        "Consistent drinking-water supply tailored for corporate offices, shops, banks, and commercial premises with punctual delivery schedules.",
      specs: [
        "Compatible with standard dispensers",
        "Scheduled recurring batch deliveries",
        "Direct coordination with admin/facilities",
        "Consistent supply without stockouts",
      ],
      image: "/images/office-commercial.jpg",
      badge: "Workplace",
    },
    {
      id: "events-bulk",
      title: "Events & Bulk Supply",
      tagline: "Large Gathering & Function Hydration",
      description:
        "Bulk water supply arrangements for family functions, wedding ceremonies, poojas, society events, and corporate gatherings. Contact us in advance for quantity planning.",
      specs: [
        "Organized multi-jar bulk delivery",
        "Staged jar placement as per venue setup",
        "Flexible volume planning",
        "Timely setup before event commencement",
      ],
      image: "/images/events-bulk.jpg",
      badge: "Events & Bulk",
    },
    {
      id: "purification",
      title: "Alkaline RO + UV Purification",
      tagline: "Multi-Stage Clean Filtration",
      description:
        "Purified drinking water processed through multi-stage Reverse Osmosis and Ultraviolet disinfection, designed to provide crisp, refreshing, and clean hydration every day.",
      specs: [
        "Multi-barrier RO filtration",
        "Ultraviolet (UV) microbial protection",
        "Alkaline pH balance & natural taste",
        "Strict batch quality inspection",
      ],
      image: "/images/purification-plant.jpg",
      badge: "Purification",
    },
  ] as ServiceItem[],
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Our Services", href: "#services" },
    { label: "Purity & Process", href: "#purity" },
    { label: "Why Om Sai Aqua", href: "#why-us" },
    { label: "Service Area", href: "#service-area" },
    { label: "Contact", href: "#contact" },
  ],
  credits: {
    developerName: "Goldspade",
    developerUrl: "https://goldspade.in/",
    associateName: "ABtech",
    associateUrl: "https://abtechservices.store/",
  },
};
