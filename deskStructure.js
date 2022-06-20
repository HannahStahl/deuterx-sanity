import S from '@sanity/desk-tool/structure-builder'
import { GrDocument } from 'react-icons/gr';
import schemas from './schemas'

const singletons = {
  home: true,
  about: true,
  leadership: true,
  partnerships: true,
};

const hidden = {
  managementTeamMember: true,
};

export default () => (
  S.list()
    .title('Content')
    .items(
      schemas
        .filter(({ type, name }) => type === 'document' && !hidden[name])
        .map(({ name, title: defaultTitle }) => {
          const isSingleton = singletons[name];
          const title = `${defaultTitle}${isSingleton ? '' : 's'}`;
          return (
            S.listItem()
              .title(title)
              .icon(isSingleton ? GrDocument : undefined)
              .child(
                isSingleton
                  ? S.editor().schemaType(name).documentId(name).title(title)
                  : S.documentTypeList(name).title(title))
          );
        })
    )
);
