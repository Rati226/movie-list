import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext';

function AddMovies() {

    const handleChange = (e) =>{
      setMovie({
        [e.target.name]:e.target.value
      })

    }
    const[movie,setMovie] = useState({
      name:'',price: ''
    })
    const {addMovies} = useContext(MovieContext);
    const buttonHandle = e =>{
        e.preventDefault();
       addMovies(movie);
        setMovie({
          name:"" ,price: ""
        });
    } 
  return (
    <div>
        <form onSubmit={buttonHandle}>
            <input type='text' name='name' value={movie.name} onChange={handleChange}/>
            <input type='text' name='price' value={movie.price} onChange={handleChange}/>
            <button>submit</button>
        </form> 
    </div>
  )
}

export default AddMovies;