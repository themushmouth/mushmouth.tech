import feather from 'feather-icons';
import fetchTimeline from './scripts/fetchTimeline';

document.addEventListener('DOMContentLoaded', () => {
  // bootstrap feather icons
  feather.replace();

  fetchTimeline('https://tiny.tilde.website/users/mushmouth.atom');
});
