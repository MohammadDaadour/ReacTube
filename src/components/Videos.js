import './comp.css';
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export const Videos = ({ videos }) => {

  return (
    <div className="vids">
      {videos.map((item)=>(
        <div className="video">
          {item.id.videoId && <VideoCard video = {item} />}
          {item.id.channelId && <ChannelCard channelcomponents={item}/>}
        </div>
      ))}
    </div>
  );
};
export default Videos;
