import { defineField, defineType } from 'sanity';

/**
 * Raw HTML block for use inside Portable Text bodies.
 * Rendered as-is on the site, so only paste markup you trust.
 */
export default defineType({
  name: 'htmlEmbed',
  title: 'HTML',
  type: 'object',
  fields: [
    defineField({
      name: 'html',
      title: 'HTML',
      type: 'text',
      rows: 12,
      description:
        'Paste HTML here (tables, iframes, embed codes). It is rendered exactly as written, so only paste markup from sources you trust.',
      validation: (Rule) => Rule.required().error('Add some HTML or delete this block.'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption shown underneath.',
    }),
  ],
  preview: {
    select: { html: 'html', caption: 'caption' },
    prepare({ html, caption }: { html?: string; caption?: string }) {
      const firstTag = html?.trim().match(/^<\s*([a-zA-Z0-9-]+)/)?.[1];
      return {
        title: caption || 'HTML block',
        subtitle: firstTag ? `<${firstTag}> — ${html?.length || 0} chars` : `${html?.length || 0} chars`,
      };
    },
  },
});
