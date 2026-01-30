import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
import img from 'c:/Users/user/Pictures/All/Cars/DSC00173.jpg'

function Card () {
  return (
    <>
     <section className="card">
               <img
                 src={img}
                 alt="Shoe"
                 className='card-img'
               />
               <div className="card-details">
                 <h3 className="card-title">Nike Shoe</h3>
                 <section className="card-reviews">
                   <AiFillStar className='ratings-star' />
                   <AiFillStar className='ratings-star' />
                   <AiFillStar className='ratings-star' />
                   <AiFillStar className='ratings-star' />
                   <span className="total-reviews">4.5</span>
                 </section>
                 <section className="card-price">
                   <div className="price">
                     <del>$300</del> $200
                   </div>
                   <div className="bag">
                     <BsFillBagHeartFill className='bag-icon' />
                   </div>
                 </section>
               </div>
             </section> 
    </>
  )
}

export default Card
