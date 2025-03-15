import { portableText } from "../util";

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
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
