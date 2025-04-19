export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Phone Number',
      name: 'phone',
      type: 'string',
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
