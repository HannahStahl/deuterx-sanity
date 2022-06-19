export default {
  title: 'Partnerships Section',
  name: 'partnershipsSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
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
