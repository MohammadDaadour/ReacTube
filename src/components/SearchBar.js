import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "./Logos";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <div style={{ display: "flex", marginTop: "5px" }}>
      <input
        className="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        style={{ border: "1px solid gray", padding: "5px", height: "40px", cursor: "pointer" }}
      >
        {" "}
        <img style={{ width: "30px" }} src={search} alt="" />{" "}
      </button>
    </div>
  );
};

export default SearchBar;
