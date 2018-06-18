export function transformItems(items) {
  return items.map(item =>
    Object.assign({}, item, { text: transformMultilines(item.text) })
  );
}

function transformMultilines(string) {
  return string.replace(/(?:\r\n|\r|\n)/g, '<br />');
}
