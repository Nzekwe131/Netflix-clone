import React,{useState,useEffect} from 'react'
import axios from '../axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
 import YouTube from 'react-youtube';





const baseUrl = "https://image.tmdb.org/t/p/original/";





function Row({title,fetchUrl,isLargeRow}) {

  const [movies, setMovies] = useState([]);
  const [loading,setLoading]=useState(false)
  const [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
    async function fetchData(){
      setLoading(true)
     const request = await axios.get(fetchUrl);
     setLoading(false)
     setMovies(request.data.results);
     return request;
    } 
    fetchData();
    // eslint-disable-next-line
  }, [fetchUrl]);
  
  const handleClick = (movie) => {
        
    // should terminae if there is an already movie url on display
    
    if(trailerurl){
      setTrailerurl("");
    }else{
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams( new URL(url).search);
        setTrailerurl(urlParams.get('v'));

      }).catch(error => console.log(error))
    }
      };

      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay:1,
        },
      }

  return loading? (<div className='loading-state'>
  <h3>loading....</h3>
  </div>): (
  <div>
   <div className='row'>
  <h2 className='row__title'>{title}</h2>

  <div className='row__posters'>
  {movies?.map(movie =>(
                <img 
                key={movie.id}
               onClick={()=> handleClick(movie)}
                className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
                src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie.name} 
                
                />
              ))}
  </div>
  {trailerurl && <YouTube
             videoId={trailerurl}  
             opts={opts}
            />} 

    </div>
  </div>
  )

}

export default Row
