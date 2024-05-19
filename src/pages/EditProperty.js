import React, { useState } from 'react'
import "./EditProperty.css"
import { useLocation ,useNavigate} from 'react-router-dom'
import { db } from '../firebase-config'
import { updateDoc,doc } from 'firebase/firestore'

const EditProperty = () => {
    const [newTextInput,setNewTextInput]=useState("")
    const [newNumberInput,setNewNumberInput]=useState(0);
    const navigate=useNavigate();

   

    const location=useLocation();
    const {productId,colName}=location.state || {};

   
  
    
    const updateTextDet=async(id,field,value)=>{
        const ref=doc(db,colName,id);
        const newChange = {[field]:value }
        await updateDoc(ref,newChange);

    }


  return (
    <div>

    <div className='upd-pro-image-text'>
    <img src={productId.image} width="150" height="150" style={{objectFit:"contain"}} alt=''></img>
    <h5>{productId.name}</h5>
    </div>
    
    <div className='upd-prod-change-div'>
        <div className='upd-prod-change'><h4>Name : </h4><input className="upd-pro-inp" type='text' defaultValue={productId.name} onChange={(e)=>{setNewTextInput(e.target.value)}}></input><button onClick={()=>{updateTextDet(productId.id,'name',newTextInput)}} className='btn btn-primary upd-pro-change-button' >change</button></div>
        <div className='upd-prod-change'><h4>Image : </h4><input type='text' className="upd-pro-inp" defaultValue={productId.image} onChange={(e)=>{setNewTextInput(e.target.value)}}></input><button onClick={()=>{updateTextDet(productId.id,'image',newTextInput)}} className='btn btn-primary upd-pro-change-button'>change</button></div>
        <div className='upd-prod-change'><h4>Area : </h4><input type='text' className="upd-pro-inp" defaultValue={productId.quantity} onChange={(e)=>{setNewTextInput(e.target.value)}}></input><button onClick={()=>{updateTextDet(productId.id,'quantity',newTextInput)}} className='btn btn-primary upd-pro-change-button old-pric-change'>change</button></div>
        <div className='upd-prod-change'><h4>Old Price : </h4><input type='text' className="upd-pro-inp" defaultValue={productId.old_price} onChange={(e)=>{setNewNumberInput(e.target.value)}}></input><button onClick={()=>{updateTextDet(productId.id,'old_price',newNumberInput)}} className='btn btn-primary upd-pro-change-button old-pric-change'>change</button></div>
        <div className='upd-prod-change'><h4>Discount : </h4><input type='text' className="upd-pro-inp" defaultValue={productId.old_price} onChange={(e)=>{setNewNumberInput(e.target.value)}}></input><button onClick={()=>{updateTextDet(productId.id,'discount',newNumberInput)}} className='btn btn-primary upd-pro-change-button old-pric-change'>change</button></div>
        <div className='upd-prod-change'><h4>Bedrooms : </h4><textarea type='text' className="upd-pro-inp des" rows="5" cols="40" defaultValue={productId.det_1} onChange={(e)=>{setNewTextInput(e.target.value)}}></textarea><button onClick={()=>{updateTextDet(productId.id,'det_1',newTextInput)}} className='btn btn-primary upd-pro-change-button des-edit-change'>change</button></div>̥
        <div className='upd-prod-change'><h4>Bathrooms : </h4><textarea type='text' className="upd-pro-inp des" rows="5" cols="40" defaultValue={productId.det_2} onChange={(e)=>{setNewTextInput(e.target.value)}}></textarea><button onClick={()=>{updateTextDet(productId.id,'det_2',newTextInput)}} className='btn btn-primary upd-pro-change-button des-edit-change'>change</button></div>
        <div className='upd-prod-change'><h4>Schools Nearby : </h4><textarea type='text' className="upd-pro-inp des" rows="5" cols="40" defaultValue={productId.det_3} onChange={(e)=>{setNewTextInput(e.target.value)}}></textarea><button onClick={()=>{updateTextDet(productId.id,'det_3',newTextInput)}} className='btn btn-primary upd-pro-change-button des-edit-change'>change</button></div>
        <div className='upd-prod-change'><h4>Hospitals Nearby : </h4><textarea type='text' className="upd-pro-inp des" rows="5" cols="40" defaultValue={productId.det_4} onChange={(e)=>{setNewTextInput(e.target.value)}}></textarea><button onClick={()=>{updateTextDet(productId.id,'det_4',newTextInput)}} className='btn btn-primary upd-pro-change-button des-edit-change'>change</button></div>

        <button className='btn btn-primary admin-logout-button' onClick={()=>{navigate("/sellerpage")}} style={{width:"250px",marginLeft:"650px",marginTop:"30px",marginBottom:"30px"}}>Update</button>


    </div>

     </div>
  )
}

export default EditProperty