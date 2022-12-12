import React from 'react'
import 
 "./productcard.css"
import { useState } from 'react'



  


function ProductCard({card}) {
console.log(card);
// onClick={()=>props.togtog()}

  const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
   <div >
    
  <div className="card">
  <img src={card.ImageUrl} alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>{card.Product}</h1>
  <p className="price">{card.Price} DT </p>
  <p>{card.Description}</p>
  <p><button onClick={handleClick} >📞 contact seller</button></p>
  {isShown && (
        <div>
            <h1>{card.User}</h1>
          <h2>{card.Phonenumber}</h2>
        </div>
      )}
</div>
</div>
  )
}

export default ProductCard