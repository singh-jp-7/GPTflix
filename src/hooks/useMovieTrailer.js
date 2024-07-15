import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      const trailerVideos = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailerVideos?.length ? trailerVideos?.[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    }
  
    useEffect(()=> {
      getMovieVideos();
    }, [] )
}

export default useMovieTrailer;