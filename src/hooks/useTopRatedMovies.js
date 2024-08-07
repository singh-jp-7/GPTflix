import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = ()=>  {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
  
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
}

export default useTopRatedMovies;