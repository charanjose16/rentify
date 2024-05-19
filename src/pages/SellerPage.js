import "./sellerpage.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection,getDocs,deleteDoc,doc } from 'firebase/firestore';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SellerPage = () => {

  const [user, setUser] = useState("");
 
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const navigate=useNavigate();

  const handleLogout = async () => {
  
    try {
      await auth.signOut();
      setUser(null);
      navigate("/")
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        fetchUserData(authUser.uid);
  
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchUserData = async (UserUid) => {
    try {
      const usersCollectionRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollectionRef);
  
      querySnapshot.forEach((userDoc) => {
        const userData = {...userDoc.data(),name:userDoc.data().name};
     
        if (userData.uid === UserUid) {
          setUser(userData.name);
        }
      });
  
    
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  
  const [deals,setDeals]=useState([]);

const dealsCollectionRef=collection(db,"properties");

const viewAll=(collName)=>{
  navigate("/allProducts",{state:{products:collName}})
}

useEffect(()=>{
  const getDealsData=async()=>{
    const res=await getDocs(dealsCollectionRef);
    setDeals(res.docs.map((doc)=>({...doc.data(),name:doc.data().name,image:doc.data().image,old_price:doc.data().old_price,discount:doc.data().discount,quantity:doc.data().quantity,id:doc.id})))
  }
  getDealsData();
},[])


const deleteProduct=async(id,collecName)=>{
  const prodId=doc(db,collecName,id)
  await deleteDoc(prodId);
  alert("Product has been deleted!");
  window.location.reload();
}
const editPage=(deal,coll_name)=>{
  navigate("/editProperty",{state: {productId:deal,colName:coll_name}})
}

const discountPrice=(old_price,discount)=>{
  return (old_price-(old_price*discount)/100).toFixed(0);
}

  return (

    
    <div >

    <div  className="admin-header-div">
    <button className='admin-logout-button' style={{width:"150px"}} onClick={()=> navigate('/addproperty')}>Add Property</button>
    <h3 style={{marginRight:"100px"}}>Seller Panel</h3>
    <button className='btn btn-primary admin-logout-button' onClick={handleLogout}>Logout</button>
    </div>


    <div  className='product-card-container'>
      {deals.slice(0,3).map((deal)=>(
        <div className='prod-card-grid-items'>
        <div className='admin-prod-card-img-quan '>
        <img src={deal.image} width="140" height="140" style={{objectFit:"contain"}} alt=''></img>
        <h5>Area: {deal.quantity}</h5> 
        </div>
        <h4 className='prodcard-prod-name'>{deal.name}</h4>
        <div className='prodcard-mrp-dis'>
        <p className='product-card-mrp' style={{fontSize:"13px"}}>MRP.{deal.old_price}</p>
        <p style={{fontSize:"13px"}}>Discount: <span className='prodcard-dis' style={{fontSize:"13px"}}>{deal.discount}% off</span> </p>
        </div>
        <p>Price: <span className='prodcard-pri'>Rs. {discountPrice(deal.old_price,deal.discount)}</span></p>
        <div className='prod-card-edit-rem'>
        <button className='btn btn-primary admin-logout-button' onClick={()=>{editPage(deal,"properties")}}>Edit</button>
        <button className='btn btn-primary admin-logout-button' onClick={()=>{deleteProduct(deal.id,"properties")}} style={{width:"150px",backgroundColor:"lightgreen"}}>Remove Property</button>
        </div>
        </div>
        ))}
      </div>
    




    </div>
  )
}

export default SellerPage