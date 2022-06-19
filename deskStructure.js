import S from '@sanity/desk-tool/structure-builder'
import { GrDocument } from 'react-icons/gr';
import schemas from './schemas'

const singletons = {
  home: true,
  about: true,
  partnerships: true,
};

const titleOverrides = {
  managementTeamMember: 'Management Team',
};

export default () => (
  S.list()
    .title('Content')
    .items(schemas.filter(({ type }) => type === 'document').map(({ name, title: defaultTitle }) => {
      const isSingleton = singletons[name];
      const title = titleOverrides[name] || `${defaultTitle}${isSingleton ? '' : 's'}`;
      return (
        S.listItem()
          .title(title)
          .icon(isSingleton ? GrDocument : undefined)
          .child(
            isSingleton
              ? S.editor().schemaType(name).documentId(name).title(title)
              : S.documentTypeList(name).title(title))
      );
  }))
);
