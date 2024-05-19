import React, { useState } from 'react'
import "./AddProperty.css"
import { db } from '../firebase-config';
import { collection,addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const AddProperty = () => {

const navigate=useNavigate();
const [name,setName]=useState("")
const [imageUrl,setImageUrl]=useState("")
const [oldPrice,setOldPrice]=useState(0)
const [discount,setDiscount]=useState(0)
const [quantity,setQuantity]=useState("")
const [desc1,setDesc1]=useState("")
const [desc2,setDesc2]=useState("")
const [desc3,setDesc3]=useState("")
const [desc4,setDesc4]=useState("")
const [selName,setSelName]=useState("")
const [selMail,setSelMail]=useState("")
const [selPhone,setSelPhone]=useState("")
const count=0;
const collectionRef = collection(db,"properties");


const addProduct=async()=>{
    await addDoc(collectionRef,{name:name,image:imageUrl,old_price:Number(oldPrice),discount:Number(discount),quantity:quantity,det_1:desc1,det_2:desc2,det_3:desc3,det_4:desc4,selName:selName,selMail:selMail,selPhone:selPhone,count:count});
    navigate("/sellerpage")
}

  return (
    <div>  
     <div className='add-prod-main-div'>

<div className='add-prod-sep-div'><h4 style={{marginLeft:"52px"}}>Name : </h4><input type='text' className='add-prod-inp' onChange={(e)=>setName(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4>Image URL : </h4><input type='text' className='add-prod-inp' onChange={(e)=>setImageUrl(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 style={{marginLeft:"21px"}}>Old Price : </h4><input type='text' className='add-prod-inp' onChange={(e)=>setOldPrice(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 style={{marginLeft:"23px"}}>Discount : </h4><input type='text' className='add-prod-inp' onChange={(e)=>setDiscount(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 style={{marginLeft:"23px"}}>Area : </h4><input type='text' className='add-prod-inp' onChange={(e)=>setQuantity(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Bedrooms : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setDesc1(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Bathrooms : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setDesc2(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Schools Nearby : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setDesc3(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Hospitals Nearby : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setDesc4(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Seller Name : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setSelName(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Seller Phone : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setSelPhone(e.target.value)}></input></div>
<div className='add-prod-sep-div'><h4 >Seller Email : </h4><input type='text' className='add-prod-inp' rows="4" style={{marginRight:"22px"}} onChange={(e)=>setSelMail(e.target.value)}></input></div>







     </div>

     <button className='btn btn-primary admin-logout-button' onClick={addProduct} style={{width:"250px",marginLeft:"650px",marginTop:"30px",marginBottom:"30px"}}>Add Property</button>



    </div>
  )
}

export default AddProperty