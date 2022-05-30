export default {
  title: 'Leadership',
  name: 'leadership',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Management Team',
      name: 'managementTeam',
      type: 'array',
      of: [{ type: 'bio' }],
      validation: Rule => Rule.required(),
    },
  ],
}
