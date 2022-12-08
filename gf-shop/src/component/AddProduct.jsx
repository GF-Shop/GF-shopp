import React,{useState} from 'react'
import axios from 'axios'
import "./Add.css"




const AddProduct = () => {



  const [Product,setProduct]=useState("")
  
  const [Price,setPrice]=useState(0)
  const [Description,setDescription]=useState("")
  const [Category,setCategories]=useState("")
  const [Phonenumber,setPhone]=useState(0)
  
  const Add=(add) =>{
    axios.post(`http://localhost:5000/prod/prod`,add)
  }


  const[file,setFile]=useState(null)
  const [ImageUrl,setImage]=useState("")
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
    .then((res)=>{setImage(res.url)
     console.log(res.url)})
    .catch((err)=>{console.log(err);})
    
    }
    




  return (
    <div className="MainDiv">
     
        <div class="container main-container">
          <div class="row">
            <div class="col-lg-12">
              <b className="heading">ADD PRODUCT </b>
              
                <div className="form-group">
                <b>Product Nime</b>
                <input  type="text" className="form-control" id="productname" placeholder="Enter Product Name" useRef="productname"  onChange= {(event)=>setProduct(event.target.value)} />
                </div>
                <div className="form-group">
                <b>Phone Number</b>
                <input type="text" className="form-control" id="productname" placeholder="Enter your Phone Number" useRef="productname"  onChange={(event)=>setPhone(event.target.value)}/>
                </div>
                <div className="form-group">
                <b>PRICE</b>
                <input type="text" className="form-control" id="price" placeholder="enter Product Price" useRef="productprice" onChange={(event)=>setPrice(event.target.value)}/>
                </div>
                <div className="form-group">
                <b htmlFor="image" >Product Image: </b>
                <input  class="inputfile"  type="file"   onChange={(event)=>setFile(event.target.files[0])}  />
                <button  className="btn btn-primary"   class="button-4 " onClick={()=>{
                
                uploadd()
                }} > <b> upload Img </b></button>
                </div>
                <div className="form-group">

<b>Select From Categories</b>
                <select name="rental-option" className="form-control" onChange={(event)=> setCategories(event.target.value)}>
  <option className="addd" value="test"  >---⬇️---</option>

  <option value="phone"> phone </option>
  <option value="vehicle"> vehicle </option>
  <option value="clothes"> clothes </option>
  <option value="real estate"> real estate </option>

</select>


                </div>
                <div className="form-group">
                <b htmlFor="comment">Product Description:</b>
                <textarea class="form-control" rows="5" id="productdesc" useRef="productdesc" onChange={(event)=>setDescription(event.target.value)}></textarea>
                </div>
                
                <button  class="button-54" role="button"  onClick={()=>{
                
                
                  
                   Add({ImageUrl,Product,Price,Description,Category,Phonenumber})
                   window.location.href = "/home";
                  
                  }}> sumbit</button>
                 
           
              
            </div>
            
            
           
          </div>
        
        </div>
       
       
      </div>
  )
}

export default AddProduct