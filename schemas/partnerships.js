export default {
  title: 'Partnerships',
  name: 'partnerships',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
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
