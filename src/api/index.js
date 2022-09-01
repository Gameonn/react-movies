import axios from "../axios";

export const showMovieDetail = async (id) => {
  try {
    const response = await axios.get("/", {
      params: { i: id, type: "movie" },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    throw err;
  }
};

export const searchMovies = async (searchValue) => {
  try {
    const response = await axios.get("/", {
      params: { s: searchValue, type: "movie" },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    throw err;
  }
};
