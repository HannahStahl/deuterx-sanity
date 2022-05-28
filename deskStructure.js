import S from '@sanity/desk-tool/structure-builder'
import schemas from './schemas'

export default () =>
  S.list()
    .title('Content')
    .items(
      schemas.map(({ name, title }) =>
        S.listItem().title(`${title}s`).child(
          S.documentTypeList(name).title(`${title}s`)
        )
      ),
    );