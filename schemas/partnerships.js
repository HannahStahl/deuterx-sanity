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
    {
      title: 'Phone Number',
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    },
  ],
}
