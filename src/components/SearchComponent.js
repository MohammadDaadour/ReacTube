import "./comp.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetching } from "./Fetching";
import Videos from "./Videos";

const SearchComponent = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetching(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  },[searchTerm]);

  return (
    <section>
      <div className="feed">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default SearchComponent;
