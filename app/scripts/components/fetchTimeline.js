const fetchTimeline = url => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/atom+xml',
  },
})
  .then((res) => res.text())
  .then((str) => new DOMParser().parseFromString(str, 'text/xml'));

export default fetchTimeline;
