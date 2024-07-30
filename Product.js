 import React, { useState, useEffect } from 'react';
//  import './style.css'
 
 export default function Product() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
 
  const state1 = (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
   fetch('https://fakestoreapi.com/products')
       .then(res => res.json())
      .then(json => setState(json));
  }, []);
    return (
    <>     
     <div className='container-fluid'>
         <div className='row'>
          <div className='col-md-6'>
        <input type="text" placeholder="Search" value={search} onChange={state1} style={{padding:10,margin:10}}/>
        </div>
        <div className='row'style={{backgroundColor:'rgb(185, 182, 177)'}}>
          {state.filter((item) => item.title.includes(search)).map((item) => (
             <div key={item.id} className='col-md-4'>
              <div className="card"style={{width:'400px',height:'500px',backgroundColor:'rgb(20, 15, 10);'}}>
                <img src={item.image} className="card-img-top" alt={item.title}style={{ width: '300px', height: '250px'  }}/>
               <div className="card-body">                  
                <h5 className="card-title">{item.title}</h5>
                  <h4 className='card-title'>{item.price}</h4>
                 {/* <p className="card-text">{item.description}</p> */}
                 <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
              </div>
             </div>
       ))}
      </div>
        </div>
       </div>
    </>
 )};
