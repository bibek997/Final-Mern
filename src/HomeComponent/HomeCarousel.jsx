
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/slide1.png';
import image2 from '../assets/slide1.png';
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent';

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
  <>
 <div className="carousel-container w-[1500px] mx-auto pt-[69px]">
    <Slider {...settings}>
        <div className="w-full h-[600px] relative">
            <img src={image1} alt="Slide 1" className="carousel-image object-fit w-[1500px] h-[600px]" />
            <div className="absolute inset-0 flex text-white bg-black bg-opacity-50">
                <div className="ml-[20px] mt-[35vh]">
                    <h2 className="text-3xl font-bold">Unleash Your Style</h2>
                    <p className="text-lg">Discover the latest trends in fashion and make a statement wherever you go.</p>
                    <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-[600px] relative">
            <img src={image2} alt="Slide 2" className="carousel-image object-fit w-full h-[600px]" />
            <div className="absolute inset-0 flex text-white bg-black bg-opacity-50">
                <div className="ml-[20px] mt-[35vh]">
                    <h2 className="text-3xl font-bold">Redefine Elegance</h2>
                    <p className="text-lg">Elevate your wardrobe with our exclusive collection of chic and sophisticated outfits.</p>
                    <button className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                        Explore Collection
                    </button>
                </div>
            </div>
        </div>
    </Slider>
</div>

<div className='flex'>
    <div className='pl-8 mt-36'>
        <img src='https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[430px] w-[700px]' />
    </div>
    <div className='flex flex-col mt-44 ml-32'>
        <h2 className="text-5xl font-bold text-blue-950">Elevate Your Style,<br />
            Embrace the Future.</h2>
        <p className='pt-5 text-blue-950 text-lg'>
            At FashionFusion, we craft collections that blend timeless elegance with modern trends.<br />
            Discover pieces that not only make a statement but also bring comfort to your everyday wear.<br />
            Experience fashion that evolves with you, every step of the way.
        </p>
        <div className='mt-4'>
            <ButtonComponent text="Discover More" />
        </div>
    </div>
</div>

  </>
  );
}

export default HomeCarousel;


