import React from 'react';
import AddMovies from './AddMovies';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';




function App() {
  return (
    <MovieProvider>
     <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />
     </div>
    </MovieProvider>
  );
}

export default App;
