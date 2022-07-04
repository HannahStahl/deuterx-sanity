import { portableText } from "../util";

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
      of: portableText,
      validation: Rule => Rule.required(),
    },
  ],
}
