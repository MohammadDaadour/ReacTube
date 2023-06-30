import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetching } from "./Fetching";

function ChannelPage() {
  const [channelcomponents, setChannelConmponents] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetching(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelConmponents(data?.items[0])
    );

    fetching(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
   
  return (
    <div>
      <div className="channelContainer">
        <ChannelCard channelcomponents={channelcomponents} />
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default ChannelPage;
