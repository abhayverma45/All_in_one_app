import React from 'react';



const BCard=({category,headline,description,id})=> {
  const color=["antiquewhite","green","pink"];
  return (
    <>
     

      <div class="card" style={{backgroundColor:color[id%3]}} >
  <div class="card-body">
    <h5 class="card-title">category : {category}</h5>
    <br/>
    <h6 class="card-subtitle mb-2 text-muted">headline : {headline}</h6>
    <br/>

    <p>description :{description}</p>
    

  </div>
</div>

    
    </>
  
  );
}

export default BCard;
