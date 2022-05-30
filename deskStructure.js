import S from '@sanity/desk-tool/structure-builder'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default () => {
  const pages = ['news', 'leadership'];
  return S.list()
    .title('Content')
    .items(pages.map((page) => (
      S.listItem()
        .title(capitalize(page))
        .child(S.editor().schemaType(page).documentId(page).title(capitalize(page)))
    )));
};
