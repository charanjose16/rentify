import React from 'react'
import './homepage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div >
        <div className='selbuy'>
            <button className='selbuy-button' onClick={()=>navigate('/sellerpage')}>Seller</button>
            <button className='selbuy-button' onClick={()=>navigate('/buyerpage')}>Buyer</button>
        </div>
    </div>
  )
}

export default HomePage