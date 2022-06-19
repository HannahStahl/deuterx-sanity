export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      title: 'Intro',
      name: 'intro',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' }
            ]
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
}
