export default {
  title: 'News',
  name: 'news',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Articles',
      name: 'articles',
      type: 'array',
      of: [{ type: 'article' }],
      options: { sortable: false },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Publications',
      name: 'publications',
      type: 'array',
      of: [{ type: 'publication' }],
      options: { sortable: false },
      validation: Rule => Rule.required(),
    },
  ],
}
