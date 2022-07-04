import React from 'react';

export const portableText = [
  {
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
    ],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' },
        { title: 'Underline', value: 'underline' },
        {
          title: 'Superscript',
          value: 'sup',
          blockEditor: {
            icon: () => <div>⤴</div>,
            render: ({ children }) => <span><sup>{children}</sup></span>,
          }
        },
      ]
    },
  },
];
