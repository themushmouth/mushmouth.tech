import feather from 'feather-icons';

import header from './components/header';
import contentWarning from './components/contentWarning';
import tootContent from './components/tootContent';
import fetchTimeline from './utils/fetchTimeline';

// this is our main function.
// everything happens here.

export default () => {
  // bootstrap feather icons
  feather.replace();

  // select our root tootbox element for populating
  const root = document.getElementById('masto-feed');

  fetchTimeline('https://tiny.tilde.website/@mushmouth.atom')
    .then((res) => {
      // build our author object
      const author = {
        id: res.querySelector('author id').innerHTML,
        name: res.querySelector('title').innerHTML,
        username: res.querySelector('author name').innerHTML,
        uri: res.querySelector('author uri').innerHTML,
        email: res.querySelector('author email').innerHTML,
        summary: res.querySelector('author summary').innerHTML,
      };

      // build our entries object
      const entries = [...res.querySelectorAll('entry')]
        .filter(entry => !entry.querySelector('author')) // hack: don't include boosts
        .map(entry => ({
          id: entry.querySelector('id').innerHTML,
          published: entry.querySelector('published').innerHTML,
          updated: entry.querySelector('updated').innerHTML,
          title: entry.querySelector('title').innerHTML,
          hasContentWarning: entry.querySelector('category[term="nsfw"]') || undefined,
          contentWarning: entry.querySelector('category[term="nsfw"]')
            ? entry.querySelector('summary').innerHTML
            : null,
          content: entry.querySelector('content').innerHTML,
        }));

      // I have a personal goal for this project. use vanilla ES6. no React,
      // no jQuery, nothing. so I had to compromise
      // allow me to introduce FakeReact™ - we use template strings!
      const markup = `
        ${entries.map(entry => `
          <article class="masto-feed-item">
            ${header(entry, author)}
            ${entry.hasContentWarning ? contentWarning(entry) : ''}
            ${!entry.hasContentWarning ? tootContent(entry) : ''}
          </article>
        `).join('')}
      `;

      // fill up the root element with the template string above
      // pretend this is ReactDOM.render()
      root.innerHTML = markup;
    })
    .catch((err) => {
      const markup = `
        <div class="masto-feed-error">
          <p>Whoops, something went wrong while fetching this feed. Details below:</p>
          <p>${err}</p>
        </div>
      `;

      // fill up root element with error message
      // again, pretend this is ReactDOM.render()
      root.innerHTML = markup;
    });
}
