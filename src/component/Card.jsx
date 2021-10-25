import React from 'react';

const Card=(props)=>{
    return(<>
             
          
             <div className="col-sm-4">
              <div className="container">
             
             
                <div className="card" >

                    <div className="card-body">
                    <h3 className="card-title text-center">Category : {props.category}</h3>
                    <img src={props.image} alt="noatl" className="img" />
                        {/* <h4 className="card-title text-success">{props.name}</h4> */}
                        {/* <p className="card-text text-justify">{props.description}</p> */}
                        <p className="card-text text-danger">Subsciption : *{props.price}/Month</p>
                        <div className="card-footer text-center text-white  bg-dark"> Buy Now</div>
                    </div>
                </div><br />
                </div>
            </div>
            
        
           
                         
</>)
}
            export default Card;