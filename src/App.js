import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ChannelPage from "./components/ChannelPage";
import SearchComponent from "./components/SearchComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="head" />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Section />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/channel/:id" element={<ChannelPage />} />
            <Route path="/search/:searchTerm" element={<SearchComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
