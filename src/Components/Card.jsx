import React from 'react'
import { FaStar } from 'react-icons/fa'
import { BsFillBagHeartFill } from 'react-icons/bs'


function Card ({ img, title, rating, reviews, prevPrice, newPrice}) {
  const totalStars = 5;


  return (
    <>
     <section className="card">
               <img
                 src={img}
                 alt={title}
                 className='card-img'
               />
               <div className="card-details">
                 <h3 className="card-title">{title}</h3>
                 <section className="card-reviews">
                   {[...Array(totalStars)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <FaStar key={index} color={starValue <= rating ? '#ffc107':'#e4e5e9'} size={25} />
                    )
                   })}
                   <span className="total-reviews">{reviews}</span>
                 </section>
                 <section className="card-price">
                   <div className="price">
                     <del>{prevPrice}</del> {newPrice}
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
