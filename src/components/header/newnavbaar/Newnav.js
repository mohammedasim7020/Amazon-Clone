import React from 'react'
import './newnav.css'
const Newnav = () => {
  return (
    <div className='new_nav'>
      <div className='nav_data'>
        <div className='left_data'>
            <p>All</p>
            <p>Mobile</p>
            <p>BestSeller</p>
            <p>Fashion</p>
            <p>Customer Services</p>
            <p>Prime</p>
            <p>Today's deal</p>
            <p>Amazon Pay</p>
        </div>
        <div className='right_data'>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Yashoda/400x39-SWM_NP._CB618896194_.jpg' alt='navdata'/>
        </div>
      </div>
    </div>
  )
}

export default Newnav
