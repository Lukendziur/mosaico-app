import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { getCollectionPerId } from '../services/service'
import { imgGalleryFunction } from '../utils/util';
import Card from './Card';

const SingleCollection = () => {
  const { id } = useParams();
 const [imgCollection, setImgCollection] = useState([])
 const [arrImages, setArrImages] = useState([])


const getCollection = async() => {
    const data = await getCollectionPerId(id)
    setImgCollection(data)   
  }

  useEffect(() =>{
    getCollection()   
  }, [])

 
  useEffect(() =>{
    if (imgCollection.length >0) {
      const dataGroups = imgGalleryFunction(imgCollection)
      setArrImages(dataGroups)      
    }
  }, [imgCollection])
    

  return (
    <>

   <div className="row"> 
  {
  arrImages.length > 0 &&
  arrImages.map((arrImg, index) => (
    <div className="column" key={index}>
      {
      arrImg.map((singleImg) => (

        <Card
        liked={singleImg.liked_by_user}
        id={singleImg.id}
        likes={singleImg.likes}
        key={singleImg.id}
        urls={singleImg.urls}
        alt={singleImg.alt_description}
        />     
        )
      
      )  

      
      }

    </div>
  ))
}
    
</div>
    </>
  )
}

export default SingleCollection