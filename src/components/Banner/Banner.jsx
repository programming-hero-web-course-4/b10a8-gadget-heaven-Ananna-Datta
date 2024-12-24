import { Link } from 'react-router-dom';
import img from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div className='mb-96 pb-32'>
      <div className="bg-[#9538E2] max-w-7xl mx-auto  text-[#ffff]">
      <div className="hero pt-32 pb-48">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to='/dashboard' className="btn text-[#9538E2]">Shop Now</Link>
          </div>
        </div>
      </div>

      <div className='w-7/12 h-64 ml-52 -mt-48 absolute'>
        <img className='rounded-3xl' src={img} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
