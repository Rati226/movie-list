import React, {useState,createContext} from 'react';




export const MovieContext = createContext();
  

//provides information to all the other components just have to import them over here and wrap up inside contextname.provider
//movie provider holds information and provide it to other components
export const MovieProvider = props =>{
  
    const [movies,setMovies] = useState([ 
        {
            name: 'lucy',
            price: '$10',
            id: 10234
      },
      {
        name: 'hero',
        price: '$123',
        id: 3823572
    },
    {
        name: 'lucifier ',
        price: '$25',
        id: 13345
    },
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}

