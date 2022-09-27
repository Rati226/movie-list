import React, { useContext } from 'react';

import './App.css';
import { MovieContext } from './MovieContext';

function Nav({numMovies}) {
    const [Movies,useMovies] = useContext(MovieContext);
  return (
    <div className='nav-bar'>
        <h1>Movies</h1>
        <h1 id='right'>No. of movies: {Movies.length} </h1>
    </div>
  )
}

export default Nav