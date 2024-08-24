import React from 'react';

const About = () => {
  const data = [
    {
      id: 1,
      image: "https://cdn-icons-png.freepik.com/256/4102/4102704.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "Sustainable Fashion",
      description: "Our commitment to sustainability ensures that every piece\nis crafted with eco-friendly materials and processes."
    },
    {
      id: 2,
      image: "https://cdn-icons-png.freepik.com/256/10616/10616523.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "Exclusive Designs",
      description: "Discover unique designs created by top fashion designers\nthat you won't find anywhere else."
    },
    {
      id: 3,
      image: "https://cdn-icons-png.freepik.com/256/13139/13139146.png?uid=R155024042&ga=GA1.2.1066521216.1717933232&semt=ais_hybrid",
      title: "Premium Quality",
      description: "We prioritize high-quality fabrics and craftsmanship,\nmaking sure every piece is durable and luxurious."
    }
  ];

  return (
    <>
      <div className='pt-36 pl-10'>
        <h1 className='text-blue-950 text-5xl'>Why Choose FashionFusion!</h1>
      </div>

      <div className='flex flex-col pt-10 gap-10 m-[2rem]'>
        {data.map((card) => (
          <div key={card.id} className='flex'>
            <div className='ml-[5rem]'>
              <img src={card.image} className='rounded-[50%] h-[55px] w-[55px] border border-black ' />
            </div>
            <div className='pl-4 '>
              <h1 className='text-xl text-blue-950'>{card.title}</h1>
              <p style={{ whiteSpace: 'pre-line' }}>{card.description}</p>
            </div>
          </div>
          
        ))}

        <div className='flex justify-center mt-[-29rem] ml-[45rem]'>
          <img src='https://plus.unsplash.com/premium_photo-1724220736652-8514fef4f067?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[430px]'/>
        </div>

      </div>
    </>
  );
};

export default About;

