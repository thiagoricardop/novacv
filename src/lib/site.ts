import type { Metadata } from "next";

export const siteConfig = {
  name: "Nova Comunicação Visual",
  shortName: "Nova CV",
  url: "https://novacomunicacaovisual.com.br",
  ogImage: "/og-image.svg",
  locale: "pt_BR",
  title: "Nova Comunicação Visual | Comunicação visual em Pará de Minas",
  description:
    "Plaquinhas PIX personalizadas, placas de sinalização, troféus, medalhas e comunicação visual para empresas em Pará de Minas e região.",
  phone: "(37) 3236-2730",
  mobile: "(37) 99665-2237",
  whatsappNumber: "553732362730",
  instagramHandle: "@_nova_cv_",
  instagramUrl: "https://www.instagram.com/_nova_cv_/",
  address: {
    street: "Rua Carmo da Mata, 69",
    district: "Vila Raquel",
    city: "Pará de Minas",
    region: "MG",
    postalCode: "35661-003",
    country: "BR",
  },
  keywords: [
    "comunicação visual Pará de Minas",
    "placas de sinalização Pará de Minas",
    "troféus personalizados Minas Gerais",
    "plaquinhas PIX personalizadas",
    "medalhas para eventos",
    "fábrica de placas Pará de Minas",
  ],
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    icons: {
      icon: [
        { url: "/logo.png", type: "image/png" },
        { url: "/logo.svg", type: "image/svg+xml" },
      ],
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.street} - ${siteConfig.address.district}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: ["Pará de Minas", "Região Centro-Oeste de Minas", "Minas Gerais"],
  sameAs: [siteConfig.instagramUrl],
  description: siteConfig.description,
};

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getGoogleMapsLink() {
  const address = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region}, ${siteConfig.address.country}`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function getGoogleMapsEmbedLink() {
  const address = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region}`;

  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
