/**
 * renders the header.
 *
 * @param {Object} entry our XML entry item object
 * @param {Object} author our author object
 */
const header = (entry, author) => `
  <header class="masto-feed-item__header">
    <div class="header-link header-link--username">
      <a href="${author.uri}" target="_blank" rel="noopener noreferrer">
        <span class="longname"><strong>${author.name}</strong></span>
        <span class="username">@${author.username}</span>
      </a>
    </div>
    <div class="header-link header-link--permalink">
      <a href="${entry.id}" target="_blank" rel="noopener noreferrer">
        ${new Date(entry.published).toLocaleString()}
      </a>
    </div>
  </header>
`;

export default header;
