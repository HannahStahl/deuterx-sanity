import { portableText } from "../util";

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Intro',
      name: 'intro',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
  ],
}
