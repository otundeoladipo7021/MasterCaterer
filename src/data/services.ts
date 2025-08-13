// src/data/services.ts

// Use your existing images as hero banners (Astro/Vite will emit correct URLs)
import corporateHero from '../images/platter3.jpeg?url';
import schoolHero    from '../images/setup2.jpeg?url';
import privateHero   from '../images/setup3.jpeg?url';
import { withBase } from '../lib/path';

export type Service = {
  slug: 'corporate' | 'school-meals' | 'private-events';
  title: string;
  tagline: string;
  description: string;
  hero: string;   // resolved URL string
  alt: string;
  highlights: string[];
  sampleMenu: string[];
  ctaLabel?: string;
};

export const SERVICES: Record<Service['slug'], Service> = {
  'corporate': {
    slug: 'corporate',
    title: 'Corporate Catering',
    tagline: 'Reliable service, professional presentation.',
    description:
      'From boardrooms to conferences, we deliver on-time service, consistent quality, and elegant setups.',
    hero: corporateHero,
    alt: 'Corporate catering buffet setup',
    highlights: [
      'On-time delivery & tidy setup',
      'Buffet, plated, or boxed options',
      'Dietary & allergy-aware menus',
      'Staffing available on request',
    ],
    sampleMenu: [
      'Smoky Party Jollof with grilled chicken',
      'Fried rice with sautéed shrimp',
      'Peppered beef skewers (suya-style)',
      'Mixed salad with citrus dressing',
      'Mini puff-puff & small chops',
    ],
    ctaLabel: 'Request corporate quote',
  },

  'school-meals': {
    slug: 'school-meals',
    title: 'School Meals',
    tagline: 'Nutritious, kid-approved, allergy-aware.',
    description:
      'Balanced, flavorful meals designed for growing students. We work with your schedule and guidelines.',
    hero: schoolHero,
    alt: 'Colorful school lunch trays',
    highlights: [
      'Balanced weekly rotations',
      'Allergy & dietary options',
      'Bulk or plated service',
      'Reliable delivery windows',
    ],
    sampleMenu: [
      'Jollof rice with baked chicken (reduced oil)',
      'Yam pottage with veggies',
      'Beans & sweet plantain bowls',
      'Fruit cups & yogurt parfaits',
      'Hydration: bottled water & juice',
    ],
    ctaLabel: 'Request school program',
  },

  'private-events': {
    slug: 'private-events',
    title: 'Private Events',
    tagline: 'From intimate dinners to big celebrations.',
    description:
      'Menus for birthdays, weddings, and family gatherings—bringing the warmth of home-cooked Nigerian cuisine.',
    hero: privateHero,
    alt: 'Private dining table spread',
    highlights: [
      'Custom tasting & menu planning',
      'Buffet or plated service',
      'Decor & setup coordination',
      'Servers available on request',
    ],
    sampleMenu: [
      'Egusi soup with pounded yam',
      'Fisherman okra with prawns',
      'Grilled tilapia with pepper sauce',
      'Jollof & fried rice duet',
      'Assorted small chops & desserts',
    ],
    ctaLabel: 'Plan my event',
  },
};

export const SERVICE_SLUGS: Service['slug'][] = Object.keys(SERVICES) as Service['slug'][];
