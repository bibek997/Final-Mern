import React from 'react'
import FeatureItem from '../Card/FeatureItem'
import FooterComponent from '../Footer/Footer'
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent'



function Features() {

  const FeaturedData=[
    {
      id:1,
      image:"src/assets/casual.jpg",
      title:"Casual",
      Description:"Comfortable and relaxed clothing suitable for everyday wear and informal outings, such as jeans, t-shirts, and casual dresses."
    },  
    {
      id:2,
      image:"src/assets/fromal.jpg",
      title:"Formal",
      Description:"Elegant and sophisticated attire designed for special occasions, including business suits, evening gowns, and cocktail dresses."
  
    },
    {
      id:3,
      image:"src/assets/outdoor.jpg",
      title:"Outdoor",
      Description:"Functional and durable apparel for outdoor activities, including hiking gear, swimwear for beach outings, and sportswear for active pursuits."    
    },
    {
      id:4,
      image:"src/assets/indoor.jpg",
      title:"Indoor",
      Description:"Cozy and comfortable clothing for relaxing at home, such as loungewear, sweatpants, and hoodies."    
    },
  ]
  return (
    <> 
      <div>
        <div className="flex justify-center pt-5">
         <h1 className='text-3xl font-bold text-cyan-900  '>
          Featured 
          </h1> 
        </div>
        <div className='flex' >
        
            <FeatureItem data={FeaturedData}/>
            
        </div>
       
      </div>

      <FooterComponent/>
     


    </>
  )
}

export default Features