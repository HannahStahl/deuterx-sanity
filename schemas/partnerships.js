export default {
  title: 'Partnerships',
  name: 'partnerships',
  type: 'document',
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [{ type: 'partnershipsSection' }],
      validation: Rule => Rule.required(),
    },
  ],
}
