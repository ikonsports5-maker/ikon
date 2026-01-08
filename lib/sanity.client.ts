import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "mqich97j",
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-11-28',
});
