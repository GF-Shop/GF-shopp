import React from 'react'

const AddProduct = () => {
  return (
    <div className="MainDiv">
     
        <div class="container main-container">
          <div class="row">
            <div class="col-lg-12">
              <h1 className="text-center mt-5 mb-5">Reactjs Eccommerce Site - Add Product</h1>
              <form  className="mt-5 mb-5">
                <div className="form-group">
                <input type="text" className="form-control" id="productname" placeholder="Enter Product Name" useRef="productname" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id="price" placeholder="Product Price" useRef="productprice" />
                </div>
                <div className="form-group">
                <label htmlFor="image">Product Image:</label>
                <input  type="file" className="form-control" id="image" useRef="productimage" />
                </div>
                <div className="form-group">
                <label htmlFor="comment">Product Description:</label>
                <textarea className="form-control" rows="5" id="productdesc" useRef="productdesc"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
              
            </div>
            
            
           
          </div>
        
        </div>
       
       
      </div>
  )
}

export default AddProduct