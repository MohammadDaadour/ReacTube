import { Link } from "react-router-dom";

const ChannelCard = ({ channelcomponents }) => {
  return (
    <div className="channelCard">
      <Link to={`/channel/${channelcomponents?.id?.channelId}`}>
        <img
          className="channelImg"
          alt=""
          src={channelcomponents?.snippet?.thumbnails?.high?.url}
        />
        <h4>{channelcomponents?.snippet?.title}</h4>
      </Link>
    </div>
  );
};

export default ChannelCard;
