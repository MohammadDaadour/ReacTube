import axios from "axios";

const mainUrl = "https://youtube-v31.p.rapidapi.com";
  const options = {
    url: mainUrl,
    params: {
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "18c37534d4msh81d00f323ca4c4dp105482jsnd65c77a4d274",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };



 export const fetching = async (url) => {
    const { data } = await axios.get(`${mainUrl}/${url}`, options);
    return data;
  };


