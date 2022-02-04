import React, { useEffect, useState } from 'react';


import Tour from "./Tour";





const Tours = () => {
 
  const[tours,setTours] = useState([]);
  useEffect(() =>{
    fetch("./places.JSON")
    .then(res => res.json())
    .then(data => setTours(data))
  },[])


  return(
    <>
    <section>
    <div className="title">
      <h2>Ours Tours</h2>
      <div className="underline"></div>
     

    </div>

 
 
  
    {
      tours.map(tour => <Tour
      tour={tour}
      key={tour.id}
      >

      </Tour>)
    
    }
       </section>
      </>

    ) ;
};


export default Tours;