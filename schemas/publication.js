export default {
  title: 'Publication',
  name: 'publication',
  type: 'object',
  validation: Rule => Rule.custom(fields => {
    if (!fields.link && !fields.pdf) return "Each publication requires a link or PDF"
    return true
  }),
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
      rows: 2,
    },
    {
      title: 'Source and Date',
      name: 'description',
      type: 'text',
      rows: 2,
    },
    {
      title: 'Link to Publication',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Poster PDF',
      name: 'pdf',
      type: 'file',
    },
  ],
}
