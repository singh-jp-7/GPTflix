import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = ()=>  {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
  
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
}

export default useUpcomingMovies;