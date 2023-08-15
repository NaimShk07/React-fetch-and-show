import React, { useEffect, useState } from 'react';

function Api() {

   // #1 useEffect
   useEffect(() => {
      fetchData(); //useEffect will run only one time
   }, []);

   // #2 Fetch Data - method 1
   const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setData(data));
   };

   // #3 useState
   const [data, setData] = useState([]);

   // console.log(data);



   return (
      <div>
         <div className="row justify-content-center p-5">
            {
               data.slice(0, 20).map((value, index, entarr) => {
                  return (

                     <div className="col-3 mb-5  ">
                        <div className="card">
                           <div className="view overlay">
                              <img className="card-img-top" src={value.image} alt="Card image cap" height={"300px"} />
                              <a href="#!">
                                 <div className="mask rgba-white-slight" />
                              </a>
                           </div>
                           <div className="card-body">
                              <h4 className="card-title">{value.title.slice(0,10)}</h4>
                              <p className="card-text">{value.description.slice(0,100)}</p>
                              <a href="#" className="btn btn-primary">Buy {value.price} Rs</a>
                           </div>
                        </div>
                     </div>




                  );
               })
            }
         </div>




      </div>


   );
}

export default Api;