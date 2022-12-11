import React,{useState} from 'react'
import axios from 'axios'

const Update = ({card}) => {
    console.log(card,"hhhhhhhhhh");

  const [Product,setProduct]=useState(card.Product)
  
  const [Price,setPrice]=useState(card.Price)
  const [Description,setDescription]=useState(card.Description)
  const [Category,setCategories]=useState(card.Category)
  const [Phonenumber,setPhone]=useState(card.Phonenumber)
console.log(card._id);
  const update=() =>{
    axios.put(`http://localhost:5000/prod/${card._id}`,{Product,Category,Description,ImageUrl,Phonenumber,Price})
  }


  const[file,setFile]=useState(null)
  const [ImageUrl,setImagee]=useState(card.ImageUrl)
  const uploadd= ()=>{
  const form = new FormData()
    form.append('file',file)
    form.append("upload_preset","abderahimt")
    form.append("cloud_name","dqz0n291c")
    fetch(" https://api.cloudinary.com/v1_1/dqz0n291c/image/upload ",{
    method:"post",
    body:form
    })
    .then((res)=>res.json())
    .then((res)=>{setImagee(res.url)
     console.log(res.url)})
    .catch((err)=>{console.log(err);})
  }
    


  return (
    <div className="MainDiv all" >
     
        <div className="container main-container">
          <div >
            <div className="col-lg-12">
              <b className="heading">UPDATE PRODUCT </b>
              
                <div className="form-group">
                <b>Product Name</b>
                <input  type="text" className="form-control"  id="productname" defaultValue={card.Product} placeholder="Enter Product Name" useRef="productname"  onChange= {(event)=>setProduct(event.target.value)} />
                </div>
                <div className="form-group">
                <b>Phone Number</b>
                <input type="text" className="form-control" id="productname" defaultValue={card.Phonenumber} placeholder="Enter your Phone Number" useRef="productname"  onChange={(event)=> setPhone(event.target.value)}/>
                </div>
                <div className="form-group">
                <b>PRICE</b>
                <input type="text" className="form-control" id="price"  defaultValue={card.Price} placeholder="enter Product Price" useRef="productprice" onChange={(event)=>setPrice(event.target.value)}/>
                </div>
                <div className="form-group">
                <b htmlFor="image" >Product Image: </b>
                <input  className="inputfile"  type="file"   onChange={(event)=>setFile(event.target.files[0])}  />
                <button  className="btn btn-primary button-4"   onClick={
                uploadd} > <b> update Img </b></button>
                </div>
                <div className="form-group">

<b>Select From Categories</b>
                <select  name="rental-option" className="form-control" defaultValue={card.Category} onChange={(event)=> setCategories(event.target.value)}>
  <option className="addd" value="test"   >---⬇️⬇️⬇️---</option>

  <option value="phone"> phone </option>
  <option value="vehicle"> vehicle </option>
  <option value="clothes"> clothes </option>
  <option value="real estate"> real estate </option>

</select>


                </div>
                <div className="form-group">
                <b htmlFor="comment">Product Description:</b>
                <textarea className="form-control" rows="5" defaultValue={card.Description} id="productdesc" useRef="productdesc" onChange={(event)=>setDescription(event.target.value)} placeholder="enter Description" ></textarea>
                </div>
                
                <button  className="button-77" role="button"  
               
                
                   
                  
               onClick={()=>{update(); window.location.reload()} }> Update</button>
                 
           
              
            </div>
            
            
           
          </div>
        
        </div>
       
       
      </div>
)}

export default Update