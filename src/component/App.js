// import logo from './logo.svg';
import './style.css';
import React from 'react'
import Card from "./Card";
import Data from "./Data";

function App() {
  return (
    <div className="bg-dark">
     
       
     
   <div className="container bg-light">
   <h1 className="text-lg-center text-white bg-dark">Netflix Movie</h1><br />
   <div className="row">
 
   {Data.map((val)=>
   {
     return <Card name={val.name} image={val.image} category={val.category} price={val.price} description={val.description}></Card>

     
   })}
     </div>
     
   
     </div>
    </div>
  );
}

export default App;
