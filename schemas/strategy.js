import { portableText } from '../util';

export default {
  title: 'Strategy',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Summary',
      name: 'summary',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
    {
      title: 'Innovation',
      name: 'innovation',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
    {
      title: 'Speed to Market',
      name: 'speedToMarket',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
    {
      title: 'Validation',
      name: 'validation',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
  ],
}
