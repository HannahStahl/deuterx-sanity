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
      validation: Rule => Rule.required(),
    },
    {
      title: 'Publications',
      name: 'publications',
      type: 'array',
      of: [{ type: 'publication' }],
      validation: Rule => Rule.required(),
    },
  ],
}
