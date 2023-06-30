import "./comp.css";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const demoVideoUrl = "/video/GDa8kZLNhJ4";

  return (
    <div className="videoCard">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="imgContainer">
          <img className="vidImg" alt="" src={snippet?.thumbnails?.high?.url} />
        </div>
        <h4>{snippet?.title.slice(0, 80)}</h4>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
        }
      >
        <p className="channel-title">{snippet?.channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;
