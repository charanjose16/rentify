import React, { useEffect, useState } from 'react'
import './PropertyDetails.css'
import { useLocation,useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { addDoc,collection,doc,getDoc,updateDoc } from 'firebase/firestore';

const PropertyDetails = () => {

    const location=useLocation();
    const {productDet} =location.state || {};
    const discountPrice=(productDet.old_price-(productDet.old_price*productDet.discount)/100).toFixed(0);
    console.log(productDet.id);

    useEffect(() => {
        const fetchCount = async () => {
          const docRef = doc(db, 'properties', productDet.id);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setCount(docSnap.data().count);
          } else {
            console.log('No such document!');
          }
        };
    
        fetchCount();
      }, []);

  const navigate=useNavigate();
   
    const [selectedDeal, setSelectedDeal] = useState(null);
    var [count,setCount]=useState(0);


  const handleFavouriteClick = (deal) => {
    setSelectedDeal(deal);
  };
   

  const like=async(id,field)=>{
    const newCount=count+1;
    setCount(newCount);
    const ref=doc(db,"properties",id);
    const newChange = {[field]:count+1 }
    await updateDoc(ref,newChange);

}

    
    
     return (
    <div>

        <div className='product-main-grid'>
            <div className='prod-items img'>
                <img className='prod-image' src={productDet.image} width="400" height="400" style={{objectFit:'contain'}}/>
               
            </div>
            <div className='prod-items'>
                <h3>{productDet.name}</h3>  
                <p className='prod-old-price'>Rs.{productDet.old_price}</p>
                <div className='prod-price-dis'>
                <h5 >Price:  <span className='prod-price'>Rs.{discountPrice}</span></h5> 
                <p className='prod-dis' style={{marginTop:"30px"}}>{productDet.discount}% off</p>
                </div>
                
                
                <div  className='spl-offer-main'>
                    <div className='spl-bajaj' >
                           <div style={{marginLeft:"50px"}}><h2>Area :</h2></div>
                           <div><p>{productDet.quantity}</p></div>
                    </div>
                
                </div>
                <div>
                    <h4>{count} liked this property</h4>
                    <button className='btn btn-primary admin-logout-button' style={{backgroundColor:"lightgreen"}} onClick={()=>{like(productDet.id,'count')}}>like</button>
                </div>

                <div className='prod-quant'>
        
                 <div className='prod-add-cart buy-now' onClick={()=>{navigate("/buyNow",{state:{prod:productDet}})}}><h5 className='prod-add-cart-text'>Add to wishlist</h5></div>
               
                </div>

            </div>
        </div>


        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>

               <div style={{marginLeft:"50px"}}>
           <h4 style={{marginTop:"50px",marginLeft:"70px",fontFamily: 'Montserrat'}}>Property Details</h4>

          <div className='prod-des-div'>
            <p className='prod-des-p'>• {productDet.det_1} Bedrooms</p>
            <p className='prod-des-p'>• {productDet.det_2} Bathrooms</p>
            <p className='prod-des-p'>• {productDet.det_3} Schools Nearby</p>
            <p className='prod-des-p'>• {productDet.det_4} Hospitals Nearby</p>
          </div>
        </div>


        <div>
        <h4 style={{marginTop:"50px",marginLeft:"70px",fontFamily: 'Montserrat'}}>Seller Details</h4>

<div className='prod-des-div'>
  <p className='prod-des-p'>• Seller Name  : {productDet.selName} </p>
  <p className='prod-des-p'>• Seller Phone : {productDet.selPhone} </p>
  <p className='prod-des-p'>• Seller Email : {productDet.selMail} </p>
 
</div>

        </div>

        </div>
    </div>
  )
}

export default PropertyDetails