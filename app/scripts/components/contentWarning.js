import htmlUnescape from '../utils/htmlUnescape';

/**
 * renders the CW box.
 *
 * @param {Object} entry our XML entry item object
 */
const contentWarning = entry => `
  <section class="masto-feed-item__content-warning">
    <a href="${entry.id}" target="_blank" rel="noopener noreferrer">
      <span class="label">CW</span>
      <span class="content">${htmlUnescape(entry.contentWarning)}</span>
    </a>
  </section>
`;

export default contentWarning;
