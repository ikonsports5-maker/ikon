import { defineArrayMember, defineField, defineType } from 'sanity';

/**
 * Simple table for use inside Portable Text bodies.
 * Each row holds a list of cells; keep the cell count consistent across rows.
 */
export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'hasHeaderRow',
      title: 'First row is a header',
      type: 'boolean',
      description: 'Style the first row as column headings.',
      initialValue: true,
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tableRow',
          title: 'Row',
          type: 'object',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'string' }],
              options: { layout: 'grid' },
            }),
          ],
          preview: {
            select: { cells: 'cells' },
            prepare({ cells }: { cells?: string[] }) {
              return {
                title: (cells || []).join('  |  ') || 'Empty row',
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).error('Add at least one row.'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption shown under the table.',
    }),
  ],
  preview: {
    select: { rows: 'rows', caption: 'caption' },
    prepare({ rows, caption }: { rows?: any[]; caption?: string }) {
      const rowCount = rows?.length || 0;
      const colCount = rows?.[0]?.cells?.length || 0;
      return {
        title: caption || 'Table',
        subtitle: `${rowCount} row${rowCount === 1 ? '' : 's'} × ${colCount} column${colCount === 1 ? '' : 's'}`,
      };
    },
  },
});
