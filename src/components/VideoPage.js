import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetching } from "./Fetching";
import ReactPlayer from "react-player";

function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetching(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setCurrentVideo(data.items[0])
    );

    fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!currentVideo?.snippet) return "loading...";

  return (
    <div>
      <div>
        <div className="player-container">
          <ReactPlayer
            className="player"
            width="100%"
            height="100%"
            style={{ margin: "70px 0px 0px 0px" }}
            url={`http://www.youtube.com/watch?v=${id}`}
            controls
          />
          <h3>{currentVideo.snippet.title}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>{currentVideo.snippet.channelTitle}</h5>
            <div style={{ display: "flex", paddingRight: "10px" }}>
              <h5>
                {parseInt(currentVideo.statistics.viewCount).toLocaleString()}{" "}
                Views
              </h5>
              <h5>
                {parseInt(currentVideo.statistics.likeCount).toLocaleString()}{" "}
                Likes
              </h5>
            </div>
          </div>
          <br/>
          <hr/>
        </div>
        <div className="related-sec">
          <Videos className="related" videos={relatedVideos} />
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
