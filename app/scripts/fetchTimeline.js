const fetchTimeline = (url) => {
  fetch(url, { mode: 'cors' })
    .then(res => res.text)
    .then(str => (new DOMParser()).parseFromString(str, 'text/xml'))
    .then(data => console.log(data));
};

export default fetchTimeline;
