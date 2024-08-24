import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from './Component/ButtonComponent/ButtonComponent'
import FooterComponent from './Footer/Footer'
import { Hover } from 'react-hover'

const Contact = () => {
  // const data=[
  //   {
  //     id: 1,
  //     image:"https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-living-room-line-icon-vector-png-image_6706453.png",
  //     title:"Modern Living  Area",
  //     description: "Iterative methods of developing the corporate ",

  //   },

  //   {
  //     id: 2,
  //     image:"https://static.thenounproject.com/png/3535152-200.png",
  //     title:"Interior Design",
  //     description: "We create the complete set of project information.",

  //   },


  //   {
  //     id: 3,
  //     image:"https://cdn.iconscout.com/icon/free/png-256/free-3d-design-2043304-1724572.png",
  //     title:"3D Design Layouts",
  //     description: "Iterative methods of developing the corporate strategy.",

  //   },

  //   {
  //     id: 4,
  //     image:"https://cdn-icons-png.flaticon.com/512/312/312688.png",
  //     title:"Remodel Spaces",
  //     description: "We create the complete set of project information.",

  //   },
  // ]
  return (
  <>
    <div className='relative h-[500px] w-[90rem] ml-[2.5rem] bg-cover bg-center rounded-[10px] overflow-hidden' style={{backgroundImage:'url("https://images.unsplash.com/photo-1682332322118-75312faae724?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")  ' } }>
      <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative flex flex-col pt-[200px] pl-5 text-center'>
                <h1 className='text-2xl font-bold text-white text-center'><Link to='/'>HOME </Link> / Contact</h1>
                <h5 className='text-white'>Contact</h5>
          </div>

    


    </div>
{/* 
      <div className=' flex justify-evenly '>

      {data.map((card)=>(
        <div key={card.id} className='bg-gray-200 h-[180px] w-[250px] ml-10   rounded-[10px] mt-[80px] ' id='card' >
          <div className='flex gap-2 '>

           <img src={card.image} className='rounded-[30%] h-[80px] ' />
           <h1 className='text-lg font-bold pt-5 '>{card.title}</h1>

          </div>
            <div className='h-[1px] bg-gray-300 w-[250px] mt-2'>
            </div>
          
          
          <p className='text-sm pt-5 pl-4' >{card.description}</p>
          

         
        </div>
        

      ))}
     

      </div> */}

      <div className='flex'>
        <div className='  text-black ml-10 pt-20 text-xl '>
          <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-bold'>Contact Us </h1>
          <p className='pt-4'>
          Thank you for visiting FashionFusion! We're here to help with any questions
           or concerns you may have about our products, your orders, or anything else
            related to your shopping experience. 
          </p>


          </div>


        </div>
{/* 
        <div className='mt-[80px] ml-10'>
        
          <div className='bg-gray-200 h-[27rem] w-[40rem] rounded-[12px]'>
            <h1 className='text-amber-950 text-3xl font-bold text-center pt-5'> Send a Message</h1>
              <div className='ml-5 mt-7 '>
                <input type="text" placeholder="Message" className="w-[37rem] h-[10rem]  rounded-[10px] pb-20 pl-5"/>
               </div>
              
            <div className='ml-5 flex gap-5 mt-10'>
              <input type="text" placeholder='Name' className='w-[18rem] h-[4rem] rounded-[10px]  pl-4' />
              <input type="text" placeholder='Email' className='w-[18rem] h-[4rem] rounded-[10px]  pl-4' />
            </div>
            <div className='text-black flex justify-center  mt-5'>
            <ButtonComponent text={"Submit"} className="text-center " />
            </div>

          </div>
          
        </div> */}
               <div className='mt-20 ml-10'>
    <div className='bg-gray-200 h-auto w-[40rem] rounded-xl shadow-lg p-8'>
        <h1 className='text-amber-950 text-3xl font-bold text-center mb-6'>Send a Message</h1>
        
        <div className='mb-6'>
            <textarea 
                placeholder="Message" 
                className="w-full h-40 rounded-lg p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
        </div>
        
        <div className='flex gap-4 mb-6'>
            <input 
                type="text" 
                placeholder='Name' 
                className='w-1/2 h-12 rounded-lg p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600' 
            />
            <input 
                type="email" 
                placeholder='Email' 
                className='w-1/2 h-12 rounded-lg p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600' 
            />
        </div>
        
        <div className='flex justify-center'>
            <ButtonComponent text={"Submit"} className="text-white bg-amber-950 hover:bg-amber-700 px-6 py-3 rounded-lg transition duration-200 ease-in-out" />
        </div>
    </div>
</div>
      </div>
{/* 
      <div className="mt-10">
        <div><iframe width="100%" height="400"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kathmandu,Nepal+(MotorsNepal)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
       
      </div> */}
    <FooterComponent/>
  </>

  )
}

export default Contact