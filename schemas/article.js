export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  validation: Rule => Rule.custom(fields => {
    if (!fields.link && !fields.pdf) return "Either a link or PDF must be provided"
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
      title: 'Link to Article',
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
