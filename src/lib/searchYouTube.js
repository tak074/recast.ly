var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max || 5,
    type: 'video',
    videoEmbaddable: 'true'
  });
};
