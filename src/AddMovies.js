import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext';

function AddMovies() {

    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);
    const buttonHandle = e =>{
        e.preventDefault();
        setMovies((prevMovies)=>[...prevMovies,{name:name , price : price }]);
        setName('');
        setPrice('');
    } 
  return (
    <div>
        <form onSubmit={buttonHandle}>
            <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type='text' name='price' value={price} onChange={(e)=> setPrice(e.target.value)}/>
            <button>submit</button>
        </form> 
    </div>
  )
}

export default AddMovies;