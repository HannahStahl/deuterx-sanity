import { portableText } from "../util";

export default {
  title: 'Management Team Member',
  name: 'managementTeamMember',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: portableText,
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    }
  }
}
