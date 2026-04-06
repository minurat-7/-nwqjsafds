export function getYouTubeThumbnail(youtubeId: string, quality: 'default' | 'mq' | 'hq' | 'maxres' = 'mq') {
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    maxres: 'maxresdefault',
  };
  return `https://img.youtube.com/vi/${youtubeId}/${qualityMap[quality]}.jpg`;
}

export function getYouTubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
}

export function getYouTubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
