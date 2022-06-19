export default {
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
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
    {
      title: 'Innovation',
      name: 'innovation',
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
    {
      title: 'Speed to Market',
      name: 'speedToMarket',
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
    {
      title: 'Validation',
      name: 'validation',
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
