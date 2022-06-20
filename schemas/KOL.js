export default {
  title: 'KOL',
  name: 'KOL',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Area of Expertise',
      name: 'area',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
  ],
}
