import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Blog collection with Content Layer API
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Team'),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      svgSlug: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      locale: z.enum(['en', 'es', 'fr']).default('en'),
    }),
});

// Pages collection for static pages
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.coerce.date().optional(),
    locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});

// Authors collection
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

// FAQs collection (for JSON-LD FAQ schema)
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
    locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});

// Projects collection — one MDX file per project
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      year: z.number().optional(),
      client: z.string().optional(),
      role: z.string().optional(),
      services: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Stack collection — one MDX file per tool, editable like blog posts
const stack = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stack' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    version: z.string(),
    url: z.string().url(),
    icon: z.string(), // icon name, e.g. 'brand-astro'
    colorOklch: z.string(), // OKLCH params, e.g. '62.5% 0.22 38'
    order: z.number().default(0),
  }),
});

// Biography profile - JSON with doctor's personal data
const biographyProfile = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/biography' }),
  schema: z.object({
    name: z.string(),
    specialty: z.string(),
    birthDate: z.string(),
    birthPlace: z.string(),
    age: z.number(),
    status: z.string(),
    currentLocation: z.string(),
    nickname: z.string(),
    zodiacSign: z.string(),
    family: z.object({
      parents: z.object({
        father: z.object({ name: z.string(), years: z.string(), profession: z.string() }),
        mother: z.object({ name: z.string(), years: z.string(), profession: z.string() }),
      }),
      siblings: z.array(z.object({ name: z.string(), birthYear: z.number() })),
      medicalRelatives: z.array(z.string()),
    }),
    ownFamily: z.object({
      maritalStatus: z.string(),
      spouse: z.object({ name: z.string(), profession: z.string() }),
      marriageDate: z.string(),
      children: z.array(z.object({ name: z.string(), age: z.number(), profession: z.string() })),
    }),
    education: z.object({
      primary: z.object({ institution: z.string(), city: z.string(), years: z.string(), anecdotes: z.string() }),
      secondary: z.object({ institution: z.string(), city: z.string(), years: z.string(), anecdotes: z.string() }),
      university: z.object({
        name: z.string(),
        faculty: z.string(),
        career: z.string(),
        years: z.string(),
        graduationDate: z.string(),
        title: z.string(),
        thesis: z.object({ title: z.string(), director: z.string(), awarded: z.boolean(), publication: z.string() }),
      }),
    }),
    residency: z.object({
      hospital: z.string(),
      years: z.string(),
      chiefResident: z.string(),
      influentialPediatrician: z.string(),
      cohortName: z.string(),
    }),
    subspecialties: z.array(z.object({ name: z.string(), institution: z.string(), years: z.string(), mentor: z.string() })),
    careerStats: z.object({
      childrenAttended: z.number(),
      generationsOfFamilies: z.number(),
      pediatriciansTrained: z.number(),
      yearsOfService: z.number(),
    }),
    office: z.object({
      address: z.string(),
      openingYear: z.number(),
      active: z.boolean(),
      hours: z.string(),
      dailyAverage: z.string(),
      patientAgeRange: z.string(),
    }),
    legacy: z.object({
      messageToPediatricians: z.string(),
      messageToParents: z.string(),
      howToBeRemembered: z.string(),
    }),
    social: z.object({
      email: z.string(),
      phone: z.string(),
      whatsapp: z.string(),
      instagram: z.string(),
    }),
    book: z.object({
      title: z.string(),
      price: z.number(),
      currency: z.string(),
      status: z.string(),
      description: z.string(),
      coverOptions: z.array(z.string()),
    }),
  }),
});

// Biography timeline - MDX files for timeline events
const biographyTimeline = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/biography/timeline' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    month: z.number().optional(),
    day: z.number().optional(),
    category: z.enum(['personal', 'education', 'career', 'recognition', 'publication']),
    icon: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number(),
  }),
});

// Biography book - MDX file for book information
const biographyBook = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/biography/book' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      author: z.string(),
      publishedYear: z.number(),
      status: z.string(),
      price: z.number(),
      currency: z.string(),
      coverOptions: z.array(z.string()),
      pages: z.number(),
      language: z.string(),
      isbn: z.string(),
      publisher: z.string(),
      coverImage: image().optional(),
    }),
});

export const collections = {
  blog,
  pages,
  authors,
  faqs,
  stack,
  projects,
  biographyProfile,
  biographyTimeline,
  biographyBook,
};
