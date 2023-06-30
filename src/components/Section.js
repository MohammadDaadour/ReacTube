import "./comp.css";
import { useState, useEffect } from "react";
import { fetching } from "./Fetching";
import Videos from "./Videos";
import Navbar from "./Navbar";

const Section = () => {
  const [videos, setVideos] = useState([]);
  const [currentSection, setCurrentSection] = useState("Video");

  useEffect(() => {
    fetching(`search?part=snippet&q=${currentSection}`).then((data) => {
      setVideos(data.items);
    });
  }, [currentSection]);

  return (
    <div>
      <section>
        <div className="nav" />
        <Navbar
          className="actualBar"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <div className="feed">
          <Videos videos={videos} />
        </div>
      </section>
    </div>
  );
};

export default Section;
