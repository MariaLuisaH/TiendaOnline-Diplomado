import React from 'react'

const Card = ({url,title,price,description}) => {
return <>
  <div className="container">
    <div className="row">
      <div className="col-3">
      <div className="card" >
  <img src={url} className="img-fluid"/>
   <div className="card-body">
    <p className="card-title">{title}</p>
    <p>{price}</p>
    
    <a href="#" className="btn btn-primary text-center">Go somewhere</a>
  </div>
</div>  
      </div>
    </div>
  </div>
</>
}

export default Card