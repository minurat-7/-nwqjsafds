import { getYouTubeEmbedUrl } from '../../utils/youtube';

interface YouTubeEmbedProps {
  youtubeId: string;
  title?: string;
}

export function YouTubeEmbed({ youtubeId, title = 'YouTube video' }: YouTubeEmbedProps) {
  return (
    <div className="yt-iframe-wrapper">
      <iframe
        src={getYouTubeEmbedUrl(youtubeId)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
