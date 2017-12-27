import htmlUnescape from '../utils/htmlUnescape';

/**
 * renders content.
 *
 * @param {Object} entry our XML entry item object
 */
const tootContent = entry => `
  <section class="masto-feed-item__content">
    ${htmlUnescape(entry.content)}
  </section>
`;

export default tootContent;
