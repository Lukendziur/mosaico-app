import React from 'react'
import './body.css'

const Card = ({ id, urls, alt }) => {
    const { regular } = urls

  

  return (
    <>   
    <img  src={regular}  alt={alt} id={id} className='card-img'/> 
    </>
  )
}

export default Card

