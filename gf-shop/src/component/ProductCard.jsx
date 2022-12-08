import React from 'react'
import css from "./productcard.css"
import { useState } from 'react'



  

function ProductCard() {
  const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
   <div>
  <div className="card">
  <img src="https://lawej.com/storage/Tunisie/annonnce/1237/thumb-816x460-2e72c0797638b49452bd6c7e51887bc3.jpeg" alt="Denim Jeans" style={{width:"100%"}}/>
  <h1>Tailored Jeans</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button onClick={handleClick} >📞 contact seller</button></p>
  {isShown && (
        <div>
            <h1>Aziz Selini</h1>
          <h2>+216 52 224 782</h2>
        </div>
      )}
</div>
</div>
  )
}

export default ProductCard