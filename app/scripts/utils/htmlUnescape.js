/**
 * unescapes any escaped HTML content
 *
 * @param {string} content the escaped HTML content
 * @returns an unescaped HTML content
 */
const htmlUnescape = (content) => {
  const doc = (new window.DOMParser()).parseFromString(content, 'text/html');
  return doc.documentElement.textContent;
};

export default htmlUnescape;
