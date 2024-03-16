import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId,bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
       className={`${bool ? "w-[100%]":"w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=3vc5Iw2uRDbcGWCx&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default VideoBackground;
