import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    description: z.string(),
    descriptionZh: z.string(),
    category: z.enum(['research', 'software']),
    tags: z.array(z.string()),
    links: z.object({
      github: z.string().optional(),
      paper: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
    date: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
