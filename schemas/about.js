export default {
  title: 'About',
  name: 'leadership',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Management Team',
      name: 'managementTeam',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'managementTeamMember' }] }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Advisors',
      name: 'advisors',
      type: 'array',
      of: [{ type: 'advisor' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'KOLs',
      name: 'KOLs',
      type: 'array',
      of: [{ type: 'KOL' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Consultants',
      name: 'consultants',
      type: 'array',
      of: [{ type: 'consultant' }],
      validation: Rule => Rule.required(),
    },
  ],
}
