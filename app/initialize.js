import feather from 'feather-icons';
import fetchTimeline from './scripts/fetchTimeline';

document.addEventListener('DOMContentLoaded', () => {
  // bootstrap feather icons
  feather.replace();

  fetchTimeline('https://mastodon.social/users/resir014.atom');
});
