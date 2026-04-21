import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo (relative to site root, e.g. '/avatar.jpg'). Used in Person schema. */
  authorImage?: string;
  /**
   * Set to false if your blog post images already match your theme color
   * and you don't want the brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /** Path to logo image for structured data (e.g. '/logo.png'). Add a PNG to public/ and set this. */
      imageUrl?: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Dr. Pedro Rafael Medina Millan',
  description:
    'Biografía oficial del Dr. Pedro Rafael Medina Millan - Pediatra Puericultor con 60 años de trayectoria. Autor del libro "Los Médicos del Estado Barinas".',
  url: SITE_URL || 'https://drpedromedina.com',
  ogImage: '/og-default.svg',
  author: 'Dr. Pedro Rafael Medina Millan',
  email: 'drpedromedina@centromedico.ficticio',
  phone: '+58 281 555 1234',
  address: {
    street: 'Av. Bolívar, Centro Comercial "La Fuente", Piso 2, Consultorio 205',
    city: 'Barcelona',
    state: 'Anzoátegui',
    zip: '',
    country: 'Venezuela',
  },
  socialLinks: [
    'https://instagram.com/drpedromedinapediatria',
  ],
  twitter: {
    site: '',
    creator: '',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/images/dr-medina/doctor.jpg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'Dr. Pedro Rafael Medina Millan',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#1e3a5f',
      backgroundColor: '#fafafa',
    },
  },
};

export default siteConfig;
