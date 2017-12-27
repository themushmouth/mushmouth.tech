import feather from 'feather-icons';
import fetchTimeline from './scripts/fetchTimeline';

const htmlUnescape = (content) => {
  const doc = (new window.DOMParser()).parseFromString(content, 'text/html');
  return doc.documentElement.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
  // bootstrap feather icons
  feather.replace();

  // select our root tootbox element for populating
  const root = document.getElementById('masto-feed');

  fetchTimeline('https://tiny.tilde.website/@mushmouth.atom')
    .then(res => {
      const entries = [...res.querySelectorAll('entry')];
      console.log(entries);

      // now here's what I'd like to call FakeReact™ - we use template strings!
      const markup = `
        ${entries.map(entry => `
          <article class="masto-feed-item">
            <header>
              //
            </header>
            <section class="masto-feed-item__content">
              ${htmlUnescape(entry.querySelector('content').innerHTML)}
            </section>
          </article>
        `).join('')}
      `;

      // fill up the root element with the template string above
      root.innerHTML = markup;
    })
    .catch(err => {
      const markup = `
        <div class="masto-feed-error">
          <p>Whoops, something went wrong while fetching this feed. Details below:</p>
          <p>${JSON.stringify(err)}</p>
        </div>
      `;
    });
});
